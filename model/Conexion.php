<?php
    class Database{
        
        private $host;
        private $db_name;
        private $username;
        private $password;
        public $conn;
    
        public function __construct()
        {
            $this->host = "localhost";
            $this->db_name = "recette";
            $this->username = "root";
            $this->password = "";
        }

        public function connect()
        {
            $this->conn = mysqli_connect($this->host, $this->username, $this->password, $this->db_name) or die($this->conn->connect_error);
        }

        public function disconnect()
        {
            mysqli_close($this->conn);
        }

        public function EjecutarQuery($query, $op)
        {
            $result = mysqli_query($this->conn, $query);
            if($op == 0){
                while($row = mysqli_fetch_array($result)){
                    $datos[] = $row;
                }
            } else {
                $datos[] = "";
            }
            $registros = isset($datos) ? $datos:NULL;
            if($registros){
                return $registros;
            }
        }
    }
?>