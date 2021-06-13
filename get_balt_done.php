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



<b>Successful Response (should be blank):</b>
<div id="success"></div>
<b>Error Response:</b>
<div id="error"></div>
 
<script>
$( "#success" ).load( "https://www.bmorecoin.com/next_drop.php", function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
  }
});
</script>

<?PHP
include_once("footer.php");
?>
