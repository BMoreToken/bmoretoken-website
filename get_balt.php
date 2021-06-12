<?PHP
include_once("menu.php");
?>
<div class="container">
<form method="POST" action="https://www.bmorecoin.com/request_balt.php">
  <div class="form-group" height="50%">
    <label for="exampleFormControlFile1">Enter your ERC20 Address Below</label><br>
    <input type="text" minlength="42" maxlength="42" id="address" name="address"><br>
    <input class="btn btn-success" name='Get 1 BALT for FREE this Friday!' type="Submit">
  </div>
</form>
</div>
<?PHP
include_once("footer.php");
?>
