// Sanitize input
$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

// Validate input
if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    die('Invalid email address');
}

// Using prepared statements for database queries
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->execute(['username' => $username]);
