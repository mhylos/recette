<?php
$conexion = new mysqli("localhost", "root", "", "recette"); //Establecemos conexión

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
