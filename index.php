<?PHP
$title = 'BMoreToken Project Home (BALT)';
include_once('menu.php');
?>
<link href="jquery.counter-analog.css" media="screen" rel="stylesheet" type="text/css" />
<link href="jquery.counter-analog2.css" media="screen" rel="stylesheet" type="text/css" />
<link href="jquery.counter-analog3.css" media="screen" rel="stylesheet" type="text/css" />
<link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" type="text/javascript"></script>
<script src="jquery.counter.js" type="text/javascript"></script>

<style>
 @media (min-width:1025px) { .container { width: 60% !important;} }
 @font-face {
  font-family: 'Blazed';
  src: URL('Blazed.ttf') format('truetype');
}
</style>
<div class="container">
<center>    
 <p>Baltimore Time: <?PHP echo date('r'); ?></p>
 <p>Total Supply: 3,947,960 BALT</p>
 <p>Holders: 18</p>
 <p>Transfers: 34</p>
 <p>Address: 0xbDd4f273C2b0f0B84a51BD733AAc617D91159376</p>

 <span style="font-family: 'Blazed', Blazed; font-height:30px;">NEXT POSSIBLE BURN</span><br>
 
  <span id='countdown' class="counter counter-analog2" data-direction="down" data-format="20.23:59:59">00.00:06:00</span>
    <script>
    var date1 = new Date();    
    var date2 = new Date("2021/07/03 22:05:00");
    //Customise date2 for your required future time

    var diff = (date2 - date1)/1000;
    var diff = Math.abs(Math.floor(diff));

    var days = Math.floor(diff/(24*60*60));
    var leftSec = diff - days * 24*60*60;

    var hrs = Math.floor(leftSec/(60*60));
    var leftSec = leftSec - hrs * 60*60;

    var min = Math.floor(leftSec/(60));
    var leftSec = leftSec - min * 60;
     
    var formated_countdown =  "00." + hrs + ":" + min + ":" + leftSec;
    console.log('Next Event: ' + formated_countdown)
    document.getElementById('countdown').innerText =  formated_countdown;
     
    $('.counter').counter({});
     
    </script>
 
 
 
 
 <div class="row" style='text-align:left;'>
 <h2>Updates</h2>
  <li>O's Game tonight! ( Win = Supply Reduction! )</li>
  <li>Liquidity Open at Uniswap v3</li>
  <li>Events Calendar and Map</li>
 
  
 <h3>Upcoming Events</h3>
      <div id="success"></div>
      <div id="error"></div>
      <script>
      $( "#success" ).load( "https://www.bmorecoin.com/event_widget.php", function( response, status, xhr ) {
        if ( status == "error" ) {
          var msg = "Sorry but there was an error: ";
          $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
        }
      });
      </script> 
 </div>
 </center>
 
  <div class="row justify-content-md-center">
     <div class="col-md-auto">
       <a target='_Blank' type="button" class="btn btn-success btn-lg btn-block" href='https://analytics.sushi.com/pairs/0x08cd7cf527330f10571fb7947256bf0c8b38afc4'>SushiSwap Analytics</a>
     </div>
     <div class="col-md-auto">
       <a target='_Blank' type="button" class="btn btn-success btn-lg btn-block" href='https://info.uniswap.org/#/tokens/0xbdd4f273c2b0f0b84a51bd733aac617d91159376'>Uniswap Info</a>
     </div>
     <div class="col-md-auto">
       <a target='_Blank' type="button" class="btn btn-primary btn-lg btn-block" href='https://etherscan.io/token/0xbdd4f273c2b0f0b84a51bd733aac617d91159376'>EtherScan</a>
      </div>
      <div class="col-md-auto">
        <a target='_Blank' type="button" class="btn btn-info btn-lg btn-block" href='https://blockchain.coinmarketcap.com/address/ethereum/0xbdd4f273c2b0f0b84a51bd733aac617d91159376'>CoinMarketCap</a>
      </div> 
    </div>

 
 
 
 <center>
     <br>

<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BALTWETH/?exchange=SUSHISWAP" rel="noopener" target="_blank"><span class="blue-text">BALTWETH Rates</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
  {
  "symbol": "SUSHISWAP:BALTWETH",
  "width": 350,
  "height": 220,
  "locale": "en",
  "dateRange": "12M",
  "colorTheme": "light",
  "trendLineColor": "rgba(255, 152, 0, 1)",
  "underLineColor": "rgba(152, 0, 255, 0.3)",
  "underLineBottomColor": "rgba(41, 98, 255, 0)",
  "isTransparent": false,
  "autosize": false,
  "largeChartUrl": ""
}
  </script>
</div>
<!-- TradingView Widget END -->
</center>

  
    </div>

<?PHP

include_once('footer.php');

?>
