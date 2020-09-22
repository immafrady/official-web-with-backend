import { Component, OnInit } from '@angular/core';
import {getImage} from "@/utils/getImage";

@Component({
  selector: 'pc-big-data-board',
  templateUrl: './big-data-board.component.html',
  styleUrls: ['./big-data-board.component.scss']
})
export class BigDataBoardComponent implements OnInit {
  getImage = getImage;
  constructor() { }

  serviceOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }]
  };

  industryOption = {
    title: {
      text: '服务自由职业者行业分布',
      left: 30,
      top: 40
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color:['#FFD669','#F08AFF','#5656D8','#FA863E','#5AC1DD', '#FF2D2D', '#FF14A4', '#ABFF86'],
    legend: {
      orient: 'vertical',
      x: '60%',      //可设定图例在左、右、居中
      y:'center',     //可设定图例在上、下、居中
      itemWidth: 10,
      itemHeight: 10,
      icon: 'circle',
      padding:[0,50,0,0],
      textStyle: {
        color: '#fff',
        fontSize: 16
      },
      data: ['直播', '社交电商', '即时配送', '共享出行', '医疗', '房地产', '在线教育', '其他']
    },
    toolbox: {
      show: true
    },
    series: [
      {
        name: '半径模式',
        type: 'pie',
        radius: [20, 110],
        center: ['30%', '50%'],
        roseType: 'radius',
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: [
          {value: 15, name: '直播'},
          {value: 30, name: '社交电商'},
          {value: 15, name: '即时配送'},
          {value: 10, name: '共享出行'},
          {value: 5, name: '医疗'},
          {value: 10, name: '房地产'},
          {value: 10, name: '在线教育'},
          {value: 5, name: '其他'}
        ]
      }
    ]
  };

  incomeOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color:['#00CDC7','#A0DA00','#FFC600','#FF8400','#FF4C8F', '#FF3B3B', '#A0DA00'],
    legend: {
      orient: 'vertical',
      x: '60%',      //可设定图例在左、右、居中
      y:'center',     //可设定图例在上、下、居中
      padding:[0,50,0,0],
      itemWidth: 10,
      itemHeight: 10,
      icon: 'circle',
      textStyle: {
        color: '#fff',
        fontSize: 16
      },
      data: ['3000元以下', '3000-4999元', '5000-7999元', '8000-11999元', '12000-14999元', '15000-19999元', '20000元以上']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40', '100'],
        center: ['30%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 20, name: '3000元以下'},
          {value: 14, name: '3000-4999元'},
          {value: 25, name: '5000-7999元'},
          {value: 11, name: '8000-11999元'},
          {value: 13, name: '12000-14999元'},
          {value: 13, name: '15000-19999元'},
          {value: 4, name: '20000元以上'}
        ]
      }
    ]
  };


  ngOnInit(): void {
  }

}
