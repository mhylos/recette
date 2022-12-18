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
            WHERE receta_id = $receta_id
            ORDER BY comments.fecha DESC";
        $data = $this->Ejecutar($sentencia, 0);
        return $data;
    }
    
    function insertComment($user_id, $receta_id, $contenido, $nota){
        $sentencia = "INSERT INTO comments (receta_id, user_id, contenido, nota) VALUES ('$receta_id', '$user_id', '$contenido', '$nota')";
        $this->Ejecutar($sentencia, 1);
    }

    function getCommentsByUserID($user_id, $order, $sort)
    {
        $sort = $sort == 'true' ? 'ASC' : 'DESC';

        if ($order == 'nombre') {
            $order_by = "nombre $sort, R.fecha ASC";
            // $order = 'nombre, fecha, calificacion';
        } else if ($order == 'fecha') {
            $order_by = "R.fecha  $sort, nombre ASC";
            // $order = 'fecha, nombre, calificacion';
        } else {
            $order_by = "nombre  $sort, R.fecha ASC";
            // $order = 'calificacion, nombre, fecha';
        }

        // return $sort;
        $sql = "SELECT * FROM comments C JOIN recetas R USING (receta_id) WHERE user_id = $user_id ORDER BY $order_by";
        $results = $this->Ejecutar($sql, 0);
        return $results;
    }
}
