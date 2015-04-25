'use strict';
$(function () {
  var color_blibli = "#00c0ef";
  var color_rakuten = "#dd4b39";
  var color_lazada = "#f39c12";
  var color_tokopedia = "#00a65a";

  var chartEngangement = $('#chartEngangement').highcharts({
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
          valueSuffix: '°C'
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
          ]
      }, {
          id: 1,
          name: "Rakuten",
          color: color_rakuten,
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
          ]
      }, {
          id: 2,
          name: "Tokopedia",
          color: color_tokopedia,
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
          ]
      }, {
          id: 3,
          name: "Lazada",
          color: color_lazada,
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
          categories: [
              'Total',
          ],
          crosshair: true
      },
      yAxis: {
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
          categories: [
              'Total',
          ],
          crosshair: true
      },
      yAxis: {
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
          categories: [
              'Total',
          ],
          crosshair: true
      },
      yAxis: {
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
      '#chart-line-comment'
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

});