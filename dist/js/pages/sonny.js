'use strict';
$(function () {

  var color_blibli = "#00c0ef";
  var color_rakuten = "#dd4b39";
  var color_lazada = "#f39c12";
  var color_tokopedia = "#00a65a";

  var chartEngangement = $('#chartEngangement').highcharts({
      chart : {
        type: 'spline',
      },
      title: {
          text: '',
          x: -20 //center
      },
      subtitle: {
          text: '',
          x: -20
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
              text: ''
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }],
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
      tooltip: {
          valueSuffix: '%'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          day:"%b %e, %Y",
          week:"%b %e, %Y",
          month:"%B %Y",
          year:"%Y"
        }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0,
          enabled: false,
      },
      series: [{
          id: 0,
          name: "BliBli",
          color: color_blibli,
          data: [
            [Date.UTC(2015, 4,  1), 0.01],
            [Date.UTC(2015, 4,  2), 0.02],
            [Date.UTC(2015, 4,  3), 0.03],
            [Date.UTC(2015, 4,  4), 0.04],
            [Date.UTC(2015, 4,  5), 0.02],
            [Date.UTC(2015, 4,  6), 0.01],
            [Date.UTC(2015, 4,  7), 0.008],
            [Date.UTC(2015, 4,  8), 0.02],
            [Date.UTC(2015, 4,  9), 0.03],
            [Date.UTC(2015, 4, 10), 0.05],
            [Date.UTC(2015, 4, 11), 0.03],
            [Date.UTC(2015, 4, 12), 0.04],
            [Date.UTC(2015, 4, 13), 0.03],
            [Date.UTC(2015, 4, 14), 0.01],
            [Date.UTC(2015, 4, 15), 0.02],
          ]
      }, {
          id: 1,
          name: "Rakuten",
          color: color_rakuten,
          data: [
            [Date.UTC(2015, 4,  1), 0.02],
            [Date.UTC(2015, 4,  2), 0.01],
            [Date.UTC(2015, 4,  3), 0.01],
            [Date.UTC(2015, 4,  4), 0.03],
            [Date.UTC(2015, 4,  5), 0.04],
            [Date.UTC(2015, 4,  6), 0.02],
            [Date.UTC(2015, 4,  7), 0.02],
            [Date.UTC(2015, 4,  8), 0.04],
            [Date.UTC(2015, 4,  9), 0.03],
            [Date.UTC(2015, 4, 10), 0.05],
            [Date.UTC(2015, 4, 11), 0.06],
            [Date.UTC(2015, 4, 12), 0.03],
            [Date.UTC(2015, 4, 13), 0.02],
            [Date.UTC(2015, 4, 14), 0.01],
            [Date.UTC(2015, 4, 15), 0.01],
          ]
      }, {
          id: 2,
          name: "Tokopedia",
          color: color_tokopedia,
          data: [
            [Date.UTC(2015, 4,  1), 0.00],
            [Date.UTC(2015, 4,  2), 0.03],
            [Date.UTC(2015, 4,  3), 0.02],
            [Date.UTC(2015, 4,  4), 0.01],
            [Date.UTC(2015, 4,  5), 0.01],
            [Date.UTC(2015, 4,  6), 0.02],
            [Date.UTC(2015, 4,  7), 0.02],
            [Date.UTC(2015, 4,  8), 0.03],
            [Date.UTC(2015, 4,  9), 0.05],
            [Date.UTC(2015, 4, 10), 0.06],
            [Date.UTC(2015, 4, 11), 0.03],
            [Date.UTC(2015, 4, 12), 0.02],
            [Date.UTC(2015, 4, 13), 0.03],
            [Date.UTC(2015, 4, 14), 0.04],
            [Date.UTC(2015, 4, 15), 0.05],
          ]
      }, {
          id: 3,
          name: "Lazada",
          color: color_lazada,
          data: [
            [Date.UTC(2015, 4,  1), 0.04],
            [Date.UTC(2015, 4,  2), 0.05],
            [Date.UTC(2015, 4,  3), 0.05],
            [Date.UTC(2015, 4,  4), 0.06],
            [Date.UTC(2015, 4,  5), 0.04],
            [Date.UTC(2015, 4,  6), 0.03],
            [Date.UTC(2015, 4,  7), 0.02],
            [Date.UTC(2015, 4,  8), 0.01],
            [Date.UTC(2015, 4,  9), 0.01],
            [Date.UTC(2015, 4, 10), 0.04],
            [Date.UTC(2015, 4, 11), 0.05],
            [Date.UTC(2015, 4, 12), 0.06],
            [Date.UTC(2015, 4, 13), 0.03],
            [Date.UTC(2015, 4, 14), 0.05],
            [Date.UTC(2015, 4, 15), 0.07],
          ]
      }]
  });

  $('#chartLikes').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          labels: {
            enabled: false,
          },
          categories: [
              'Total',
          ],
          crosshair: true
      },
      yAxis: {
        labels: {
          enabled: false,
        },
          min: 0,
          title: {
              text: ''
          }
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      legend: {
        enabled: false,
      },
      series: [{
          name: "BliBli",
          color: color_blibli,
          data: [320]

      }, {
          name: "Rakuten",
          color: color_rakuten,
          data: [100]

      }, {
          name: "Tokopedia",
          color: color_tokopedia,
          data: [890]

      }, {
          name: "Lazada",
          color: color_lazada,
          data: [2130]

      }]
  });
  $('#chartComments').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          labels: {
            enabled: false,
          },
          categories: [
              'Total',
          ],
          crosshair: true
      },
      yAxis: {
        labels: {
          enabled: false,
        },
          min: 0,
          title: {
              text: ''
          }
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      legend: {
        enabled: false,
      },
      series: [{
          name: "BliBli",
          color: color_blibli,
          data: [2000]

      }, {
          name: "Rakuten",
          color: color_rakuten,
          data: [1025]

      }, {
          name: "Tokopedia",
          color: color_tokopedia,
          data: [3500]

      }, {
          name: "Lazada",
          color: color_lazada,
          data: [5500]

      }]
  });
  $('#chartShares').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          labels: {
            enabled: false,
          },
          categories: [
              'Total',
          ],
          crosshair: true
      },
      yAxis: {
        labels: {
          enabled: false,
        },
          min: 0,
          title: {
              text: ''
          }
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      legend: {
        enabled: false,
      },
      series: [{
          name: "BliBli",
          color: color_blibli,
          data: [49.9]

      }, {
          name: "Rakuten",
          color: color_rakuten,
          data: [83.6]

      }, {
          name: "Tokopedia",
          color: color_tokopedia,
          data: [48.9]

      }, {
          name: "Lazada",
          color: color_lazada,
          data: [42.4]

      }]
  });

  $('#chartMedia').highcharts({
      chart: {
        backgroundColor: '#333',
        type: 'column'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      tooltip: {
          valueSuffix: '%'
      },
      xAxis: {
          labels: {
            enabled: false,
          },
          categories: [
              'Total',
          ],
          gridLineColor: "#555",
          lineColor: '#555',
          tickColor: '#555',
          crosshair: true
      },
      yAxis: {
        labels: {
          enabled: false,
        },
          min: 0,
          gridLineColor: "#555",
          lineColor: '#555',
          tickColor: '#555',
          title: {
              text: ''
          }
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      legend: {
        enabled: false,
      },
      series: [{
          name: "BliBli",
          color: color_blibli,
          data: [0.05]

      }, {
          name: "Rakuten",
          color: color_rakuten,
          data: [0.04]

      }, {
          name: "Tokopedia",
          color: color_tokopedia,
          data: [0.08]

      }, {
          name: "Lazada",
          color: color_lazada,
          data: [0.1]

      }]
  });

  $('#chartLink').highcharts({
      chart: {
        backgroundColor: '#333',
        type: 'column'
      },
      title: {
          text: ''
      },
      tooltip: {
          valueSuffix: '%'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          labels: {
            enabled: false,
          },
          categories: [
              'Total',
          ],
          gridLineColor: "#555",
          lineColor: '#555',
          tickColor: '#555',
          crosshair: true
      },
      yAxis: {
        labels: {
          enabled: false,
        },
          min: 0,
          gridLineColor: "#555",
          lineColor: '#555',
          tickColor: '#555',
          title: {
              text: ''
          }
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      legend: {
        enabled: false,
      },
      series: [{
          name: "BliBli",
          color: color_blibli,
          data: [0.003]

      }, {
          name: "Rakuten",
          color: color_rakuten,
          data: [0.003]

      }, {
          name: "Tokopedia",
          color: color_tokopedia,
          data: [0.009]

      }, {
          name: "Lazada",
          color: color_lazada,
          data: [0.008]

      }]
  });

  $('#chartStatus').highcharts({
      chart: {
        backgroundColor: '#333',
        type: 'column'
      },
      title: {
          text: ''
      },
      tooltip: {
          valueSuffix: '%'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          labels: {
            enabled: false,
          },
          categories: [
              'Total',
          ],
          gridLineColor: "#555",
          lineColor: '#555',
          tickColor: '#555',
          crosshair: true
      },
      yAxis: {
        labels: {
          enabled: false,
        },
          min: 0,
          gridLineColor: "#555",
          lineColor: '#555',
          tickColor: '#555',
          title: {
              text: ''
          }
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      legend: {
        enabled: false,
      },
      series: [{
          name: "BliBli",
          color: color_blibli,
          data: [0.0499]

      }, {
          name: "Rakuten",
          color: color_rakuten,
          data: [0.0489]
      }, {
          name: "Tokopedia",
          color: color_tokopedia,
          data: [0.0636]
      }, {
          name: "Lazada",
          color: color_lazada,
          data: [0.0824]

      }]
  });

  var waypoints = $('.main-content').waypoint(function(direction) {
    if (direction == 'down') {
      $('#smallMenu').fadeIn(500);
    } else {
      $('#smallMenu').fadeOut(200);
    }
  }, {
    offset: '10%'
  });

  $('.toggleBtn').click(function() {

    var self = $(this);
    var id = self.data('id');

    self.data('status', !self.data('status'));
    $('#toggleBtnSmall'+id).data('status', self.data('status'));
    $('#toggleBtn'+id).data('status', self.data('status'));

    if (self.data('status')) {
      self.find('.info-box').removeClass().addClass('info-box').addClass('active');
      $('#toggleBtnSmall'+id).find('.info-box-small').removeClass().addClass('info-box-small').addClass('active');
      $('#toggleBtn'+id).find('.info-box').removeClass().addClass('info-box').addClass('active');
    } else {
      self.find('.info-box').removeClass().addClass('info-box').addClass('inactive');
      $('#toggleBtnSmall'+id).find('.info-box-small').removeClass().addClass('info-box-small').addClass('inactive');
      $('#toggleBtn'+id).find('.info-box').removeClass().addClass('info-box').addClass('inactive');
    }
    var chartList = [
      '#chartEngangement',
      '#chart-kpi',
      '#chart-fans',
      '#chartLikes',
      '#chartComments',
      '#chartShares',
      '#chartMedia',
      '#chartLink',
      '#chartStatus',    
    ];
    $.each(chartList, function (i, item) {
      console.log(i+"-"+item);
      var series = $(item).highcharts().series[id];

      if (self.data('status')) {
        series.show();
      } else {
        series.hide();
      }  
    });
    
  })

$('.toggleBtn2').click(function() {
    var self = $(this);
    var id = self.data('id');

    self.data('status', !self.data('status'));
    $('#toggleBtnSmall'+id).data('status', self.data('status'));
    $('#toggleBtn'+id).data('status', self.data('status'));

    if (self.data('status')) {
      self.find('.info-box').removeClass().addClass('info-box').addClass('active');
      $('#toggleBtnSmall'+id).find('.info-box-small').removeClass().addClass('info-box-small').addClass('active');
      $('#toggleBtn'+id).find('.info-box').removeClass().addClass('info-box').addClass('active');
    } else {
      self.find('.info-box').removeClass().addClass('info-box').addClass('inactive');
      $('#toggleBtnSmall'+id).find('.info-box-small').removeClass().addClass('info-box-small').addClass('inactive');
      $('#toggleBtn'+id).find('.info-box').removeClass().addClass('info-box').addClass('inactive');
    }
    var chartList = [
      '#chart-line-like',
      '#chart-line-comment',
      '#chart-line-share'
    ];
    $.each(chartList, function (i, item) {
      var series = $(item).highcharts().series[id];

      if (self.data('status')) {
        series.show();
      } else {
        series.hide();
      }  
    });
    
  })

  // $('#horizontal').highcharts({
  //   chart: {
  //       type: 'bar'
  //   },
  //   title: {
  //       text: 'Historic World Population by Region'
  //   },
  //   subtitle: {
  //       text: 'Source: Wikipedia.org'
  //   },
  //   xAxis: {
  //       categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
  //       title: {
  //           text: null
  //       }
  //   },
  //   yAxis: {
  //       min: 0,
  //       title: {
  //           text: 'Population (millions)',
  //           align: 'high'
  //       },
  //       labels: {
  //           overflow: 'justify'
  //       }
  //   },
  //   tooltip: {
  //       valueSuffix: ' millions'
  //   },
  //   plotOptions: {
  //       bar: {
  //           dataLabels: {
  //               enabled: true
  //           }
  //       }
  //   },
  //   legend: {
  //       layout: 'vertical',
  //       align: 'right',
  //       verticalAlign: 'top',
  //       x: -40,
  //       y: 100,
  //       floating: true,
  //       borderWidth: 1,
  //       backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
  //       shadow: true
  //   },
  //   credits: {
  //       enabled: false
  //   },
  //   series: [{
  //       name: 'Year 1800',
  //       data: [107, 31, 635, 203, 2]
  //   }, {
  //       name: 'Year 1900',
  //       data: [133, 156, 947, 408, 6]
  //   }, {
  //       name: 'Year 2008',
  //       data: [973, 914, 4054, 732, 34]
  //   }]
  // });
  

  $('.filterdate').daterangepicker({}, function(start, end) {
    var a = new Date(start);
    var b = new Date(end);
    var baru = [];
    var test = [
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
    ];

    var rangeDate = moment().range(a, b);
    

    // console.log(test);
    // console.log(baru);
    // console.log(moment().range());
    // var a = moment(start).format('YYYY-MM-DD');
    // var b = moment(end).format('YYYY-MM-DD');
    // alert(a + ", " + b);

    /*TESTING*/
    for (var i = 0; i <= 3; i++) {
      baru = [];
      rangeDate.by('days', function(moment) {
        baru.push([
          moment.valueOf(), (Math.random()*10)-5
        ]);
        // console.log(moment.format('YYYY-MM-DD'));
      });
      $('#chartEngangement').highcharts().series[i].setData(baru);  
    }

    /*TESTING*/

  });
  
});