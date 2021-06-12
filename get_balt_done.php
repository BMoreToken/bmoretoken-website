<?PHP
include_once("menu.php");
if (isset($_GET['drop'])){ 
  if($_GET['drop'] == '1'){
    $message = "Proper Address Received. Address Added for Next Friday's Drop. Thanks. Spread the Word!!!";
  }elseif($_GET['drop'] == '2'){
    $message = "Address **NOT** Added for Next Friday's Drop. Maybe Try Again?";
  }
}else{
  $message = "Address **NOT** Added for Next Friday's Drop. Maybe Try Again?";
}
?>

<center>
  <?PHP echo $message; ?>
</center>

<?PHP
include_once("footer.php");
?>
