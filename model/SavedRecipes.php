<?php
require "conexion.php";

class SavedRecipes {
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

    function isSaved($user_id, $recipe_id)
    {
        $sentencia = "SELECT * FROM saved_recipes WHERE (user_id = $user_id AND receta_id = $recipe_id)";
        $saved = $this->Ejecutar($sentencia, 0);
        if ($saved) return 1;
        return 0;
    }

}
