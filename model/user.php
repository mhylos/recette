<?php
require "conexion.php";

class User
{
    // public $recetas;
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
        // return $results;
    }

    function update($user_id, $columns, $values) {
        $colVal = '';
        for ($i=0; $i < count($columns); $i++) { 
            $colVal .= "$columns[$i] = '$values[$i]'";
            $colVal .= $i < count($columns) - 1 ? ", " : "";
        }
        // $colVal
        // echo $colVal;
        $sql = "UPDATE users SET $colVal WHERE user_id = $user_id";
        $this->Ejecutar($sql, 1);
        echo 1;
    }

}

// class User
// {
//     public $servername = "190.45.88.109:3306";
//     public $username = "root";
//     public $password = "";
//     public $name = "recette";
//     public $conn;

//     function start()
//     {
//         $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->name);
//         if ($this->conn->connect_error) {
//             die("Connection failed: " . $this->conn->connect_error);
//         }
//     }

//     function close()
//     {
//         $this->conn->close();
//     }

//     function query($sql)
//     {
//         $this->start();
//         $result = $this->conn->query($sql);
//         $this->close();
//         return $result;
//     }

//     function search($email)
//     {
//         $sql = "SELECT * FROM users WHERE email = '$email'";
//         $results = $this->query($sql);
//         return $results;
//     }
//     function register($firstName, $lastName, $email, $password)
//     {
//         $sql = "INSERT INTO USERS (NOMBRE, APELLIDO, EMAIL, PASS) VALUES ('$firstName', '$lastName', '$email', '$password')";
//         $this->query($sql);
//         // return $results;
//     }
    

// }
