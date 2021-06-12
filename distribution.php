<?PHP include_once('menu.php'); ?>

<div class="container">
 
<center>    
 
 <h1>TRIAL NUMBERS</h1>
 
 

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
			{ y: 1500000.00, label: "Community Projects and Airdrops" },
			{ y: 1000000.00, label: "Trading" },
			{ y: 900000, label: "Team" },
			{ y: 100000, label: "Bounties" },
			{ y: 447960, label: "Owner" }
		]
	}]
});
chart.render();
var chart2 = new CanvasJS.Chart("chartContainer2", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Actual Distribution"
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
			{ y: 7967.07, label: "Trading" }
		]
	}]
});
chart2.render();
}
</script>

<div id="chartContainer" style="height: 400px; width: 100%;"></div>
<div id="chartContainer2" style="height: 400px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

 
 
  
 <img src='dist.jpg' class="img-fluid" alt="Responsive image">
  
 </center> 
  
  </div>



<?PHP include_once('footer.php'); ?>
