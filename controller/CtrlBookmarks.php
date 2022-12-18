<?php
require "../model/Bookmarks.php";
session_start();
$bookmarks = new Bookmarks();

switch ($_REQUEST["op"]) {
    case 'is_saved':
        if (isset($_POST['user_id']) && isset($_POST['receta_id'])) {
            echo $bookmarks->isSaved($_POST['user_id'], $_POST['receta_id']);
        }
        break;
    case 'bookmarks':
        $userId = $_POST['user_id'];
        $order = $_POST['order'];
        $sort = $_POST['sort'];
        $result = $bookmarks->getBookmarksByUserID($userId, $order, $sort);
        echo json_encode($result);
        break;
    case 'save_bookmark':
        if (isset($_POST['user_id']) && isset($_POST['receta_id'])) {
            $bookmarks->saveBookmark($_POST['user_id'], $_POST['receta_id']);
        }
        break;

    case 'remove_bookmark':
        if (isset($_POST['user_id']) && isset($_POST['receta_id'])) {
            $bookmarks->removeBookmark($_POST['user_id'], $_POST['receta_id']);
        }
        break;

}
