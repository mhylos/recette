-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-12-2022 a las 07:24:55
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recette`
--
CREATE DATABASE IF NOT EXISTS `recette` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `recette`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bookmarks`
--

CREATE TABLE `bookmarks` (
  `receta_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bookmarks`
--

INSERT INTO `bookmarks` (`receta_id`, `user_id`) VALUES
(1, 1),
(2, 1),
(4, 19),
(5, 10),
(5, 17),
(6, 1),
(6, 10),
(6, 18),
(7, 1),
(7, 10),
(7, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `nombre` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`nombre`) VALUES
('Acompañamientos'),
('Almuerzo'),
('Bebidas'),
('Comida Chilena'),
('Pastas'),
('Postre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `receta_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `contenido` text NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `nota` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`comment_id`, `receta_id`, `user_id`, `contenido`, `fecha`, `nota`) VALUES
(2, 1, 1, 'Muy malo', '2022-11-25 01:56:58', 0),
(3, 1, 2, 'Muy bueno', '2022-11-25 01:57:34', 5),
(4, 2, 2, 'Muy bueno', '2022-11-25 01:57:34', 5),
(12, 2, 1, 'ola', '2022-12-18 19:36:05', 5),
(13, 2, 1, 'ma o meno', '2022-12-18 19:44:40', 3),
(15, 2, 1, 'excelente', '2022-12-18 19:49:15', 4.5),
(16, 6, 1, 'tan wenas', '2022-12-18 22:07:24', 5),
(18, 6, 10, 'muy buena', '2022-12-20 02:14:49', 5),
(20, 5, 17, 'exquisito', '2022-12-20 03:09:51', 5),
(21, 4, 17, 'perfecto para navidad', '2022-12-20 03:10:33', 5),
(23, 7, 18, 'mi receta favorita', '2022-12-20 03:13:50', 4.5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `receta_id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `descripcion` text NOT NULL,
  `ingredientes` text NOT NULL,
  `pasos` longtext NOT NULL,
  `dificultad` varchar(10) NOT NULL,
  `tiempo_preparacion` int(11) NOT NULL,
  `dosis` int(1) NOT NULL,
  `img_name` text NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp(),
  `categoria` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`receta_id`, `nombre`, `descripcion`, `ingredientes`, `pasos`, `dificultad`, `tiempo_preparacion`, `dosis`, `img_name`, `fecha`, `categoria`) VALUES
(1, 'Charquicán', 'El Charquicán es un plato tradicional chileno, se dice que originalmente es un plato mapuche el cual se preparaba con charqui, antes que se iniciara la ganadería en Chile.\r\nActualmente se prepara con carne de vacuno.', '1 kilo de asiento o carne molida\r\n+2 ½ cdas de aceite\r\n+1 cebolla picada fina\r\n+2 dientes de ajo picados fino\r\n+6 papas en cubos de 1,5 cm\r\n+400g de zapallo camote en cubos de 1,5 cm\r\n+1,5 cdtas de Ají de Color Gourmet\r\n+½ cdta de Comino Molido Gourmet\r\n+2,5 cdtas de Orégano Entero Gourmet\r\n+600ml de agua\r\n+1 sobre de Caldo en Polvo de Carne Gourmet\r\n+2 tazas de choclo\r\n+2 tazas de porotos verdes cortados a lo largo', 'Cortar la carne en cubos de 1 cm (si se usa carne molida, saltar este paso).\r\n+En una olla grande, calentar el aceite a fuego medio. Agregar la carne y cocinar por 5 minutos. Agregar la cebolla y el ajo y cocinar hasta que la cebolla esté blanda y transparente.\r\n+Agregar las papas y zapallo, revolver bien. Incorporar el Ají de Color, Comino Molido y Orégano Entero, revolver hasta integrar. Agregar el agua y el Caldo en Polvo de Carne. Dejar hervir y luego reducir el fuego y cocinar por 25 minutos o hasta que las verduras estén blandas.\r\n+Por último, agregar el choclo y los porotos verdes, cocinar por 5 minutos o hasta que estén blandos.\r\n+Con la ayuda de una cuchara de palo, aplastar levemente las papas y zapallo y servir.\r\n', 'Media', 0, 2, 'charquican.jpg', '2022-12-04', 'Comida Chilena'),
(2, 'Porotos', 'Los porotos con riendas son una preparación culinaria típica en Chile. Abundante y sabroso, es un plato que se prepara de norte a sur del país, adquiriendo distintas características según el lugar.', '2 1/2 Tazas de porotos (remojados de un día para otro)\r\n+1/2 Kg de Zapallo pelado y trozado\r\n+1 Tableta de caldo de longaniza MAGGI®\r\n+1/2 Cebolla cortada finamente\r\n+2 Cucharadas de aceite\r\n+2 Dientes de ajo picados finos\r\n+1 Cucharadita rasa de ají de color\r\n+1/2 Cucharadita de orégano molido\r\n+1/2 Cucharadita de comino molido\r\n+1/4 Paquete de tallarines partidos por la mitad\r\n', 'Junta los porotos y el zapallo en una cacerola con 1 ½ litro de agua caliente con la tableta de caldo de longaniza MAGGI® desmenuzada, cocina a fuego fuerte durante 25 a 30 minutos o hasta que estén bien cocidos.\r\n+Mientras y aparte calienta una sartén con el aceite indicado y agrega la cebolla con el ajo, saltea durante unos minutos hasta ablandarlos levemente. Condimenta con el ají color y el orégano, cocina nuevamente durante unos minutos.\r\n+Agrega este sofrito a la olla con los porotos y agrega los tallarines, cocina durante 8 a 10 minutos aproximados hasta cocer los fideos completamente y espesar levemente la preparación. Una vez listo sirve cuando gustes.', 'Media', 0, 1, 'porotos.jpg', '2022-12-04', 'Comida Chilena'),
(4, 'Cola de mono', 'El cola de mono o colemono es una bebida tradicional de épocas decembrinas en Chile y algunas partes de Perú.', '1 taza de agua\r\n+5 Clavos de Olor Enteros Gourmet\r\n+1/2 cucharadita de Nuez Moscada Molida Gourmet\r\n+2 palos de Canela Entera Gourmet\r\n+2 cucharadas de café\r\n+3/4 tazas de azúcar\r\n+1 1/2 litro de leche\r\n+1 1/2 tazas de agua ardiente\r\n+1 cucharadita de Esencia de Vainilla Gourmet\r\n', 'En una olla pequeña, hervir durante 10 minutos el agua junto con los Clavos de Olor Enteros Gourmet, la Nuez Moscada Molida Gourmet y la Canela Entera Gourmet. Luego retirar los clavos de olor y la canela del agua.\r\n+Añadir el café y el azúcar procurando que se disuelva completamente. Incorporar la leche de a poco e ir revolviendo con una cuchara, agregar la Esencia de Vainilla Gourmet y continuar revolviendo. Luego apagar el fuego, agregar el agua ardiente y mezclar bien.\r\n+Guardar la mezcla en el refrigerador. Servir bien helado.', 'Facil', 0, 8, 'cola-de-mono.jpg', '2022-12-04', 'Bebidas'),
(5, 'Completo italiano', 'El completo italiano se llama así ya que el aguacate, la mayonesa y el tomate recuerdan a la bandera de dicho país.  Así que esto va dedicado a ti Sergio, de mi parte y de parte de nuestro pequeño grupo de amigos. ¡Que ya te echamos de menos!', '2 pan de perrito caliente\r\n+2 salchichas de tipo Frankfurt\r\n+1 aguacate (conocido como palta en Chile)\r\n+2 cucharadas de mayonesa (receta aquí)\r\n+1 tomate, lavado y cortado en cubos\r\n+Unas gotas de limón\r\n+Unas gotas de aceite de oliva\r\n+Sal y pimienta\r\n', 'Corta longitudinalmente en dos al aguacate, retirar el hueso, pelarlo y cortarlo en dados.\r\n+Machacar el aguacate para hacer un puré, con un poco de sal, pimienta, unas gotas de limón y un chorrito de aceite de oliva.\r\n+Cuece la salchicha al vapor de 3 a 5 minutos.\r\n+Corta el pan con cuidado, no hagas dos partes, déjalo con forma de mariposa.\r\n+Coloca la salchicha en el fondo.\r\n+Reparte una capa de puré de aguacate.\r\n+Pon una capa de mayonesa encima del aguacate.\r\n+Termina con los dados de tomate por encima.', 'Muy fácil', 7, 2, 'completo.jpg', '2022-12-18', 'Comida Chilena'),
(6, 'Sopaipa', 'Nada más rico para el invierno que unas sopaipillas, pero no son cualquier tipo, son Sopaipillas Sureñas, receta especial del Sur de Chile. Rinde para 24 porciones medianas.', '3 1/2 tazas de harina\r\n+1 cucharadita de polvos de hornear\r\n+1 cucharadita de sal\r\n+1/4 de kilo de zapallo (250 grs)\r\n+3 cucharadas de manteca\r\n+Aceite para freír', 'Juntar la harina, los polvos de hornear y sal en un bowl. Mientras tanto cocinar el zapallo la primera alternativa es que lo haga en una olla con agua hasta que esté sumamente blando o también con trozos ya partidos de zapallo colocarlo en la bandeja del  horno por unos 25 mins a 350°F (180°C) para luego pasarlo por cedazo (colador) y así agregarlo a la mezcla de la harina,  luego se adjunta la manteca derretida.\r\n+Formar una masa lisa que no se pegue en las manos.\r\n+Enseguida con la ayuda de un uslero estirar la masa e ir cortando círculos, del diámetro que ustedes quieran.\r\n+Calentar la sartén con el aceite y luego ir friendo brevemente las sopaipillas por cada lado. Muy importante es colocarlas en papel absorvente después.\r\nSe pueden espolvorear con ázucar flor, servirlas con pebre o pasarlas por chancaca.\r\n+PREPARACIÓN DE LA CHANCACA: Disolver la chancaca en una olla con un poquito de agua , agregar un trozo de cáscara de naranja y unos palos de canela. Debe quedar una consistencia espesa.', 'Fácil', 60, 6, 'sopaipillas.jpg', '2022-12-18', 'Comida Chilena'),
(7, 'Raviolis', 'Aprende a preparar una salsa de tomate casera y muy sabrosa, ya que incorpora un sofrito de cebolla, zanahoria y apio. Es ideal para acompañar los platos de pasta, como unos raviolis frescos. Sigue leyendo y descubre con RecetasGratis.net cómo hacer pasta rellena en salsa de tomate.', '250 gramos de Raviolis\r\n+4 unidades de Tomate\r\n+1 rama de Apio\r\n+1½ unidades de Zanahoria\r\n+1 unidad de Cebolla\r\n+1 chorro de Aceite oliva virgen extra\r\n+1 pizca de Orégano\r\n+1 pizca de Pimienta negra\r\n+1 cucharadita de Sal\r\n+½ cucharadita de Azúcar', 'Estos son los ingredientes que necesitamos para preparar los raviolis en salsa de tomate. Para la pasta, elegimos una variedad fresca con huevo y rellena de carne, quesos o verduras, al gusto. Para la salsa de tomate casera, además de tomates, necesitaremos cebolla, apio y zanahoria.\r\n+Lavamos y picamos con la licuadora la zanahoria y el apio, pelamos la cebolla y también la pasamos por la licuadora. Esta mezcla de verduras la sofreiremos en una sartén con un poco de aceite.\r\n+Pasados unos minutos, incoporamos los tomates, previamente lavados y troceados. Añadiremos media cucharada de azúcar para reducir la acidez del tomate, y a continuación salpimentaremos. Dejaremos que se cueza a fuego medio durante unos ocho minutos.\r\n+Mientras, en una olla ponemos a hervir abundante agua con sal. Cuando hierva vertemos los raviolis y los cocemos siguiendo las indicaciones de la marca; normalmente la pasta fresca al huevo necesita poco tiempo, en este caso cuatro minutos.\r\n+Cuando la pasta esté lista, la escurrimos y la servimos en un plato. Disponemos por encima la salsa de tomate, y espolvorearemos orégano y, si nos gusta el queso, un poco de parmesano. Nuestra pasta con salsa de tomate ya está lista para degustar. Si te animas a elaborar tú mismo los raviolis, puedes probar de hacer esta receta de raviolis rellenos con queso de cabra y tomate.', 'Media', 15, 2, 'raviolis.webp', '2022-12-18', 'Pastas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(15) NOT NULL,
  `genero` varchar(6) NOT NULL,
  `f_nacimiento` date NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(30) NOT NULL,
  `celular` int(8) NOT NULL,
  `direccion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `nombre`, `apellido`, `genero`, `f_nacimiento`, `email`, `pass`, `celular`, `direccion`) VALUES
(1, 'Maria', 'Rosario', 'F', '1999-08-18', 'maria.rosario@gmail.com', 'maria123', 50224535, 'Calle Libertador B. O\'higgins#167'),
(2, 'Felix ', 'Guerrero', 'M', '2002-09-09', 'felix.guerrero@gmail.com', 'felix123', 89127535, 'Calle Vasco De Gama#5585'),
(6, 'Juan', 'Perez', '', '2000-01-01', 'juan.perez.verna@alumnos.uta.cl', 'Juanperez123', 0, ''),
(7, 'aaaa', 'aaaaa', '', '2000-01-01', 'aa@aa.cl', 'Aa123456', 0, ''),
(8, 'alan', 'arias', '', '2000-01-01', 'a@dasd.com', 'Alan1234', 0, ''),
(10, 'Camilo', 'Valenzuela', '', '0000-00-00', 'camilovale@gmail.com', 'Camilo12', 0, ''),
(17, 'Juan', 'a', 'No Def', '2000-01-01', 'a@a.cl', 'Camilo12', 0, 'Sin Dirección#0'),
(18, 'a', 'a', 'No Def', '2000-01-01', 'a@sa.cl', 'Camilo12', 0, 'Sin Dirección#0'),
(19, 'Pedro', 'perez', 'Hombre', '2000-01-01', 'pedro@gmail.com', 'Pedro123', 0, 'Sin Dirección#0');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`receta_id`,`user_id`),
  ADD KEY `saved_recipe_user_fk` (`user_id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`nombre`);

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `receta_fk` (`receta_id`),
  ADD KEY `user_fk` (`user_id`);

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`receta_id`),
  ADD KEY `categoria_fk` (`categoria`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `receta_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD CONSTRAINT `saved_recipe_receta_fk` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`receta_id`),
  ADD CONSTRAINT `saved_recipe_user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `receta_fk` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`receta_id`),
  ADD CONSTRAINT `user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Filtros para la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD CONSTRAINT `categoria_fk` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`nombre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
