<?php
require "conexion.php";

class Comments {
    public $comments;
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

    function listarComentarios()
    {
        $sentencia = "SELECT * FROM comments";
        $data = $this->Ejecutar($sentencia, 0);
        return $data;
    }

    function avgScoreReceta($receta_id)
    {
        $sentencia = "SELECT ROUND(AVG(nota),1) FROM comments where receta_id = $receta_id";
        $data = $this->Ejecutar($sentencia, 0);
        return $data[0][0];
    }

    function quantityCommentsReceta($receta_id)
    {
        $sentencia = "SELECT COUNT(1) FROM comments WHERE receta_id = $receta_id";
        $data = $this->Ejecutar($sentencia, 0);
        return $data[0][0];
    }

    function getAllByRecetaId($receta_id)
    {
        $sentencia = "SELECT users.nombre, users.apellido, comments.contenido, comments.fecha, comments.nota 
            FROM comments JOIN users USING (user_id)
            WHERE receta_id = $receta_id";
        $data = $this->Ejecutar($sentencia, 0);
        return $data;
    }
}
