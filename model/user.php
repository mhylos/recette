<?php
require "conexion.php";

class User
{
    private $db;

    function __construct()
    {
        $this->db = new Database();
    }

    function Ejecutar($sentencia, $op)
    {
        $this->db->connect();
        if ($op == 0) {
            $data = $this->db->EjecutarQuery($sentencia, $op);
            $this->db->disconnect();
            return $data;
        } else {
            $this->db->EjecutarQuery($sentencia, $op);
            $this->db->disconnect();
        }
    }

    function search($email)
    {
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $data = $this->Ejecutar($sql, 0);
        return $data;
    }
    
    function register($firstName, $lastName, $gender, $birthday, $email, $password, $phone, $address)
    {
        $sql = "INSERT INTO users (nombre, apellido, genero, f_nacimiento, email, pass, celular, direccion)
                VALUES ('$firstName', '$lastName', '$gender', '$birthday', '$email', '$password', '$phone', '$address')";
        $this->Ejecutar($sql, 1);
    }

    function update($user_id, $columns, $values) {
        $colVal = '';
        for ($i=0; $i < count($columns); $i++) { 
            $colVal .= "$columns[$i] = '$values[$i]'";
            $colVal .= $i < count($columns) - 1 ? ", " : "";
        }
        $sql = "UPDATE users SET $colVal WHERE user_id = $user_id";
        $this->Ejecutar($sql, 1);
        echo 1;
    }

}