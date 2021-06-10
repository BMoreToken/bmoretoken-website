<?PHP 
die(__DIR__);

require __DIR__ . '/vendor/autoload.php';
use Web3\Web3;
$web3 = new Web3('http://localhost:8545');

// let's proceede
include_once('menu.php'); 
?>


<div class="container">
 
<center>    
 <img src='logo.png' class="img-fluid" alt="Responsive image">

<br>

    <div class="row justify-content-md-center">
      <div class="col-md-auto">
       <a type="button" class="btn btn-success btn-lg btn-block" href='https://analytics.sushi.com/tokens/0xbdd4f273c2b0f0b84a51bd733aac617d91159376'>SushiSwap Analytics</a>
      </div>
      <div class="col-md-auto">
        <a type="button" class="btn btn-success btn-lg btn-block" href='https://exchange.sushiswapclassic.org/#/add/0xbdd4f273c2b0f0b84a51bd733aac617d91159376/ETH'>SushiSwap Add Liquidity</a>
      </div>
      <div class="col-md-auto">
        <a type="button" class="btn btn-success btn-lg btn-block" href='https://app.sushi.com/swap?inputCurrency=0xbdd4f273c2b0f0b84a51bd733aac617d91159376'>SushiSwap Trade</a>
      </div>
      <div class="col-md-auto">
        <a type="button" class="btn btn-success btn-lg btn-block" href='https://anyswap.exchange/'>AnySwap</a>
      </div>
    </div>





<br>
<center><img src='qr.png' class="img-fluid" alt="Responsive image"><br>
<small>Contract Address: 0xbdd4f273c2b0f0b84a51bd733aac617d91159376</small></center>
 
    </div>


<?PHP include_once('footer.php'); ?>
