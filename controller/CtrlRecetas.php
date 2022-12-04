<?php
    require "../model/Recetas.php";
    session_start();
    $receta = new Recetas();
    
    switch($_REQUEST["op"]){
        case 'listar_recetas':
            $data = $receta->listarRecetas();
            echo json_encode($data);
            break;

        case 'get_latest':
            $data = $receta->getLatest(3);
            echo json_encode($data);
            break;
    }
?>