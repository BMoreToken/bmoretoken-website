<?PHP
$title = 'Get 1 $BALT for FREE this Friday!';
include_once("menu.php");
?>
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col-md-auto">
      <form method="POST" action="https://www.bmorecoin.com/request_balt.php">
        <div class="form-group" style="height:200px;"><center><br><br>
          <label for="exampleFormControlFile1">Enter your ERC20 Address Below</label><br><br>
          <input type="text" size="49" minlength="42" maxlength="42" id="address" name="address" required><br><br>
          <input class="btn btn-success" name='submit' value='Get 1 BALT for FREE this Friday!' type="Submit"></center>
        </div>
      </form> 
      <hr>
      <h3>Addresses in Next Drop on 6/25/2021</h3>
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
      <h3>Prior Drops {For 1 BMoreToken (BALT)}</h3>
      <li><a href='https://etherscan.io/tx/0x992322c9d302c3c851b89a3ba6ad75f3c2eaf07de3022bd86b7cb1976f32bb45'>https://etherscan.io/tx/0x992322c9d302c3c851b89a3ba6ad75f3c2eaf07de3022bd86b7cb1976f32bb45</a></li>
      <?PHP
include_once("footer.php");
?>
