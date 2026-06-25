<?php
/**
 * Illashimwe Adventure — cPanel SMTP Form Handler
 * Uses PHPMailer + SMTP authentication for reliable inbox delivery
 *
 * ─── YOUR SETTINGS — edit these before uploading ─────────────────────────────
 */
const SMTP_HOST = 'mail.illashimweadventures.com'; // your cPanel mail server
const SMTP_USER = 'noreply@illashimweadventures.com'; // must exist in cPanel Email Accounts
const SMTP_PASS = 'YOUR_NOREPLY_PASSWORD';          // password you set for noreply@ in cPanel
const SMTP_PORT = 465;                              // 465 = SSL  |  587 = TLS
const SMTP_ENCR = 'ssl';                            // 'ssl' for port 465, 'tls' for port 587
const MAIL_TO   = 'info@illashimweadventures.com';  // inbox that receives all enquiries
const MAIL_NAME = 'Illashimwe Adventure';
// ─────────────────────────────────────────────────────────────────────────────

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Load PHPMailer (3 files uploaded to public_html/phpmailer/)
$base = __DIR__ . '/phpmailer/';
if (!file_exists($base . 'PHPMailer.php')) {
    http_response_code(500);
    echo json_encode(['error' => 'Mail library missing. See setup instructions.']);
    exit;
}
require $base . 'Exception.php';
require $base . 'PHPMailer.php';
require $base . 'SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function clean(string $val, int $maxLen = 500): string {
    return mb_substr(htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8'), 0, $maxLen);
}
function safeEmail(string $email): string {
    $email = preg_replace('/[\r\n\t]/', '', trim($email));
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    return mb_substr($email, 0, 254);
}

// Accept JSON (SafariQuiz) or FormData (all other forms)
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (strpos($contentType, 'application/json') !== false) {
    $data = json_decode(file_get_contents('php://input'), true) ?? [];
} else {
    $data = $_POST;
}

// Honeypot — bots fill hidden fields, humans don't
if (!empty($data['_hp']) || !empty($data['website'])) {
    echo json_encode(['success' => true]);
    exit;
}

$form_type = clean($data['form_type'] ?? 'contact', 50);
$rawEmail  = $data['email'] ?? '';

switch ($form_type) {

    case 'contact':
        $name    = clean($data['firstName'] ?? '') . ' ' . clean($data['lastName'] ?? '');
        $message = clean($data['message'] ?? '', 2000);
        $subject = 'New Contact Message — Illashimwe Adventure';
        $body  = "=== CONTACT FORM ===\n\n";
        $body .= "Name:    {$name}\n";
        $body .= "Email:   {$rawEmail}\n\n";
        $body .= "Message:\n{$message}\n";
        break;

    case 'plan-trip':
        $name          = clean($data['firstName'] ?? '') . ' ' . clean($data['lastName'] ?? '');
        $phone         = clean($data['phone'] ?? '', 30);
        $nationality   = clean($data['nationality'] ?? '', 60);
        $experience    = clean($data['experience'] ?? '', 60);
        $destination   = clean($data['destination'] ?? '', 60);
        $accommodation = clean($data['accommodation'] ?? '', 60);
        $travelDate    = clean($data['travelDate'] ?? '', 20);
        $adults        = clean($data['adults'] ?? '', 5);
        $children      = clean($data['children'] ?? '', 5);
        $infants       = clean($data['infants'] ?? '', 5);
        $comments      = clean($data['comments'] ?? '', 2000);
        $subject = 'New Trip Enquiry — Illashimwe Adventure';
        $body  = "=== TRIP PLANNING ENQUIRY ===\n\n";
        $body .= "Name:          {$name}\n";
        $body .= "Email:         {$rawEmail}\n";
        $body .= "Phone:         {$phone}\n";
        $body .= "Nationality:   {$nationality}\n\n";
        $body .= "Experience:    {$experience}\n";
        $body .= "Destination:   {$destination}\n";
        $body .= "Accommodation: {$accommodation}\n\n";
        $body .= "Travel Date:   {$travelDate}\n";
        $body .= "Adults:        {$adults}\n";
        $body .= "Children:      {$children}\n";
        $body .= "Infants:       {$infants}\n\n";
        $body .= "Comments:\n{$comments}\n";
        break;

    case 'quote':
        $name        = clean($data['firstName'] ?? '') . ' ' . clean($data['lastName'] ?? '');
        $phone       = clean($data['phone'] ?? '', 30);
        $destination = clean($data['destination'] ?? '', 60);
        $travelDate  = clean($data['travelDate'] ?? '', 20);
        $budget      = clean($data['budget'] ?? '', 30);
        $adults      = clean($data['adults'] ?? '', 5);
        $children    = clean($data['children'] ?? '', 5);
        $currency    = clean($data['currency'] ?? 'USD', 5);
        $details     = clean($data['details'] ?? '', 2000);
        $subject = 'New Quote Request — Illashimwe Adventure';
        $body  = "=== QUOTE REQUEST ===\n\n";
        $body .= "Name:        {$name}\n";
        $body .= "Email:       {$rawEmail}\n";
        $body .= "Phone:       {$phone}\n\n";
        $body .= "Destination: {$destination}\n";
        $body .= "Travel Date: {$travelDate}\n";
        $body .= "Budget:      {$budget} ({$currency})\n";
        $body .= "Adults:      {$adults}\n";
        $body .= "Children:    {$children}\n\n";
        $body .= "Additional Details:\n{$details}\n";
        break;

    case 'safari-quiz':
        $name    = clean($data['name'] ?? '', 100);
        $answer0 = clean((string)($data[0] ?? ''), 100);
        $answer1 = clean((string)($data[1] ?? ''), 100);
        $answer2 = clean((string)($data[2] ?? ''), 100);
        $subject = 'New Safari Quiz — Illashimwe Adventure';
        $body  = "=== SAFARI QUIZ ===\n\n";
        $body .= "Name:  {$name}\n";
        $body .= "Email: {$rawEmail}\n\n";
        $body .= "Q1 — Who is traveling?   {$answer0}\n";
        $body .= "Q2 — Main focus?          {$answer1}\n";
        $body .= "Q3 — When are you going? {$answer2}\n";
        break;

    default:
        http_response_code(400);
        echo json_encode(['error' => 'Unknown form type']);
        exit;
}

$safeReplyTo = safeEmail($rawEmail);
if (!filter_var($safeReplyTo, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Send via SMTP
try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_ENCR;
    $mail->Port       = SMTP_PORT;

    $mail->setFrom(SMTP_USER, MAIL_NAME);
    $mail->addAddress(MAIL_TO);
    $mail->addReplyTo($safeReplyTo);

    $mail->Subject = $subject;
    $mail->Body    = $body;

    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Mail failed: ' . $mail->ErrorInfo]);
}
