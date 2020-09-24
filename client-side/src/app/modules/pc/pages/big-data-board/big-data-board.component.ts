import {Component, OnInit} from '@angular/core';
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
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '1'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '2'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '3'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '4'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '5'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '6'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '7'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '8'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '9'},
    { status: '正在发放', merchantNo: '1045262893132255232', amount: '10'},
  ];

  serviceOption = {
    title: {
      text: '月新增服务人次',
      left: 30,
      top: 20,
      textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 500
      }
    },
    grid: [{
      left: '14%',
      bottom: '21%',
      top: '30%',
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
      top: 20,
      textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 500
      }
    },
    tooltip: {
      show: false
    },
    color:['#05B1EF','#0FD0B6','#F8D958','#F0833F','#05CD61', '#E94C37', '#A486FA', '#BAD98E'],
    legend: {
      orient: 'vertical',
      x: '60%',      //可设定图例在左、右、居中
      y: '25%',     //可设定图例在上、下、居中
      itemWidth: 10,
      itemHeight: 10,
      icon: 'circle',
      padding:[0,50,0,0],
      textStyle: {
        color: '#fff',
        fontSize: 12
      },
      data: ['直播 15%', '社交电商 30%', '即时配送 15%', '共享出行 10%', '医疗 5%', '房地产 10%', '在线教育 10%', '其他 5%']
    },
    series: [
      {
        name: '服务自由职业者行业分布',
        type: 'pie',
        radius: ['30%', '45%'],
        center: ['30%', '45%'],
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
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
          {value: 15, name: '直播 15%'},
          {value: 30, name: '社交电商 30%'},
          {value: 15, name: '即时配送 15%'},
          {value: 10, name: '共享出行 10%'},
          {value: 5, name: '医疗 5%'},
          {value: 10, name: '房地产 10%'},
          {value: 10, name: '在线教育 10%'},
          {value: 5, name: '其他 5%'}
        ]
      }
    ]
  };

  incomeOption = {
    title: {
      text: '自由职业者收入水平分布',
      left: 30,
      top: 30,
      textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 500
      }
    },
    tooltip: {
      show: false
    },
    color:['#00CDC7','#A0DA00','#FFC600','#FF8400','#FF4C8F', '#FF3B3B', '#A0DA00'],
    legend: {
      orient: 'vertical',
      x: '60%',      //可设定图例在左、右、居中
      y: '22%',     //可设定图例在上、下、居中
      padding:[0,50,0,0],
      itemWidth: 10,
      itemHeight: 10,
      icon: 'circle',
      textStyle: {
        color: '#fff',
        fontSize: 12
      },
      data: ['3000元以下 20%', '3000-4999元 14%', '5000-7999元 25%', '8000-11999元 11%', '12000-14999元 13%', '15000-19999元 13%', '20000元以上 4%']
    },
    series: [
      {
        name: '自由职业者收入水平分布',
        type: 'pie',
        radius: ['20%', '45%'],
        center: ['30%', '40%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
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
          {value: 20, name: '3000元以下 20%'},
          {value: 14, name: '3000-4999元 14%'},
          {value: 25, name: '5000-7999元 25%'},
          {value: 11, name: '8000-11999元 11%'},
          {value: 13, name: '12000-14999元 13%'},
          {value: 13, name: '15000-19999元 13%'},
          {value: 4, name: '20000元以上 4%'}
        ]
      }
    ]
  };

  changeTabMap(val) {
    this.activeMap = val
  };

  constructor() {}

  ngOnInit(): void {
  }

}
