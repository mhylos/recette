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

        switch ($order) {
            case 'nombre':
                $order_by = "nombre $sort, R.fecha ASC";
                break;
            
            case 'fecha':
                $order_by = "fecha  $sort, nombre ASC";
                break;
            
            case 'puntaje':
                $order_by = "puntaje $sort, nombre  ASC, fecha ASC";
                break;
        }
        // return $sort;
        $sql = "SELECT R.receta_id, R.nombre, C.nota puntaje, C.contenido, C.fecha FROM comments C JOIN recetas R USING (receta_id) WHERE user_id = $user_id ORDER BY $order_by";
        $results = $this->Ejecutar($sql, 0);
        return $results;
    }
}
