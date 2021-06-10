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
			{ y: 8117.07, label: "Immediate Trading" },
			{ y: 1000000.00, label: "Future Trading" },
			{ y: 100000, label: "Bounties" },
			{ y: 1000000.00, label: "Community Projects" },
			{ y: 900000, label: "Team" },
			{ y: 947960, label: "Owner" }
		]
	}]
});
chart.render();

}
</script>

<div id="chartContainer" style="height: 75%; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

 
 
 
 
 
 
 <img src='dist.jpg' class="img-fluid" alt="Responsive image">
  
 </center> 
  
  </div>



<?PHP include_once('footer.php'); ?>
