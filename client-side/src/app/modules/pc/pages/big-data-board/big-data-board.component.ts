import { Component, OnInit } from '@angular/core';
import {getImage} from "@/utils/getImage";

@Component({
  selector: 'pc-big-data-board',
  templateUrl: './big-data-board.component.html',
  styleUrls: ['./big-data-board.component.scss']
})
export class BigDataBoardComponent implements OnInit {
  getImage = getImage;
  activeMap = 0;
  mapList = [getImage('data-map1'), getImage('data-map2'), getImage('data-map3')];

  list = [
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '200.00'},
  ];
  constructor() { }

  serviceOption = {
    title: {
      text: '月新增服务人次',
      left: '5%',
      top: '7%',
      textStyle: {
        color: '#fff',
        fontSize: 16
      }
    },
    grid: [{
      left: '14%',
      bottom: '32%',
      top: '26%',
      right: '15%'
    }],
    xAxis: {
      name: '月份',
      type: 'category',
      data: ['2019年1月', '2019年2月', '2019年3月', '2019年4月', '2019年5月', '2019年6月', '2019年7月', '2019年8月', '2019年9月', '2019年10月', '2019年11月', '2019年12月'],
      axisLine: {
        lineStyle: {
          color: '#fff',
          width: 2
        },
        symbol: ['none', 'arrow'],
        symbolOffset: 10
      },
      axisLabel: {
        rotate: 60,
        interval: 0
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      name: '个数（人）',
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#fff',
          width: 2
        },
        symbol: ['none', 'arrow'],
        symbolOffset: 10
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [{
      data: [22000, 18000, 15000, 25000, 50000, 10000, 17000, 18000, 19000, 30000, 14000, 15000],
      type: 'bar',
      itemStyle: {
        color: '#16DBFF'
      },
      barWidth: 9
    }]
  };

  industryOption = {
    title: {
      text: '服务自由职业者行业分布',
      left: 30,
      top: 40,
      textStyle: {
        color: '#fff',
        fontSize: 16
      }
    },
    tooltip: {
      show: false
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
      data: ['直播', '社交电商', '即时配送', '共享出行', '医疗', '房地产', '在线教育 10%', '其他']
    },
    series: [
      {
        name: '服务自由职业者行业分布',
        type: 'pie',
        radius: ['20%', '50%'],
        center: ['30%', '50%'],
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '12',
            fontWeight: 'bold'
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: [
          {value: 15, name: '直播'},
          {value: 30, name: '社交电商'},
          {value: 15, name: '即时配送'},
          {value: 10, name: '共享出行'},
          {value: 5, name: '医疗'},
          {value: 10, name: '房地产'},
          {value: 10, name: '在线教育 10%'},
          {value: 5, name: '其他'}
        ]
      }
    ]
  };

  incomeOption = {
    title: {
      text: '自由职业者收入水平分布',
      left: 30,
      top: 40,
      textStyle: {
        color: '#fff',
        fontSize: 16
      }
    },
    tooltip: {
      show: false
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
        name: '自由职业者收入水平分布',
        type: 'pie',
        radius: ['20%', '50%'],
        center: ['30%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '12',
            fontWeight: 'bold'
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
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

  changeTabMap(val) {
    this.activeMap = val
  };


  ngOnInit(): void {
  }

}
