# Set directory permissions
find /var/www/html -type d -exec chmod 755 {} \;

# Set file permissions
find /var/www/html -type f -exec chmod 644 {} \;
