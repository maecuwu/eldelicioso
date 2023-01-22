<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ElDelicioso</title>

</head>

<body>
    <?php
    $conexion = mysqli_connect("localhost", "root", "", "eldelicioso");
    //Comprobar conexion
    if (!$conexion) die("Conexion fallida: " . mysqli_connect_error());
    if (!empty($_POST["email"])) {
        if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
            $hoy = date("Y") . "-" . date("m") . "-" . date("d");
            $query = "INSERT INTO clientes (Email, Fecha) VALUES ('" . $_POST["email"] . "' , '" . $hoy . "');";
            if (mysqli_query($conexion, $query)) {
                echo "<script> history.back();</script>";
                echo "<script> document.querySelector('#email').value = '';</script>";
            } else echo mysqli_error($conexion);
        } else echo '<p style="color:red;"> Email incorrecto';
    } else echo '<p style="color:red;"> Hay campos vacios </p>';
    ?>
</body>

</html>