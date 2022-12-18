<?php
require "../model/Recetas.php";
session_start();
$receta = new Recetas();

switch ($_REQUEST["op"]) {
    case 'obtener_receta':
        if (isset($_POST['id'])) {
            $data = $receta->obtenerRecetaPorId($_POST['id']);
            echo json_encode($data[0]);
        }
        break;

    case 'get_latest':
        $data = $receta->getLatest(3);
        echo json_encode($data);
        break;

    case 'get_categories':
        $data = $receta->getCategories();
        echo json_encode($data);
        break;

    case 'get_receta_by_category':
        if (!isset($_POST['selected_categories'])) {
            echo 0;
            break;
        }
        $selected_categories = "('" . implode("','", $_POST['selected_categories']) . "')";
        $data = $receta->getByCategories($selected_categories);
        echo json_encode($data);
        break;

    case 'get_receta_by_name':
        if (!isset($_POST['nombre'])) {
            echo 0;
            break;
        }
        $data = $receta->getByName($_POST['nombre']);
        if ($data) echo json_encode($data);
        else echo 'sin resultados';
        break;
    case 'listar_recetas':
        $data = $receta->listarRecetas();
        echo json_encode($data);
        break;

    case 'random':
        $data = $receta->getRandomRecipe();
        echo json_encode($data);
        break;
    case 'top':
        $data = $receta->getTopRecipe();
        echo json_encode($data);
        break;
}
?>