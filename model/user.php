<?php
class User
{
    public $servername = "localhost";
    public $username = "root";
    public $password = "";
    public $name = "recette";
    public $conn;
    function start()
    {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->name);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    function close()
    {
        $this->conn->close();
    }

    function query($sql)
    {
        $this->start();
        $result = $this->conn->query($sql);
        $this->close();
        return $result;
    }

    function search($email)
    {
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $results = $this->query($sql);
        return $results;
    }
    function register($firstName, $lastName, $email, $password)
    {
        $sql = "INSERT INTO USERS (NOMBRE, APELLIDO, EMAIL, PASS) VALUES ('$firstName', '$lastName', '$email', '$password')";
        $this->query($sql);
        // return $results;
    }
    

}
