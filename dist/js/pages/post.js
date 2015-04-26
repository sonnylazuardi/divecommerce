'use strict';
$(function () {

	/* ChartJS
	 * -------
	 * Here we will create a few charts using ChartJS
	 */

	//Create the line chart
	// salesChart.Line(salesChartData, salesChartOptions);

  $('.filterdate').daterangepicker();

 	//line chart

	var color_blibli = "#00c0ef";
	var color_rakuten = "#dd4b39";
	var color_lazada = "#f39c12";
	var color_tokopedia = "#00a65a";

	$('#chart-line-like').highcharts({
        title: {
            text: 'Facebook like by day',
            x: -20 //center
        },

        xAxis: {
            categories: ['1 Jan 2015','2 Jan 2015','3 Jan 2015','4 Jan 2015','5 Jan 2015','6 Jan 2015','7 Jan 2015','8 Jan 2015','9 Jan 2015','10 Jan 2015','11 Jan 2015','12 Jan 2015' ]
        },
        yAxis: {
            title: {
                text: 'Sum of like'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'post'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'BliBli',
            color: color_blibli,
            data: [7.0, 6.9, 12, 13, 18, 40, 20, 42, 6, 12, 42 ,21]
        }, {
            name: 'Rakuten',
            color: color_rakuten,
            data: [-0.2, 0.8, 8, 18, 50, 70, 40, 54, 78, 11, 12 ,24]
        }, {
            name: 'Tokopedia',
            color: color_tokopedia,
            data: [51, 30, 18, 13, 2, 1, 15, 30, 11, 12 ,24, 10]
        }, {
            name: 'Lazada',
	          color: color_lazada,
            data: [21, 10, 13, 2, 1, 18, 4, 40, 90 ,24, 40, 8 ]
        }]
    });

		$('#chart-line-comment').highcharts({
        title: {
            text: 'Facebook comment by day',
            x: -20 //center
        },

        xAxis: {
            categories: ['1 Jan 2015','2 Jan 2015','3 Jan 2015','4 Jan 2015','5 Jan 2015','6 Jan 2015','7 Jan 2015','8 Jan 2015','9 Jan 2015','10 Jan 2015','11 Jan 2015','12 Jan 2015' ]
        },
        yAxis: {
            title: {
                text: 'Sum of like'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'post'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'BliBli',
            color: color_blibli,
 						data: [-0.2, 0.8, 8, 18, 50, 70, 40, 54, 78, 11, 12 ,24]
        }, {
            name: 'Rakuten',
            color: color_rakuten,
	          data: [7.0, 6.9, 12, 13, 18, 40, 20, 42, 6, 12, 42 ,21]            
        }, {
            name: 'Tokopedia',
            color: color_tokopedia,
            data: [21, 10, 13, 2, 1, 18, 4, 40, 90 ,24, 40, 8 ]
        }, {
            name: 'Lazada',
	          color: color_lazada,
            data: [51, 30, 18, 13, 2, 1, 15, 30, 11, 12 ,24, 10]

        }]
    });

	$('#chart-bubble').highcharts({
        chart: {
            type: 'bubble',
            zoomType: 'xy'
        },

        title: {
            text: 'Highcharts Bubbles'
        },

        series: [{
            data: [[90, 25, 60],[95, 25, 60],[100, 25, 60]]
        }, {
            data: [[90, 50, 60],[95, 50, 60],[100, 50, 60]]
        }, {
            data: [[90, 75, 60],[95, 75, 60],[100, 75, 60]]
        }]
    });

});



