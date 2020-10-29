import React, { Component } from 'react';
import './App.css';

import moment from 'moment'

import AvatarEditor from 'react-avatar-editor'

import $ from 'jquery'

import image from './img/涩图.jpg'

window.moment=moment

moment.locale('zh-cn', {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY年MM月DD日',
      LLL: 'YYYY年MM月DD日Ah点mm分',
      LLLL: 'YYYY年MM月DD日ddddAh点mm分',
      l: 'YYYY-M-D',
      ll: 'YYYY年M月D日',
      lll: 'YYYY年M月D日 HH:mm',
      llll: 'YYYY年M月D日dddd HH:mm'
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour: function (hour, meridiem) {
      if (hour === 12) {
          hour = 0;
      }
      if (meridiem === '凌晨' || meridiem === '早上' ||
          meridiem === '上午') {
          return hour;
      } else if (meridiem === '下午' || meridiem === '晚上') {
          return hour + 12;
      } else {
          // '中午'
          return hour >= 11 ? hour : hour + 12;
      }
  },
  meridiem: function (hour, minute, isLower) {
      const hm = hour * 100 + minute;
      if (hm < 600) {
          return '凌晨';
      } else if (hm < 900) {
          return '早上';
      } else if (hm < 1130) {
          return '上午';
      } else if (hm < 1230) {
          return '中午';
      } else if (hm < 1800) {
          return '下午';
      } else {
          return '晚上';
      }
  },
  calendar: {
      sameDay: '[今天]LT',
      nextDay: '[明天]LT',
      nextWeek: '[下]ddddLT',
      lastDay: '[昨天]LT',
      lastWeek: '[上]ddddLT',
      sameElse: 'L'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
  ordinal: function (number, period) {
      switch (period) {
          case 'd':
          case 'D':
          case 'DDD':
              return number + '日';
          case 'M':
              return number + '月';
          case 'w':
          case 'W':
              return number + '周';
          default:
              return number;
      }
  },
  relativeTime: {
      future: '%s内',
      past: '%s前',
      s: '几秒',
      ss: '%d秒',
      m: '1分钟',
      mm: '%d分钟',
      h: '1小时',
      hh: '%d小时',
      d: '1天',
      dd: '%d天',
      M: '1个月',
      MM: '%d个月',
      y: '1年',
      yy: '%d年'
  },
  week: {
      // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
      dow: 1, // Monday is the first day of the week.
      doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
})

//初始化时间moment('20190101','YYYYMMDD')
//momnet('2019-01-01 20:13:01')
//or moment.year()

//moment().format()

//moment().to()
//momnet().from()

//momnet().diff()

//momnet().add()
//momnet().subtract()

//+++++++++++++++++++++++++++++++++++++++++++++++++

//avatar:

//state中实时体现改变
class App extends Component{
  state={
    // scale : 1,
    list : [1,2,3]
  }

  //生命周期函数
  componentDidMount(){
      $.ajax({
          method : 'get',
          url : 'http://jsonplaceholder.typicode.com/todos',
          //这个示例网址拿不到东西
        //   success : (res)=>{
        //       console.log(res)
        //       this.setState({
        //           list : res
        //       })
        //   }
      }).then( res=>{
        console.log(res)
        this.setState({
            list : res
        })
    }).catch(err=>{
        console.log(err)
    })
  }

  render(){
    // const {scale}=this.state

    // <AvatarEditor 
    //     image={image}
    //     width={250}
    //     height={250}
    //     border={50}
    //     color={[255, 255, 255, 0.6]} // RGBA
    //     scale={scale}
    //     rotate={0}
    //     />
    //     <div>
    //       {/* 受控表单 */}
    //       <input type="range" value={this.state.scale} onChange={(e)=>this.setState({scale : e.target.value})}></input>
    //     </div>
    var {list} = this.state
    return(
      <div className="App">
        {
            list.map((v,k)=>(
                <li key={k}>
                    {v.title}
                </li>
            ))
        }
    </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <AvatarEditor 
//         image={image}
//         width={250}
//         height={250}
//         border={50}
//         color={[255, 255, 255, 0.6]} // RGBA
//         scale={1.2}
//         rotate={0}
//         />
//         <div>
//           <input type="range" value={this.state.scale} onChange={(e)=>this.setState({scale : e.target.value})}></input>
//         </div>
//     </div>
//   );
// }

export default App;
