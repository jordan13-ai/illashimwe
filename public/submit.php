<?php
/**
 * Illashimwe Adventure — cPanel PHP Form Handler
 * Handles: contact, plan-trip, quote, safari-quiz
 * Sends email via cPanel's built-in mail() function
 */

header('Content-Type: application/json');

// Block non-POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Sanitize helper — strips HTML and trims whitespace
function clean(string $val): string {
    return htmlspecialchars(strip_tags(trim($val)));
}

// Accept JSON body (SafariQuiz) or form-encoded / multipart (all other forms)
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (strpos($contentType, 'application/json') !== false) {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true) ?? [];
} else {
    $data = $_POST;
}

$form_type = clean($data['form_type'] ?? 'contact');
$to        = 'info@illashimweadventures.com';
$email     = '';

// ─── Build email content per form type ────────────────────────────────────────

switch ($form_type) {

    case 'contact':
        $name    = clean($data['firstName'] ?? '') . ' ' . clean($data['lastName'] ?? '');
        $email   = $data['email'] ?? '';
        $message = clean($data['message'] ?? '');
        $subject = 'New Contact Message — Illashimwe Adventure';
        $body  = "=== CONTACT FORM SUBMISSION ===\n\n";
        $body .= "Name:    $name\n";
        $body .= "Email:   $email\n\n";
        $body .= "Message:\n$message\n";
        break;

    case 'plan-trip':
        $name          = clean($data['firstName'] ?? '') . ' ' . clean($data['lastName'] ?? '');
        $email         = $data['email'] ?? '';
        $phone         = clean($data['phone'] ?? '');
        $nationality   = clean($data['nationality'] ?? '');
        $experience    = clean($data['experience'] ?? '');
        $destination   = clean($data['destination'] ?? '');
        $accommodation = clean($data['accommodation'] ?? '');
        $travelDate    = clean($data['travelDate'] ?? '');
        $adults        = clean($data['adults'] ?? '');
        $children      = clean($data['children'] ?? '');
        $infants       = clean($data['infants'] ?? '');
        $comments      = clean($data['comments'] ?? '');
        $subject = 'New Trip Enquiry — Illashimwe Adventure';
        $body  = "=== TRIP PLANNING ENQUIRY ===\n\n";
        $body .= "Name:          $name\n";
        $body .= "Email:         $email\n";
        $body .= "Phone:         $phone\n";
        $body .= "Nationality:   $nationality\n\n";
        $body .= "Experience:    $experience\n";
        $body .= "Destination:   $destination\n";
        $body .= "Accommodation: $accommodation\n\n";
        $body .= "Travel Date:   $travelDate\n";
        $body .= "Adults:        $adults\n";
        $body .= "Children:      $children\n";
        $body .= "Infants:       $infants\n\n";
        $body .= "Comments:\n$comments\n";
        break;

    case 'quote':
        $name        = clean($data['firstName'] ?? '') . ' ' . clean($data['lastName'] ?? '');
        $email       = $data['email'] ?? '';
        $phone       = clean($data['phone'] ?? '');
        $destination = clean($data['destination'] ?? '');
        $travelDate  = clean($data['travelDate'] ?? '');
        $budget      = clean($data['budget'] ?? '');
        $adults      = clean($data['adults'] ?? '');
        $children    = clean($data['children'] ?? '');
        $currency    = clean($data['currency'] ?? 'USD');
        $details     = clean($data['details'] ?? '');
        $subject = 'New Quote Request — Illashimwe Adventure';
        $body  = "=== QUOTE REQUEST ===\n\n";
        $body .= "Name:        $name\n";
        $body .= "Email:       $email\n";
        $body .= "Phone:       $phone\n\n";
        $body .= "Destination: $destination\n";
        $body .= "Travel Date: $travelDate\n";
        $body .= "Budget:      $budget ($currency)\n";
        $body .= "Adults:      $adults\n";
        $body .= "Children:    $children\n\n";
        $body .= "Additional Details:\n$details\n";
        break;

    case 'safari-quiz':
        $name    = clean($data['name'] ?? '');
        $email   = $data['email'] ?? '';
        $answer0 = clean((string)($data[0] ?? ''));
        $answer1 = clean((string)($data[1] ?? ''));
        $answer2 = clean((string)($data[2] ?? ''));
        $subject = 'New Safari Quiz — Illashimwe Adventure';
        $body  = "=== SAFARI QUIZ SUBMISSION ===\n\n";
        $body .= "Name:  $name\n";
        $body .= "Email: $email\n\n";
        $body .= "Q1 — Who is traveling?    $answer0\n";
        $body .= "Q2 — Main focus?           $answer1\n";
        $body .= "Q3 — When are you going?  $answer2\n";
        break;

    default:
        http_response_code(400);
        echo json_encode(['error' => 'Unknown form type']);
        exit;
}

// ─── Validate email ────────────────────────────────────────────────────────────

$email = filter_var(trim($email), FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// ─── Send via cPanel mail() ────────────────────────────────────────────────────

$headers  = "From: Illashimwe Adventure <noreply@illashimweadventures.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail delivery failed. Please contact us at info@illashimweadventures.com']);
}
