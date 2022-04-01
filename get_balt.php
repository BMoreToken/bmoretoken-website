<?PHP
$title = 'Get 100 $BALT for FREE in the next drop!';
include_once("menu.php");
?>
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col-md-auto">
      <form method="POST" action="https://www.mdwestserve.com/BMoreCoin/request_balt.php">
        <div class="form-group" style="height:200px;"><center><br><br>
          <label for="exampleFormControlFile1">Enter your ERC20 Address Below, no weird stuff to do yet. Try not to sell it! If you need a wallet check out <a href='https://metamask.io'>https://metamask.io</a> to get started quickly. You will need to "import token" using "0xbDd4f273C2b0f0B84a51BD733AAc617D91159376".</label><br><br>
          
          <input type="text" size="49" minlength="42" maxlength="42" id="address" name="address" required><br><br>
          <input class="btn btn-success" name='submit' value='Get 100 BALT for FREE in the next drop!' type="Submit"></center>
        </div>
      </form> 
      <hr>
      <h3>Addresses in Next Drop in <?PHP echo date('F Y',strtotime('1 month'));?></h3>
      <div id="success"></div>
      <div id="error"></div>
      <script>
      $( "#success" ).load( "https://www.mdwestserve.com/BMoreCoin/next_drop.php", function( response, status, xhr ) {
        if ( status == "error" ) {
          var msg = "Sorry but there was an error: ";
          $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
        }
      });
      </script>
      <h3>Prior Drops {For 100 BMoreToken (BALT)}</h3>
      <li><a href='https://etherscan.io/token/0xbdd4f273c2b0f0b84a51bd733aac617d91159376'>Drop History</a></li>
<?PHP include_once("footer.php"); ?>
