import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

class App extends Component{
  state={
    list:[]
  }
  componentDidMount(){

    //axios部分
    //牛逼  

    var myAxios = axios.create({
      baseURL : 'http://jsonplaceholder.typicode.com',
      // baseURL : 'https://47.93.22.202/networkSecurity/',
      headers :{
        'content-type' : 'application/json'
      },
      //请求前对请求的数据进行处理
      // transformRequest : [
      //   data=>{
      //     data.userId=1
      //     return JSON.stringify(data)
      //   }
      // ]
      transformResponse : [
        res=>{
          return JSON.parse(res)
        }
      ]

    })

    //请求的处理,请求前拦截请求，修改配置
    //修改/todos请求头
    myAxios.interceptors.request.use(
      config=>{
        config.headers['x-power-by'] = 'axios'
        return config
      }
    )

    //响应的处理,响应前拦截，修改数据
    //直接取出data
    myAxios.interceptors.response.use(
      res=>{
        return res.data   //此处取出了data，下面直接用
      }
    )

    myAxios.get('/',{})
      .then(data=>{
        console.log(data)
      }).catch(err=>{
        console.log(err)
      })

    myAxios.get('/todos',{})
      .then(data=>{
        console.log(data)
      }).catch(err=>{

      })

    myAxios.post('/posts',{
      title : 'foo',
      body : 'bar',
      userId : 1
    })
    .then(data=>{
      console.log(data)
    })

    //fetch部分：+++++++++++++++++

    // var request = new Request(
    //   'http://jsonplaceholder.typicode.com/todos',
    //   {
    //     method : 'get',
    //     credentials : 'include'
    //   }
    // )

    // var postTodos = new Request(
    //   'http://jsonplaceholder.typicode.com/posts',
    //   {
    //     method : 'post',
    //     credentials : 'include'
    //   }
    // )

    // var jsonHeaders = new Headers()
    // jsonHeaders.set('content-type','appl ication/json')
 
    // fetch(request , {
    //   headers : jsonHeaders
    // }).then(res=>{
    //   //第一个then返回的res中并无数据
    //   console.log(res)
    //   return res.json() //JSON.parse()
    // }).then(json=>{
    //   //第二个then中才有数据
    //   console.log(json)
    // }).catch(err=>{
    // })

    //+++++++++++++++++++++++++++++
  }
  render(){
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

export default App;
