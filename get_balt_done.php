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
  <h1><?PHP echo $message; ?></h1>
  <h3>Addresses in Next Drop</h3>
  <div id="success"></div>
  <div id="error"></div>

  <script>
  $( "#success" ).load( "https://www.bmorecoin.com/next_drop.php", function( response, status, xhr ) {
    if ( status == "error" ) {
      var msg = "Sorry but there was an error: ";
      $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    }
  });
  </script>
</center>
<?PHP
include_once("footer.php");
?>
