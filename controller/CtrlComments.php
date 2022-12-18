<?php
require "../model/Comments.php";
session_start();
$comentarios = new Comments();

switch ($_REQUEST["op"]) {
    case 'get_avg_score_of_recipe':
        $score = $comentarios->avgScoreReceta($_POST['receta_id']);
        if ($score)
            echo ($score);
        else
            echo 0;
        break;

    case 'get_quantity_comments_of_recipe':
        $qty = $comentarios->quantityCommentsReceta($_POST['receta_id']);
        if ($qty)
            echo ($qty);
        else
            echo 0;
        break;

    case 'get_all_of_recipe':
        $data = $comentarios->getAllByRecetaId($_POST['receta_id']);
        echo json_encode($data);
        break;

    case 'comments':
        $userId = $_POST['user_id'];
        $order = $_POST['order'];
        $sort = $_POST['sort'];
        $result = $comentarios->getCommentsByUserID($userId, $order, $sort);
        echo json_encode($result);
}
