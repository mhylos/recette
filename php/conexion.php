<?php
$db = mysqli_connect('localhost', 'root', '', 'recette2');
if ($db->connect_error) {
    die("Conexion fallida: " . $db->connect_error);
} else {
    echo "Conexion establecida...";
    mysqli_set_charset($db, 'utf8');
}
