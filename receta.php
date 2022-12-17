<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recette</title>
    <meta name="description" content="Busca las mejores recetas de Chile">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <!-- Prefetch -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <link rel="preload" href="css/style.css" as="style">
    <link rel="stylesheet" href="css/style.css">

    <link rel="preload" href="css/receta.css" as="style">
    <link rel="stylesheet" href="css/receta.css">

    <link rel="preload" href="css/footer.css" as="style">
    <link rel="stylesheet" href="css/footer.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
    <?php include('includes/header.php')?>
    
    <main class="m-1">
        <div class="receta-container">

            <div class="d-grid my-2">
                <div class="row d-flex align-items-end">
                    <div class="col-10 d-flex">
                        <h2 class="titulo-receta bold morado-1" id="titulo"></h2>
                    </div>
                    <div class="col-2 d-flex justify-content-end">
                        <i class="fa-solid fa-star"></i><b><span id="score">0</span>/7</b>
                    </div>
                </div>
            </div>

            <div class="d-grid bg-body border rounded-2 shadow my-3">
                <div class="row">
                    <div class="col-7">
                        <img id="receta-img" src="" alt="Sin imagen">
                    </div>
                    <div class="col-5 info-receta py-2 d-flex flex-column justify-content-between">
                        <div>
                            <i class="fa-solid fa-chevron-right"></i> <span> Dificultad: <b id="dificultad"></b></span>
                            <br>
                            <i class="fa-solid fa-chevron-right"></i> <span>Preparación: <b id="duracion"></b></span>
                            <br>
                            <i class="fa-solid fa-chevron-right"></i> <span>Dosis: <b id="dosis"></b></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-grid bg-body my-3 p-2 rounded-2 shadow" id="ingredientes">
                <h2 class="bold morado-1">Ingredientes</h2>
                <hr class="w-25 ms-2">
            </div>

            <div class="d-grid bg-body my-3 p-2 rounded-2 shadow">
                <h2 class="bold morado-1">Preparación</h2>
                <hr class="w-25 ms-2">
                <div>
                    <ol class="list-group list-group-flush" id="pasos">

                    </ol>
                </div>
            </div>

            <div class="d-grid bg-body my-3 p-2 rounded-2 shadow">
                <div class="d-flex justify-content-between comments-header">
                    <h2 class="bold morado-1">Comentarios</h2>
                </div>
                <hr class="w-25 ms-2">
                <div>
                    <ul class="list-group list-group-flush" id="comentarios">
                        
                    </ul>
                </div>                
            </div>
        </div>
    </main>
    <?php include('includes/footer.php') ?>

    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="js/receta.js"></script>
</body>

<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

</html>