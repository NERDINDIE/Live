<?php
function sanitize($data) {
    return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
}

$user_input = sanitize($_POST['user_input']);
