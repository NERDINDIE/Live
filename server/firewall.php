<?php

// List of allowed IP addresses
$allowed_ips = ['123.456.789.000', '111.222.333.444'];

// Get the IP address of the request
$ip_address = $_SERVER['REMOTE_ADDR'];

// Check if the IP address is in the list of allowed IPs
if (!in_array($ip_address, $allowed_ips)) {
    // Log the attempt
    error_log("Unauthorized access attempt from IP: $ip_address");

    // Send a 403 Forbidden response
    header('HTTP/1.1 403 Forbidden');
    exit('You are not allowed to access this page.');
}

// Further processing of the request

?>
