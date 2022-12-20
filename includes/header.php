<link rel="preload" href="css/header.css" as="style">
<link rel="stylesheet" href="css/header.css">

<header class="d-flex flex-column flex-xl-row justify-content-between align-items-center shadow pe-xl-4">
    <a href="index.php">
        <img class="my-3" src="./assets/img/logo/logo.png" alt="Recette 2">
    </a>
    <nav class="mb-2">
        <div class="d-flex gap-2" id="btns">
            <button id="btnHome" class="btn rounded-pill fs-5 d-flex align-items-center gap-2" id="btnUser">
                <i class="fa-solid fa-house fs-2 m-0"></i>
                <span>Inicio</span>
            </button>
            <button class="btn rounded-pill fs-5 d-flex align-items-center gap-2" id="btnUser">
                <i class="fa-solid fa-circle-user fs-2 m-0"></i>
                <span id="title"></span>
            </button>
            <button id="btnLogOut" class="d-none btn rounded-pill fs-5 d-flex align-items-center">
                <i class="fa-solid fa-arrow-right-from-bracket fs-2"></i>
                <span>Salir</span>
            </button>
        </div>
    </nav>
</header>

<script>
    const btnHome = document.querySelector('#btnHome');
    const btnUser = document.querySelector('#btnUser');
    const title = document.querySelector('#title');
    const logOut = document.querySelector('#btnLogOut');
    if (['/recette/index.php', '/recette/receta.php'].includes(location.pathname)) {
        if (localStorage.getItem('logged')) {
            title.innerHTML = 'Perfil';
            btnUser.addEventListener("click", () => {
                location.href = 'perfil.php';
            });
            logOut.classList.remove('d-none')
            logOut.addEventListener("click", () => {
                location.href = 'index.php';
                localStorage.removeItem('remember');
                localStorage.removeItem('logged');
                localStorage.removeItem('user');
            });
        } else {
            title.innerHTML = 'Iniciar Sesión';
            btnUser.addEventListener("click", () => {
                location.href = 'logIn.php'
            });
            title.href = 'logIn.php'
        }
    } else {
        // logo.classList.replace('fa-circle-user', 'fa-house');
        // title.innerHTML = 'Inicio';
        btnHome.addEventListener("click", () => {
            location.href = 'index.php';
        });
        btnUser.classList.add('d-none');
    }
    if (location.pathname.includes('index')) {
        btnHome.classList.add('d-none');
    } else {
        btnHome.classList.remove('d-none');
    }
</script>