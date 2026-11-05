<?php
// Receives the website's contact form and emails it. Runs on cPanel's PHP.
// Change $recipient to the mailbox that should receive enquiries.
$recipient = 'info@yourdomain.com';

header('Content-Type: application/json; charset=utf-8');

function respond(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

// Hidden field that people never fill in. Pretend success so bots do not retry.
if (!empty($data['company'])) {
    respond(200, ['ok' => true]);
}

function field(array $data, string $key, int $max): string {
    $value = is_string($data[$key] ?? null) ? $data[$key] : '';
    return substr(trim($value), 0, $max);
}

// Line breaks are removed from single-line values, which blocks email header injection.
function singleLine(string $value): string {
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

$name = singleLine(field($data, 'name', 120));
$email = singleLine(field($data, 'email', 160));
$phone = singleLine(field($data, 'phone', 40));
$country = singleLine(field($data, 'country', 80));
$destination = singleLine(field($data, 'destination', 80));
$level = singleLine(field($data, 'level', 80));
$message = field($data, 'message', 3000);

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'Please provide your name and a valid email.']);
}

$host = preg_replace('/[^a-z0-9.\-]/i', '', $_SERVER['SERVER_NAME'] ?? 'localhost');
$host = preg_replace('/^www\./i', '', $host);

$body = "New enquiry from the website\n\n"
    . "Name: $name\nEmail: $email\nPhone: $phone\nCountry: $country\n"
    . "Destination: $destination\nStudy level: $level\n\nMessage:\n$message\n";

$headers = "From: Website <no-reply@$host>\r\n"
    . "Reply-To: $email\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n";

$subject = '=?UTF-8?B?' . base64_encode("Study abroad enquiry: $name") . '?=';

if (mail($recipient, $subject, $body, $headers)) {
    respond(200, ['ok' => true]);
}
respond(500, ['ok' => false, 'error' => 'The message could not be sent.']);
