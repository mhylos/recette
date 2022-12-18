<?php
include "../model/user.php";
session_start();
$user = new User();
$request = $_REQUEST["op"];

switch ($request) {
    case 'search':
        $email = $_POST['email'];
        $result = $user->search($email);
        if (mysqli_num_rows($result) == 0) {
            echo '';
        } else {
            $string = "";
            $userResult = mysqli_fetch_array($result);
            for ($i = 0; $i < 9; $i++) {
                $string .= "$userResult[$i], ";
            }
            echo $string;
        }
        break;
    case 'register':
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $user->register($firstName, $lastName, $email, $password);
        break;
        
} 
    
        // else {
            // echo md5($_POST['password']);
// }
