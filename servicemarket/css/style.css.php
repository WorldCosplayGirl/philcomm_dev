<?php
// First of all send css header
header("Content-type: text/css");

// Array of css files
$css = array(
    'master.css',
    'popup.css',
    'order-box.css',
    'more-information.css',
    'stats-table.css'
);

// Prevent a notice
$css_content = '';

// Loop the css Array
foreach ($css as $css_file) {
    // Load the content of the css file
    $css_content .= file_get_contents($css_file);
}

// print the css content
echo $css_content;
