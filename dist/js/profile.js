'use strict';

$(function () {
    
    var categories = [  'Lazada',  'Tokopedia','Rakuten','Blibli'  ];
    $(document).ready(function () {
        $('#distribusipengguna').highcharts({
            chart: {
                type: 'bar'
            },
            colors: [
            '#bbb','pink'
            ],
            title: {
                text: ''
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000000) + 'M';
                    }
                },
                min: -4000000,
                max: 4000000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', E-Commerce : ' + this.point.category + '</b><br/>' +
                        'Jumlah Pengguna: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + ' orang.';
                }
            },

            series: [{
                name: 'Male',
                data: [-3100000, -2850000, -1100000, -2222362]
            }, {
                name: 'Female',
                data: [1800000, 1200000, 2800000, 2100000]
            }]
        });
    });


    $('.toggleBtn3').click(function() {
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
        if (self.data('status')) {
          console.log($('#barChart').highcharts());
          console.log($('#distribusipengguna'));
          $('#barChart').highcharts().series[id].show();
        } else {
          console.log($('#barChart').highcharts());
          console.log($('#distribusipengguna')); 
          $('#barChart').highcharts().series[id].hide();
        }
      
      
    })
    $('#barChart').highcharts({
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
              "Children(<12)","Teenager(12-17)","Young Adult(18-29)","Adult(>30)"
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
              pointPadding: 0,
              borderWidth: 0.2,
              groupPadding:0
          }

      },
      legend: {
        enabled: false,
      },
      series: [{
          name: "BliBli",
          color: "#00c0ef",
          data: [5.5,20,40,75]

      }, {
          name: "Rakuten",
          color: "#dd4b39",
          data: [2.0,75,22,12]

      }, {
          name: "Tokopedia",
          color: "#00a65a",
          data: [3.1,40,50,21]

      }, {
          name: "Lazada",
          color: "#f39c12",
          data: [4.0,42.1,80.4,60]

      }]
        // labels: ["Anak-anak(<12)","Remaja(12-17)","Dewasa Muda(18-29)","Dewasa(>30)"]
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
      var series = $('#barChart').highcharts().series[id];

      if (self.data('status')) {
        series.show();
      } else {
        series.hide();
      }  
    });
});