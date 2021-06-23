<?PHP include_once('menu.php'); ?>
<style>
 @media (min-width:1025px) { .container { width: 50% !important;} }
</style>
<center>
<div class="container">
 <center>    
    <div class="row" style='text-align:left;'>
      <form class="needs-validation" required>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustom01">ERC20 Address</label>
            <input type="text" class="form-control" id="validationCustom01" placeholder="Address" value="" required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
       </div>
       
       <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustom01">Receipt</label>
            <input type="file" accept="image/*" class="form-control" id="validationCustom01" placeholder="Address" value="" capture required>
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
       </div>
      
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Claim Reward</button>
      </form>
   </div>
  </center>
  </div>
</center>
<script>
 
 
 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        function (e) { 
         var dataString = $(this).serialize();
          $.ajax({
            type: "POST",
            url: "https://www.bmorecoin.com/reward.php",
            data: dataString,
            success: function () {
              // Display message back to the user here
             alert('Form Submitted');
            }
          });
         e.preventDefault();
       }
      }, false);
    });
  }, false);
})();
</script>
<?PHP include_once('footer.php'); ?>
