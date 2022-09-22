<?php
  $jsondata = array();

      date_default_timezone_set('America/Los_Angeles');
      $dateDonation       = date('d-m-Y');      
      $para 	            = $_POST['para']; 
      $donante            = $_POST['donante'];
      $mensaje  	        = $_POST['mensaje'];
      $emailDonante       = $_POST['emailDonante'];
      $montoDonation      = trim($_POST['montoDonation']);
      
      $espacio = "\n";
      $espacioDoble = "\n \n";
      $file = fopen("data.txt", "a+");
      fwrite($file, "Donación Para: " .$para . $espacio);
      fwrite($file, "Nombre del Donante: ".$donante. $espacio);
      fwrite($file, "Mensaje:". $mensaje .$espacio);
      fwrite($file, "Monto: ". $montoDonation .$espacio);
      fwrite($file, "Fecha: ".$dateDonation  .$espacioDoble);
      fclose($file);

      $jsondata['message'] = 1;

header('Content-type: application/json; charset=utf-8');
echo json_encode($jsondata);
exit();

?>

