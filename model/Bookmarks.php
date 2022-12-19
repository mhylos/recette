<?php

use function PHPSTORM_META\type;

require "conexion.php";

class Bookmarks
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

    function isSaved($user_id, $recipe_id)
    {
        $sentencia = "SELECT * FROM bookmarks WHERE (user_id = $user_id AND receta_id = $recipe_id)";
        $saved = $this->Ejecutar($sentencia, 0);
        if ($saved) return 1;
        return 0;
    }

    function getBookmarksByUserID($user_id, $order, $sort)
    {
        $sort = $sort == 'true' ? 'ASC' : 'DESC';
        
        if ($order == 'nombre') {
            $order_by = "nombre $sort, fecha ASC";
            // $order = 'nombre, fecha, calificacion';
        } else if ($order == 'fecha') {
            $order_by = "fecha  $sort, nombre ASC";
            // $order = 'fecha, nombre, calificacion';
        } else {
            $order_by = "puntaje $sort, nombre  ASC, fecha ASC";
            // $order = 'calificacion, nombre, fecha';
        }

        $sql = "SELECT AVG(nota) puntaje, R.nombre, R.img_name, C.fecha FROM comments C JOIN recetas R USING(receta_id) WHERE receta_id IN( SELECT receta_id FROM bookmarks JOIN recetas USING(receta_id) WHERE user_id = $user_id ) AND user_id = $user_id GROUP BY nombre ORDER BY $order_by";
        $results = $this->Ejecutar($sql, 0);
        return $results;
    }
    
    function saveBookmark($user_id, $recipe_id)
    {
        $sentencia = "INSERT INTO bookmarks(receta_id, user_id) VALUES ('$recipe_id', '$user_id');";
        $this->Ejecutar($sentencia, 1);
    }

    function removeBookmark($user_id, $recipe_id)
    {
        $sentencia = "DELETE FROM bookmarks WHERE (bookmarks.receta_id = $recipe_id AND bookmarks.user_id = $user_id)";
        $this->Ejecutar($sentencia, 1);
    }
}
