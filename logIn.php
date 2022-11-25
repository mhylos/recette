<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>profile</title>
    <meta name="description" content="Busca las mejores recetas de Chile">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <link rel="preload" href="css/style.css" as="style">
    <link rel="stylesheet" href="css/style.css">

    <link rel="preload" href="css/login.css" as="style">
    <link rel="stylesheet" href="css/login.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
    <?php include('includes/header.php') ?>
    <div class="card mx-auto my-3 bg-white radius-10px shadow text-center">
        <div class="card-header p-2 pb-0 ">
            <nav>
                <div class="nav nav-tabs justify-content-between border-0" id="nav-tab" role="tablist">
                    <button class="nav-link active m-0" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Iniciar Sesión</button>
                    <button class="nav-link m-0" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">Registrarse</button>
                </div>
            </nav>

        </div>
        <div class="card-body m-0">
            <div class="tab-content text-start p-2" id="nav-tabContent" style="height: 100%;">
                <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab" style="height: 100%;">
                    <div class="circle-bg">
                        <p class="welcome">
                            ¡Bienvenido!</p>
                    </div>
                    <div style="margin-block: 25%;">

                        <label for="username" class="fs-5">Nombre de Usuario</label>
                        <div class="input-group shadow">
                            <span class="input-group-text">
                                <i class="bi bi-person fs-6 icon-color"></i>
                            </span>
                            <input type="text" class="form-control shadow-none">
                        </div>

                        <label for=" username" class="mt-3 fs-5">Contraseña</label>
                        <div class="input-group shadow">
                            <span class="input-group-text">
                                <i class="bi bi-asterisk fs-6 icon-color"></i>
                            </span>
                            <input type="password" class="form-control shadow-none">
                        </div>
                        <div class="form-check form-switch mt-3">
                            <input class="form-check-input shadow-none" type="checkbox" id="remember-btn">
                            <label class="form-check-label" for="remember-btn">Recordarme</label>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                    <p class="text-center m-0">
                        <i class="bi bi-person-bounding-box icon-color" style="font-size: 150px;"></i>
                    </p>

                    <label for="username" class="fs-5">Nombre de Usuario</label>
                    <div class="input-group shadow">
                        <span class="input-group-text">
                            <i class="bi bi-person fs-6 icon-color"></i>
                        </span>
                        <input type="text" class="form-control shadow-none">
                    </div>
                    <p class="d-none m-0 ms-3 mt-2 text-danger" id="user-exists-message">
                        El usuario ingresado ya se encuentra registrado
                    </p>

                    <label for="name" class="mt-3 fs-5">Nombre Completo</label>
                    <div class="input-group shadow">
                        <span class="input-group-text">
                            <i class="bi bi-person-vcard fs-6 icon-color"></i>
                        </span>
                        <input type="text" placeholder="Nombres" class="form-control shadow-none">
                        <input type="text" placeholder="Apellidos" class="form-control shadow-none">
                    </div>

                    <label for="email" class="mt-3 fs-5">Correo Electrónico</label>
                    <div class="input-group shadow">
                        <span class="input-group-text">
                            <i class="bi bi-envelope-at fs-6 icon-color"></i>
                        </span>
                        <input type="email" placeholder="usuario@email.com" class="form-control shadow-none m-0 rounded-end">
                    </div>
                    <p class="d-none m-0 ms-3 mt-2 text-danger" id="email-exists-message">
                        El correo ingresado ya se encuentra registrado
                    </p>

                    <label for="passoword" class="mt-3 fs-5">Contraseña</label>
                    <div class="input-group shadow">
                        <span class="input-group-text">
                            <i class="bi bi-asterisk fs-6 icon-color"></i>
                        </span>
                        <input type="password" class="form-control shadow-none">
                    </div>
                    <div class="m-0 ps-3 pt-2 fs-6">
                        <p class="m-0">
                            -Debe contener mínimo 8 caracteres:
                            <i class="bi bi-check2 icon-color" id="check-length"> </i>
                        </p>
                        <p class="m-0">
                            -Debe contener al menos un dígito:
                            <i class="bi bi-check2 icon-color" id="check-digit"> </i>
                        </p>
                        <p class="m-0">
                            -Debe contener al menos una mayúscula:
                            <i class="bi bi-check2 icon-color" id="check-lower"> </i>
                        </p>
                        <p class="m-0">
                            -Debe contener al menos una minúscula:
                            <i class="bi bi-check2 icon-color" id="check-upper"> </i>
                        </p>
                    </div>

                    <label for="r-password" class="mt-3 fs-5">Repetir Contraseña</label>
                    <div class="input-group shadow">
                        <span class="input-group-text">
                            <i class="bi bi-asterisk fs-6 icon-color"></i>
                        </span>
                        <input type="password" class="form-control shadow-none">
                    </div>
                    <p class="m-0 ms-3 mt-2 fs-6">
                        -Deben coincidir las constraseñas:
                        <i class="bi bi-check2 icon-color" id="check-upper"> </i>
                    </p>
                </div>

            </div>
        </div>
        <div class="card-footer p-2 pt-0">
            <div class="row m-0 mt-3 fs-5 justify-content-evenly">
                <button class="btn w-auto" id="cancel-register-btn" onclick="history.go(-1);">
                    Volver
                </button>
                <button class="btn w-auto" id="continue-register-btn">
                    Continuar
                </button>
            </div>
        </div>
    </div>
    </div>
    <?php include('includes/footer.php') ?>
</body>
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<script src="js/logIn.js"></script>
<!-- <script type="module" src="js/firebase.js"></script> -->
<!-- <script src="js/user.js"></script>
<script src="js/profile.js"></script>
<script src="js/eventListener.js"></script> -->

</html>