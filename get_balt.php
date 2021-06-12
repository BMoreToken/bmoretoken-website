<?PHP
include_once("menu.php");
?>
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col-md-auto">
      <form method="POST" action="https://www.bmorecoin.com/request_balt.php">
        <div class="form-group" style="height:500px;"><center>
          <label for="exampleFormControlFile1">Enter your ERC20 Address Below</label><br>
          <input type="text" size="42" minlength="42" maxlength="42" id="address" name="address" required><br>
          <input class="btn btn-success" name='Get 1 BALT for FREE this Friday!' type="Submit"></center>
        </div>
      </form> 
    </div>
  </div>
</div>
<?PHP
include_once("footer.php");
?>
