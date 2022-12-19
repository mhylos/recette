<?php
require "conexion.php";

class Recetas
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

    function obtenerRecetaPorId($id)
    {
        $sql = "SELECT * FROM recetas WHERE receta_id = $id";
        $data = $this->Ejecutar($sql, 0);
        return $data;
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

    function getRandomRecipe()
    {
        $sentencia = "SELECT * FROM recetas ORDER BY RAND() LIMIT 3";
        $data = $this->Ejecutar($sentencia, 0);
        return $data;
    }

    function getTopRecipe()
    {
        $sentencia = "SELECT AVG(nota) nota, nombre, img_name FROM comments JOIN recetas USING (receta_id) GROUP BY nombre ORDER BY nota DESC LIMIT 3";
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

    function getByName($name)
    {
        $sentencia = "SELECT receta_id, nombre, descripcion, img_name FROM recetas WHERE nombre LIKE '%$name%'";
        $data = $this->Ejecutar($sentencia, 0);
        return $data;
    }
}
