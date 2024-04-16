<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $postContent = $_POST["postContent"];
                    if (!empty($postContent)) {
                                $file = "posts.txt";
                                        $currentContent = file_get_contents($file);
                                                $currentContent .= $postContent . PHP_EOL;
                                                        file_put_contents($file, $currentContent);
                    }
}
?>
<?php
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($targetFile,PATHINFO_EXTENSION));

if (file_exists($targetFile)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

if ($_FILES["fileToUpload"]["size"] > 5000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $targetFile)) {
        echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["fullName"];
    $email = $_POST["email"];
    $website = $_POST["website"];
    $message = $_POST["message"];

    // Optionally, you can process the form data here
    // For example, send an email notification to the website owner

    // Send a success response to the client
    http_response_code(200);
    echo "Form submission successful";
} else {
    // Invalid request
    http_response_code(400);
    echo "Invalid request";
}
?>
