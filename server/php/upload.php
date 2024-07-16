$allowed_types = ['image/jpeg', 'image/png', 'application/pdf'];
if (!in_array($_FILES['file']['type'], $allowed_types)) {
    die('Invalid file type');
}

if ($_FILES['file']['size'] > 2 * 1024 * 1024) {
    die('File too large');
}
