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
          }]
      },
      tooltip: {
          valueSuffix: '%',
          shared: true,
      },
      plotOptions: {
        series: {
            marker: {
                enabled: false,
                radius: 1
            }
        },
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
        backgroundColor: '#ddd',
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
        backgroundColor: '#ddd',
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
        backgroundColor: '#ddd',
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
        backgroundColor: '#ddd',
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
          gridLineColor: "#eee",
          lineColor: '#eee',
          tickColor: '#eee',
          crosshair: true
      },
      yAxis: {
        labels: {
          enabled: false,
        },
          min: 0,
          gridLineColor: "#eee",
          lineColor: '#eee',
          tickColor: '#eee',
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
        backgroundColor: '#ddd',
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
          gridLineColor: "#eee",
          lineColor: '#eee',
          tickColor: '#eee',
          crosshair: true
      },
      yAxis: {
        labels: {
          enabled: false,
        },
          min: 0,
          gridLineColor: "#eee",
          lineColor: '#eee',
          tickColor: '#eee',
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
        backgroundColor: '#ddd',
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
          gridLineColor: "#eee",
          lineColor: '#eee',
          tickColor: '#eee',
          crosshair: true
      },
      yAxis: {
        labels: {
          enabled: false,
        },
          min: 0,
          gridLineColor: "#eee",
          lineColor: '#eee',
          tickColor: '#eee',
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
    if (self.data('status')) {
      $('#chart-'+id).show();
    } else {
      $('#chart-'+id).hide();
    }
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

  function randomDate(start_date, end_date, min, max, floating) {

    console.log("randomDate");

    var max_velocity = 0.2;
    var slope_prob = 0.2;

    var ret = [];
    var rangeDate = moment().range(start_date, end_date);
    var state_up = false;
    var value = min + ((max-min)/4) + (Math.random()*((max-min)/2));
    if (!floating)
        value = Math.floor(value);

    rangeDate.by('days', function(moment) {

      console.log(value);

      var prob_up = 1-((value-min)/(max-min));
      if (Math.random()<prob_up) {
        if ((state_up)||((!state_up)&&(Math.random()<=slope_prob))) {
          state_up = true;
        }
      } else {
        if ((!state_up)||((state_up)&&(Math.random()<=slope_prob))) {
          state_up = false;
        }
      }

      var delta = 0;
      if (state_up) {
        delta = (max-value)*Math.random()*max_velocity;
      }
      else {
        delta = ((value-min)*Math.random()*max_velocity)*-1; 
      }
      if (!floating)
        delta = Math.floor(delta);

      value += delta;

      ret.push([
        moment.valueOf(), value
      ]);
    });
    return ret;
  };

  function refreshData(st,en) {
    var cei = setInterval(function() {
      if ($('#chartEngangement').highcharts()!=null) {
        for (var i = 0; i <= 3; i++) {
          $('#chartEngangement').highcharts().series[i].setData(randomDate(st, en, 0.0, 0.15, true));
        };
        clearInterval(cei);
      }
    },10);
    var cfi = setInterval(function() {
      if ($('#chart-fans').highcharts()!=null) {
        for (var i = 0; i <= 3; i++) {
          $('#chart-fans').highcharts().series[i].setData(randomDate(st, en, -3, 5, true));
        };
        clearInterval(cfi);
      }
    },10);
    var cll = setInterval(function() {
      if ($('#chart-line-like').highcharts()!=null) {
        for (var i = 0; i <= 3; i++) {
          $('#chart-line-like').highcharts().series[i].setData(randomDate(st, en, 10, 100, true));
        };
        clearInterval(cll);
      }
    },10);
    var clc = setInterval(function() {
      if ($('#chart-line-comment').highcharts()!=null) {
        for (var i = 0; i <= 3; i++) {
          $('#chart-line-comment').highcharts().series[i].setData(randomDate(st, en, 5, 120, true));
        };
        clearInterval(clc);
      }
    },10);
    var cls = setInterval(function() {
      if ($('#chart-line-share').highcharts()!=null) {
        for (var i = 0; i <= 3; i++) {
          $('#chart-line-share').highcharts().series[i].setData(randomDate(st, en, 20, 150, true));
        };
        clearInterval(cls);
      }
    },10);
  };

  $('.filterdate').daterangepicker({}, function(start, end) {
    var st = new Date(start);
    var en = new Date(end);
    refreshData(st,en);
  });

  var initstart = "2015-03-05";
  var initend = "2015-03-20";

  var st = new Date(initstart);
  var en = new Date(initend);

  $('.filterdate').daterangepicker({ startDate: initstart, endDate: initend });

  refreshData(st,en);

});