<?PHP
include_once("menu.php");
?>
<div class="container">
<form method="POST" action="https://www.bmorecoin.com/request_balt.php">
  <div class="form-group">
    <label for="exampleFormControlFile1">Enter your ERC20 Address to get 1 BALT for FREE this Friday!</label>
    <input minlength="42"  id="address" name="address">
  </div>
</form>
</div>
<?PHP
include_once("footer.php");
?>
