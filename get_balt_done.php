<?PHP
include_once("menu.php");
if (isset($_GET['drop'])){ 
  // for all good security reasons dont actually use $_GET['drop']
?>
<center>
  Address Added for Next Friday's Drop. Thanks. Spread the Word!!!
</center>
<?PHP
}else{
?>
<center>
  Address **NOT** Added for Next Friday's Drop. Maybe Try Again?
</center>
<?PHP}
include_once("footer.php");
?>
