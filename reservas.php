<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $conexion = mysqli_connect("localhost", "root", "", "eldelicioso");
    //Comprobar conexion
    if (!$conexion) die("Conexion fallida: " . mysqli_connect_error());
    if (!empty($_POST["nombre"]) && !empty($_POST["apellidos"]) && !empty($_POST["fecha"]) && !empty($_POST["telefono"]) && isset($_POST["personas"])) {
        if (strlen($_POST["telefono"]) == 9 && substr($_POST["telefono"], 0, 1) == 6 || substr($_POST["telefono"], 0, 1) == 9 || substr($_POST["telefono"], 0, 1) == 7) {
            $query = "INSERT INTO reservas (Nombre, Apellidos, Telefono, Fecha, Personas) 
                VALUES ('" . $_POST["nombre"] . "' , '" . $_POST["apellidos"] . "', '" . $_POST["telefono"] . "', '" . $_POST["fecha"] . "', " . $_POST["personas"] . ");";
            if (mysqli_query($conexion, $query)) {
                echo "<script> window.location.href = 'reservas.html';</script>";
            } else echo mysqli_error($conexion);
        } else echo '<p style="color:red;"> Telefono mal </p>';
    } else echo '<p style="color:red;"> Hay campos vacios </p>';
    ?>
</body>

</html>