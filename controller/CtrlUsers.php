<?php
include "../model/User.php";
session_start();
$user = new User();
$request = $_REQUEST["op"];

switch ($request) {
    case 'search':
        $email = $_POST['email'];
        $result = $user->search($email);
        echo json_encode($result);
        break;

    case 'register':
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $gender = $_POST['gender'];
        $birthday = $_POST['birthday'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $user -> register($firstName, $lastName, $gender, $birthday, $email, $password, $phone, $address);
        break;

    case 'update':
        $user_id = $_POST['user_id'];
        $columns = $_POST['columns'];
        $values = $_POST['values'];
        
        echo $user -> update($user_id, $columns, $values);
        break;
}