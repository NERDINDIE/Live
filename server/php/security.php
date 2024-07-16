<?php
// Secure session settings
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => 'example.com',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict'
]);
session_start();

// CSRF token generation
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Include CSRF token in forms
echo '<form method="POST" action="submit.php">';
echo '<input type="hidden" name="csrf_token" value="' . $_SESSION['csrf_token'] . '">';
echo '<input type="text" name="username" required>';
echo '<input type="submit" value="Submit">';
echo '</form>';

// Input validation and sanitization
$username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
if ($_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die('CSRF token validation failed');
}

// Database connection using PDO with prepared statements
try {
    $pdo = new PDO('mysql:host=localhost;dbname=test', 'username', 'password', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch();
    if ($user) {
        echo 'User found';
    } else {
        echo 'User not found';
    }
} catch (PDOException $e) {
    error_log($e->getMessage());
    die('Database error');
}
?>
