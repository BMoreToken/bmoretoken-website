<?PHP include_once('menu.php'); ?>
<script>
window.onload = function() {
//total supply = 3,947,960
var chart = new CanvasJS.Chart("chartContainer", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Planned Distribution"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}",
		dataPoints: [
			{ y: 1000000.00, label: "Community Projects and Airdrops" },
			{ y: 1000000.00, label: "Trading" },
			{ y: 900000, label: "Team" },
			{ y: 500000, label: "Deprecatory Mechanisms" },
			{ y: 100000, label: "Bounties" },
			{ y: 447960, label: "Owner" }
		]
	}]
});
chart.render();
}
</script>
<div class="container">
	<div class="row justify-content-md-center">
		<div class="col-md-auto" style="height: 400px; width: 600px;">
	     		<div id="chartContainer" style="height: 400px; width: 600px;"></div>
			<small>Track Current Distribution at <a target='_Blank' href='https://etherscan.io/token/tokenholderchart/0xbdd4f273c2b0f0b84a51bd733aac617d91159376'>https://etherscan.io/token/tokenholderchart</a></small>
		</div>
	</div>
</div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
</center> 
</div>



<?PHP include_once('footer.php'); ?>
