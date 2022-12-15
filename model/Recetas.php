<?php
require "conexion.php";

class Recetas {
    public $recetas;
    private $db;

    function __construct()
    {
        $this->db = new Database();
    }

    function Ejecutar($sentencia, $op)
    {
        $this->db->connect();
        if($op == 0){
            $data = $this->db->EjecutarQuery($sentencia, $op);
            $this->db->disconnect();
            return $data;
        } else {
            $this->db->EjecutarQuery($sentencia, $op);
            $this->db->disconnect();
        }
    }

    function obtenerRecetaPorId($id)
    {
        $this->db->connect();
        $sql = "SELECT * FROM recetas WHERE receta_id = $id";
        $result = mysqli_query($this->db->conn, $sql);
        $receta = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $this->db->disconnect();
        return $receta;
    }    

    function listarRecetas()
    {
        $sentencia = "SELECT * FROM recetas";
        $data = $this->Ejecutar($sentencia, 0);
        return $data;
    }

    function getLatest($quantity)
    {
        $sentencia = "SELECT * FROM recetas ORDER BY fecha DESC LIMIT $quantity";
        $data = $this->Ejecutar($sentencia, 0);
        return $data;
    }

    function getCategories()
    {
        $sentencia = "SELECT categoria AS nombre, COUNT(1) AS cantidad FROM recetas GROUP BY categoria";
        $data = $this->Ejecutar($sentencia, 0);
        return $data;
    }

    function getByCategories($categories)
    {
        $sentencia = "SELECT receta_id, nombre, descripcion, img_name FROM recetas WHERE categoria IN $categories";
        $data = $this->Ejecutar($sentencia, 0);
        return $data;
    }
}
