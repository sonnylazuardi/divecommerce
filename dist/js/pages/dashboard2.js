'use strict';
$(function () {

	/* ChartJS
	 * -------
	 * Here we will create a few charts using ChartJS
	 */

	//-----------------------
	//- MONTHLY SALES CHART -
	//-----------------------

	// Get context with jQuery - using jQuery's .get() method.
	// var salesChartCanvas = $("#salesChart").get(0).getContext("2d");
	// // This will get the first returned node in the jQuery collection.
	// var salesChart = new Chart(salesChartCanvas);

	// var salesChartData = {
	//   labels: ["January", "February", "March", "April", "May", "June", "July"],
	//   datasets: [
	//     {
	//       label: "Electronics",
	//       fillColor: "rgb(210, 214, 222)",
	//       strokeColor: "rgb(210, 214, 222)",
	//       pointColor: "rgb(210, 214, 222)",
	//       pointStrokeColor: "#c1c7d1",
	//       pointHighlightFill: "#fff",
	//       pointHighlightStroke: "rgb(220,220,220)",
	//       data: [65, 59, 80, 81, 56, 55, 40]
	//     },
	//     {
	//       label: "Digital Goods",
	//       fillColor: "rgba(60,141,188,0.9)",
	//       strokeColor: "rgba(60,141,188,0.8)",
	//       pointColor: "#3b8bba",
	//       pointStrokeColor: "rgba(60,141,188,1)",
	//       pointHighlightFill: "#fff",
	//       pointHighlightStroke: "rgba(60,141,188,1)",
	//       data: [28, 48, 40, 19, 86, 27, 90]
	//     }
	//   ]
	// };

	// var salesChartOptions = {
	//   //Boolean - If we should show the scale at all
	//   showScale: true,
	//   //Boolean - Whether grid lines are shown across the chart
	//   scaleShowGridLines: false,
	//   //String - Colour of the grid lines
	//   scaleGridLineColor: "rgba(0,0,0,.05)",
	//   //Number - Width of the grid lines
	//   scaleGridLineWidth: 1,
	//   //Boolean - Whether to show horizontal lines (except X axis)
	//   scaleShowHorizontalLines: true,
	//   //Boolean - Whether to show vertical lines (except Y axis)
	//   scaleShowVerticalLines: true,
	//   //Boolean - Whether the line is curved between points
	//   bezierCurve: true,
	//   //Number - Tension of the bezier curve between points
	//   bezierCurveTension: 0.3,
	//   //Boolean - Whether to show a dot for each point
	//   pointDot: false,
	//   //Number - Radius of each point dot in pixels
	//   pointDotRadius: 4,
	//   //Number - Pixel width of point dot stroke
	//   pointDotStrokeWidth: 1,
	//   //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	//   pointHitDetectionRadius: 20,
	//   //Boolean - Whether to show a stroke for datasets
	//   datasetStroke: true,
	//   //Number - Pixel width of dataset stroke
	//   datasetStrokeWidth: 2,
	//   //Boolean - Whether to fill the dataset with a color
	//   datasetFill: true,
	//   //String - A legend template
	//   legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
	//   //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	//   maintainAspectRatio: false,
	//   //Boolean - whether to make the chart responsive to window resizing
	//   responsive: true
	// };

	//Create the line chart
	// salesChart.Line(salesChartData, salesChartOptions);

  $('#filterdate').daterangepicker();

  // SPIDER CHART
	// CHARTS

	var color_blibli = "#00c0ef";
	var color_rakuten = "#dd4b39";
	var color_lazada = "#f39c12";
	var color_tokopedia = "#00a65a";

	$('#chart-kpi').highcharts({

		chart: {
				polar: true,
				type: 'line'
		},

		title: {
				text: '',
				x: -80
		},

		pane: {
				size: '80%'
		},

		xAxis: {
				categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
								'Information Technology', 'Administration'],
				tickmarkPlacement: 'on',
				lineWidth: 0
		},

		yAxis: {
				gridLineInterpolation: 'polygon',
				lineWidth: 0,
				min: 0
		},

		tooltip: {
				shared: true,
				pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
		},

		series: [
			{
					data: [43000, 19000, 60000, 35000, 17000, 10000],
					pointPlacement: 'on',
					color: color_blibli
			}, {
					data: [50000, 39000, 42000, 31000, 26000, 14000],
					pointPlacement: 'on',
					color: color_rakuten
			}, {
					data: [31000, 39000, 35000, 39000, 19000, 10000],
					pointPlacement: 'on',
					color: color_tokopedia
			}, {
					data: [31000, 39000, 14000, 10000, 39000, 50000],
					pointPlacement: 'on',
					color: color_lazada
			}
		]

	});

	$(function () {
		$('#chart-fans').highcharts({
			title: {
				text: 'Monthly Average Temperature',
				x: -20 //center
			},
			subtitle: {
				text: 'Source: WorldClimate.com',
				x: -20
			},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			yAxis: {
				title: {
					text: 'Temperature (°C)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: '°C'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'Tokyo',
				data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
			}, {
				name: 'New York',
				data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
			}, {
				name: 'Berlin',
				data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
			}, {
				name: 'London',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}]
		});
	});

	//---------------------------
	//- END MONTHLY SALES CHART -
	//---------------------------

	//-------------
	//- PIE CHART -
	//-------------
	// Get context with jQuery - using jQuery's .get() method.
	// var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
	// var pieChart = new Chart(pieChartCanvas);
	// var PieData = [
	// 	{
	// 		value: 700,
	// 		color: "#f56954",
	// 		highlight: "#f56954",
	// 		label: "Chrome"
	// 	},
	// 	{
	// 		value: 500,
	// 		color: "#00a65a",
	// 		highlight: "#00a65a",
	// 		label: "IE"
	// 	},
	// 	{
	// 		value: 400,
	// 		color: "#f39c12",
	// 		highlight: "#f39c12",
	// 		label: "FireFox"
	// 	},
	// 	{
	// 		value: 600,
	// 		color: "#00c0ef",
	// 		highlight: "#00c0ef",
	// 		label: "Safari"
	// 	},
	// 	{
	// 		value: 300,
	// 		color: "#3c8dbc",
	// 		highlight: "#3c8dbc",
	// 		label: "Opera"
	// 	},
	// 	{
	// 		value: 100,
	// 		color: "#d2d6de",
	// 		highlight: "#d2d6de",
	// 		label: "Navigator"
	// 	}
	// ];
	// var pieOptions = {
	// 	//Boolean - Whether we should show a stroke on each segment
	// 	segmentShowStroke: true,
	// 	//String - The colour of each segment stroke
	// 	segmentStrokeColor: "#fff",
	// 	//Number - The width of each segment stroke
	// 	segmentStrokeWidth: 1,
	// 	//Number - The percentage of the chart that we cut out of the middle
	// 	percentageInnerCutout: 50, // This is 0 for Pie charts
	// 	//Number - Amount of animation steps
	// 	animationSteps: 100,
	// 	//String - Animation easing effect
	// 	animationEasing: "easeOutBounce",
	// 	//Boolean - Whether we animate the rotation of the Doughnut
	// 	animateRotate: true,
	// 	//Boolean - Whether we animate scaling the Doughnut from the centre
	// 	animateScale: false,
	// 	//Boolean - whether to make the chart responsive to window resizing
	// 	responsive: true,
	// 	// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	// 	maintainAspectRatio: false,
	// 	//String - A legend template
	// 	legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
	// 	//String - A tooltip template
	// 	tooltipTemplate: "<%=value %> <%=label%> users"
	// };
	// //Create pie or douhnut chart
	// // You can switch between pie and douhnut using the method below.  
	// pieChart.Doughnut(PieData, pieOptions);
	//-----------------
	//- END PIE CHART -
	//-----------------

	/* jVector Maps
	 * ------------
	 * Create a world map with markers
	 */
	// $('#world-map-markers').vectorMap({
	//   map: 'world_mill_en',
	//   normalizeFunction: 'polynomial',
	//   hoverOpacity: 0.7,
	//   hoverColor: false,
	//   backgroundColor: 'transparent',
	//   regionStyle: {
	//     initial: {
	//       fill: 'rgba(210, 214, 222, 1)',
	//       "fill-opacity": 1,
	//       stroke: 'none',
	//       "stroke-width": 0,
	//       "stroke-opacity": 1
	//     },
	//     hover: {
	//       "fill-opacity": 0.7,
	//       cursor: 'pointer'
	//     },
	//     selected: {
	//       fill: 'yellow'
	//     },
	//     selectedHover: {
	//     }
	//   },
	//   markerStyle: {
	//     initial: {
	//       fill: '#00a65a',
	//       stroke: '#111'
	//     }
	//   },
	//   markers: [
	//     {latLng: [41.90, 12.45], name: 'Vatican City'},
	//     {latLng: [43.73, 7.41], name: 'Monaco'},
	//     {latLng: [-0.52, 166.93], name: 'Nauru'},
	//     {latLng: [-8.51, 179.21], name: 'Tuvalu'},
	//     {latLng: [43.93, 12.46], name: 'San Marino'},
	//     {latLng: [47.14, 9.52], name: 'Liechtenstein'},
	//     {latLng: [7.11, 171.06], name: 'Marshall Islands'},
	//     {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
	//     {latLng: [3.2, 73.22], name: 'Maldives'},
	//     {latLng: [35.88, 14.5], name: 'Malta'},
	//     {latLng: [12.05, -61.75], name: 'Grenada'},
	//     {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
	//     {latLng: [13.16, -59.55], name: 'Barbados'},
	//     {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
	//     {latLng: [-4.61, 55.45], name: 'Seychelles'},
	//     {latLng: [7.35, 134.46], name: 'Palau'},
	//     {latLng: [42.5, 1.51], name: 'Andorra'},
	//     {latLng: [14.01, -60.98], name: 'Saint Lucia'},
	//     {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
	//     {latLng: [1.3, 103.8], name: 'Singapore'},
	//     {latLng: [1.46, 173.03], name: 'Kiribati'},
	//     {latLng: [-21.13, -175.2], name: 'Tonga'},
	//     {latLng: [15.3, -61.38], name: 'Dominica'},
	//     {latLng: [-20.2, 57.5], name: 'Mauritius'},
	//     {latLng: [26.02, 50.55], name: 'Bahrain'},
	//     {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
	//   ]
	// });

	/* SPARKLINE CHARTS
	 * ----------------
	 * Create a inline charts with spark line
	 */

	//-----------------
	//- SPARKLINE BAR -
	//-----------------
	$('.sparkbar').each(function () {
		var $this = $(this);
		$this.sparkline('html', {
			type: 'bar',
			height: $this.data('height') ? $this.data('height') : '30',
			barColor: $this.data('color')
		});
	});

	//-----------------
	//- SPARKLINE PIE -
	//-----------------
	$('.sparkpie').each(function () {
		var $this = $(this);
		$this.sparkline('html', {
			type: 'pie',
			height: $this.data('height') ? $this.data('height') : '90',
			sliceColors: $this.data('color')
		});
	});

	//------------------
	//- SPARKLINE LINE -
	//------------------
	$('.sparkline').each(function () {
		var $this = $(this);
		$this.sparkline('html', {
			type: 'line',
			height: $this.data('height') ? $this.data('height') : '90',
			width: '100%',
			lineColor: $this.data('linecolor'),
			fillColor: $this.data('fillcolor'),
			spotColor: $this.data('spotcolor')
		});
	});
});