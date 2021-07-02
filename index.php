<?PHP
$title = 'BMoreToken Project Home (BALT)';
include_once('menu.php');
?>
<div class="container">
<center>    
 <p>Baltimore Time: <?PHP echo date('r'); ?></p>
 <p>Total Supply: 3,947,960 BALT</p>
 <p>Holders: 18</p>
 <p>Transfers: 34</p>
 <p>Address: 0xbdd4f273c2b0f0b84a51bd733aac617d91159376</p>
 
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
  <div id="tradingview_2c03c"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BALTWETH/?exchange=SUSHISWAP" rel="noopener" target="_blank"><span class="blue-text">BMoreToken</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.MediumWidget(
  {
  "symbols": [
    [
      "BMoreToken",
      "SUSHISWAP:BALTWETH|1M"
    ],
    [
      "Ethereum",
      "CRYPTOCAP:ETH|1M"
    ],
    [
      "Bitcoin",
      "CRYPTOCAP:BTC|1M"
    ]
  ],
  "chartOnly": false,
  "width": 1000,
  "height": "400",
  "locale": "en",
  "colorTheme": "light",
  "gridLineColor": "rgba(42 ,46, 57, 0)",
  "trendLineColor": "#2962ff",
  "fontColor": "#787b86",
  "underLineColor": "rgba(41, 98, 255, 0.3)",
  "underLineBottomColor": "rgba(41, 98, 255, 0)",
  "isTransparent": false,
  "autosize": false,
  "container_id": "tradingview_2c03c"
}
  );
  </script>
</div>
<!-- TradingView Widget END -->
</center>

  
    </div>

<?PHP

include_once('footer.php');

?>
