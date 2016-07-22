import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';





Template.chart.onCreated(function helloOnCreated() {
  // myTemplate.js
Template.chart.ideal = function() {
    return {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 35,
              beta: 0
          }
      },
        title: {
            text: "Small Business Owner Responsibilities"
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                size:'100%',
                  dataLabels: {
                      enabled: true,
                      format: '{point.name}'
                  },
                  showInLegend: true

            }
        },
        series: [{
            type: 'pie',
            name: 'Time',
            data: [
                ['Payroll',   16.6],
                ['Schedule',       16.6],
                ['Rent',   16.6],
                ['Inventory',    16.6],
                ['Website',    16.6],
                ['Social Media',     16.6]
            ]
        }]
    };
};



Template.chart.actual = function() {
    return {
      chart: {
          type: 'pie',
          options3d: {
              enabled: true,
              alpha: 35,
              beta: 0
          }
      },
        title: {
            text: "Small Business Owner Responsibilities"
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                size:'100%',
                  dataLabels: {
                      enabled: true,
                      format: '{point.name}'
                  },
                  showInLegend: true

            }
        },
        series: [{
            type: 'pie',
            name: 'Time',
            data: [
                ['Payroll',   25],                
                ['Rent',   10],
                ['Inventory',    10],
                ['Website',    15],
                ['Schedule',       25],
                ['Social Media',     15]
            ]
        }]
    };
};







});
