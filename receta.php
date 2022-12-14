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

    <link rel="stylesheet" type="text/css" href="plugins/css/star-rating-svg.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
    <?php include('includes/header.php')?>
    
    <main class="m-1">
        <div class="receta-container">

            <div class="d-grid my-2">
                <div class="row d-flex align-items-end mx-0">
                    <div class="col-10 d-flex">
                        <h2 class="titulo-receta bold morado-1" id="titulo"></h2>
                    </div>
                    <div class="col-2 d-flex justify-content-end">
                        <i class="fa-solid fa-star"></i><b><span id="score">0</span>/5</b>
                    </div>
                </div>
            </div>

            <div class="d-grid bg-body border rounded-2 shadow my-3 mx-0">
                <div class="row mx-0">
                    <div class="col-7 px-0">
                        <img id="receta-img" class="rounded-start" src="" alt="Sin imagen">
                    </div>
                    <div class="col-5 info-receta py-2 d-flex flex-column justify-content-between">
                        <div>
                            <i class="fa-solid fa-chevron-right"></i> <span> Dificultad: <b id="dificultad"></b></span>
                            <br>
                            <i class="fa-solid fa-chevron-right"></i> <span>Preparaci??n: <b id="duracion"></b></span>
                            <br>
                            <i class="fa-solid fa-chevron-right"></i> <span>Dosis: <b id="dosis"></b></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-grid bg-body my-3 p-2 rounded-2 shadow" id="ingredientes">
                <div class="ingredientes-header">
                    <h2 class="bold morado-1">Ingredientes</h2>
                </div>
                <hr class="w-25 ms-2">
            </div>

            <div class="d-grid bg-body my-3 p-2 rounded-2 shadow">
                <div class="preparacion-header">
                    <h2 class="bold morado-1">Preparaci??n</h2>
                </div>
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
                <div class="row align-items-center justify-content-center px-2 d-none" id="comment-container">
                    <div class="col-md-8 col-lg-9 col-xl-8 col-xxl-9">
                        <div class="form-group">
                            <textarea class="form-control" id="commentInput" rows="3" placeholder="Opina sobre esta receta"></textarea>
                        </div>
                    </div>
                    <div class="col-md d-flex flex-md-column justify-content-between mt-2 mt-md-0 gap-2">
                        <div class="d-flex justify-content-end">
                            <div class="d-inline-flex rating-container rounded py-1 px-2">
                                <b class="me-1">Nota: </b>
                                <div class="rating"></div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end pe-0">
                            <button class="btn rounded-pill btnComment" id="submitComment">Comentar</button>
                        </div>
                    </div>                    
                </div>
                <div>
                    <ul class="list-group list-group-flush" id="comentarios">
                        
                    </ul>
                </div>                
            </div>
        </div>
    </main>
    <?php include('includes/footer.php') ?>

    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="plugins/jquery.star-rating-svg.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="js/receta.js"></script>
</body>
</html>