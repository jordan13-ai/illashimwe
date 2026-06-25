<?php
/**
 * Illashimwe Adventure — Form Handler
 * Change MAIL_TO to wherever you want enquiries delivered.
 */
const MAIL_TO   = 'info@illashimweadventures.com';
const MAIL_FROM = 'noreply@illashimweadventures.com';
const MAIL_NAME = 'Illashimwe Adventure';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

function clean(string $val, int $maxLen = 500): string {
    return mb_substr(htmlspecialchars(strip_tags(trim($val)), ENT_QUOTES, 'UTF-8'), 0, $maxLen);
}
function safeEmail(string $email): string {
    $email = preg_replace('/[\r\n\t]/', '', trim($email));
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    return mb_substr($email, 0, 254);
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (strpos($contentType, 'application/json') !== false) {
    $data = json_decode(file_get_contents('php://input'), true) ?? [];
} else {
    $data = $_POST;
}

// Honeypot spam block
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
        $body  = "Name:    {$name}\n";
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
        $body  = "Name:          {$name}\n";
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
        $body  = "Name:        {$name}\n";
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
        $body  = "Name:  {$name}\n";
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

$headers  = "From: " . MAIL_NAME . " <" . MAIL_FROM . ">\r\n";
$headers .= "Reply-To: {$safeReplyTo}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail(MAIL_TO, $subject, $body, $headers);

echo $sent
    ? json_encode(['success' => true])
    : json_encode(['error' => 'Failed to send. Email us at ' . MAIL_TO]);
