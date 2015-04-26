'use strict';
$(function () {

	$('.popover').popover();
  $('.filterdate').daterangepicker();

  // SPIDER CHART
	// CHARTS

	// Chart-KPI

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
				categories: [
					'Abs. Change in Fans',
					'Rel. Change in Fans',
					'Admin Posts',
					'Page ER',
					'Post ER',
					'Interaction',
					'User Posts', 
					'Admin Response Rate'
				],
				tickmarkPlacement: 'on',
				lineWidth: 0
		},

		yAxis: {
				gridLineInterpolation: 'polygon',
				lineWidth: 0,
				min: 0,
				max: 1,
				labels: {
					enabled: false
				}
		},

		tooltip: {
				shared: true,
				formatter: function() {
					var multiplier = 1;
					var flt = true;
					var postfix = '';

					if (this.x=='Abs. Change in Fans') {
						multiplier = 62263.0;
						flt = false;
					}
					else if (this.x=='Rel. Change in Fans') {
						multiplier = 1.32;
						flt = true;
						postfix = '%';
					}
					else if (this.x=='Admin Posts') {
						multiplier = 732.0;
						flt = false;
					}
					else if (this.x=='Page ER') {
						multiplier = 0.19;
						flt = true;
						postfix = '%';
					}
					else if (this.x=='Post ER') {
						multiplier = 0.11;
						flt = true;
						postfix = '%';
					}
					else if (this.x=='Interaction') {
						multiplier = 102494.0;
						flt = false;
					}
					else if (this.x=='User Posts') {
						multiplier = 3532.0;
						flt = false;
					}
					else if (this.x=='Admin Response Rate') {
						multiplier = 94.17;
						flt = true;
						postfix = '%';
					}

					var s = '<b>' + this.x + '</b>';

					$.each(this.points, function () {
						s += '<br/><span style="color:' + this.series.color + '">\u25CF ' + this.series.name + '</span> ';
						if (!flt) {
							s += Math.floor(this.y*multiplier);
						} else {
							s += (this.y*multiplier).toFixed(2);
						}
						s += ' ' + postfix;
					});

					return s;
				}
		},
		legend: {
      enabled: false,
    },
		series: [
			{
					name: "BliBli",
					data: [
						(43643.0/62263.0),
						(0.88/1.32),
						(507.0/732.0),
						(0.07/0.19),
						(0.00/0.11),
						(102494/102494),
						(2928/3532),
						(94.17/94.17)
					],
					pointPlacement: 'on',
					color: color_blibli,
					image: "img/blibli_color.png"
			}, {
					name: "Rakuten",
					data: [
						(15231.0/62263.0),
						(0.83/1.32),
						(215.0/732.0),
						(0.02/0.19),
						(0.01/0.11),
						(51521/102494),
						(1518/3532),
						(74.21/94.17)
					],
					pointPlacement: 'on',
					color: color_rakuten,
					image: "img/rakuten_color.png"
			}, {
					name: "Tokopedia",
					data: [
						(34125.0/62263.0),
						(1.19/1.32),
						(356.0/732.0),
						(0.19/0.19),
						(0.11/0.11),
						(72521/102494),
						(3532/3532),
						(83.42/94.17)
					],
					pointPlacement: 'on',
					color: color_tokopedia,
					image: "img/tokopedia_color.png"
			}, {
					name: "Lazada",
					data: [
						(62263.0/62263.0),
						(1.32/1.32),
						(732.0/732.0),
						(0.05/0.19),
						(0.10/0.11),
						(82321/102494),
						(2521/3532),
						(91.94/94.17)
					],
					pointPlacement: 'on',
					color: color_lazada,
					image: "img/lazada_color.png"
			}
		]

	});

	$(function () {
		$('#chart-fans').highcharts({
			chart: {
				zoomType: 'x'
			},
			title: {
				text: '',
				x: -80
			},
			subtitle: {
				text: '',
				x: -80
			},
			tooltip: {
				shared: true,
				crosshair: true,
				pointFormat: '<span style="color:{series.color}">\u25CF {series.name} </span> {point.y:,.2f} %<br/>'
			},
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: { // don't display the dummy year
					day:"%A, %b %e, %Y",
					week:"Week from %A, %b %e, %Y",
					month:"%B %Y",
					year:"%Y"
        }
			},
			yAxis: {
				title: {
					text: ''
				},
				startOnTick: false,
				endOnTick: false,
				plotBands: [
					{
						from: -100,
						to: 0,
						color: '#ffe3e3'
					},
					{
						from: 0,
						to: 100,
						color: '#e3ffe4'
					}
				]
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0,
				enabled: false,
			},
			plotOptions: {
				series: {
            marker: {
                enabled: false,
                radius: 1
            }
        },
      },
			series: [
				{
					name: "BliBli",
					data: [
						[Date.UTC(2015, 4,  1), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  2), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  3), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  4), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  5), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  6), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  7), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  8), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  9), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 10), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 11), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 12), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 13), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 14), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 15), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 16), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 17), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 18), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 19), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 20), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 21), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 22), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 23), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 24), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 25), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 26), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 27), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 28), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 29), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 30), (Math.random()*10)-5]
					],
					pointPlacement: 'on',
					color: color_blibli,
					image: "img/blibli_color.png"
				}, {
					name: "Rakuten",
					data: [
						[Date.UTC(2015, 4,  1), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  2), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  3), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  4), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  5), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  6), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  7), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  8), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  9), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 10), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 11), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 12), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 13), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 14), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 15), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 16), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 17), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 18), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 19), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 20), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 21), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 22), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 23), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 24), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 25), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 26), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 27), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 28), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 29), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 30), (Math.random()*10)-5]
					],
					pointPlacement: 'on',
					color: color_rakuten,
					image: "img/rakuten_color.png"
				}, {
					name: "Tokopedia",
					data: [
						[Date.UTC(2015, 4,  1), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  2), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  3), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  4), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  5), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  6), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  7), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  8), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  9), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 10), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 11), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 12), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 13), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 14), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 15), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 16), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 17), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 18), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 19), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 20), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 21), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 22), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 23), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 24), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 25), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 26), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 27), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 28), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 29), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 30), (Math.random()*10)-5],
					],
					pointPlacement: 'on',
					color: color_tokopedia,
					image: "img/tokopedia_color.png"
				}, {
					name: "Lazada",
					data: [
						[Date.UTC(2015, 4,  1), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  2), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  3), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  4), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  5), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  6), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  7), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  8), (Math.random()*10)-5],
						[Date.UTC(2015, 4,  9), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 10), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 11), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 12), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 13), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 14), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 15), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 16), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 17), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 18), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 19), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 20), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 21), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 22), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 23), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 24), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 25), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 26), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 27), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 28), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 29), (Math.random()*10)-5],
						[Date.UTC(2015, 4, 30), (Math.random()*10)-5],
					],
					pointPlacement: 'on',
					color: color_lazada,
					image: "img/lazada_color.png"
				}
			]
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