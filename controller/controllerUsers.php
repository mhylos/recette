<?php
include "../model/userModel.php";
session_start();
$userTable = new UserTable();
$request = $_REQUEST["op"];
if ($request == 'search') {
    $email = $_POST['email'];
    $result = $userTable->search($email);
    if (mysqli_num_rows($result) == 0) {
        echo '';
    } else {
        $string = "";
        $user = mysqli_fetch_array($result);
        for ($i = 0; $i < 9; $i++) {
            $string .= "$user[$i], ";
        }
        echo $string;
    }
} else if ($request == 'register') {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $userTable->register($firstName, $lastName, $email, $password);

} else {
    echo md5($_POST['password']);
}
