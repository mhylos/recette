<?php
require "../model/SavedRecipes.php";
session_start();
$savedrecipe = new SavedRecipes();

switch ($_REQUEST["op"]) {
    case 'is_saved':
        if (isset($_POST['user_id']) && isset($_POST['receta_id'])) {
            echo $savedrecipe->isSaved($_POST['user_id'], $_POST['receta_id']);
        }
        break;
    case 'bookmarks':
        $userId = $_POST['user_id'];
        $order = $_POST['order'];
        $sort = $_POST['sort'];
        $result = $savedrecipe->getBookmarksByUserID($userId, $order, $sort);
        echo json_encode($result);
}
