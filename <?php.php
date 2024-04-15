<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $postContent = $_POST["postContent"];
            
                // Check if the content is not empty
                    if (!empty($postContent)) {
                                $file = "posts.txt";
                                        $currentContent = file_get_contents($file);
                                                $currentContent .= $postContent . PHP_EOL;
                                                        file_put_contents($file, $currentContent);
                    }
}
?>