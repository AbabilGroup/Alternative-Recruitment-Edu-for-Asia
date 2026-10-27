<?php
// Form handler for cPanel (PHP mail()). Handles the consultation, partner and contact forms.
// Change $to to the inbox that should receive enquiries.
$to   = 'info@alternativerecruitment.education';
$from = 'no-reply@' . preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'localhost');

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot: bots fill in the hidden "website" field.
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

function field($key) {
    return trim(str_replace(["\r", "\n"], ' ', strip_tags($_POST[$key] ?? '')));
}

$formType = field('formType');
$name     = field('fullName');
$email    = field('email');
$phone    = field('phone');
$message  = trim(strip_tags($_POST['message'] ?? ''));

// Required fields per form, on top of name, email and phone.
$required = [
    'consultation' => ['country'],
    'partner'      => ['agencyName', 'country'],
    'contact'      => ['inquiryType'],
];

if (!isset($required[$formType])) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Unknown form.']);
    exit;
}

$missing = $name === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL);
foreach ($required[$formType] as $key) {
    if (field($key) === '') $missing = true;
}
if ($missing) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please complete all required fields.']);
    exit;
}

if ($formType === 'partner') {
    $agency  = field('agencyName');
    $subject = "New partner application: $agency";
    $body    = "Agency / Business: $agency\nContact person: $name\nEmail: $email\nPhone / WhatsApp: $phone\n"
             . "Country of operation: " . field('country') . "\nAnnual student volume: " . field('studentVolume')
             . "\n\nAdditional information:\n$message\n";
} elseif ($formType === 'contact') {
    $type    = field('inquiryType');
    $subject = "New contact message ($type): $name";
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nInquiry type: $type\n\nMessage:\n$message\n";
} else {
    $country = field('country');
    $subject = "New consultation request: $name ($country)";
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nDesired country: $country\nIntake: " . field('intake')
             . "\n\nMessage:\n$message\n";
}

$headers = "From: Alternative Recruitment <$from>\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail could not be sent.']);
}
