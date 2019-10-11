// import './index.css'
//
// function getComponent () {
//   return import(/* webpackChunkName:"loadsh"*/'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['1', '2', '3'], '***')
//     return element
//   })
// }
//
// getComponent().then(element => {
//   document.body.appendChild(element)
// })
// import '@/index.css'

import createAvatar from './creatAvatar'
createAvatar()

// fetch('/v2/movie/demo').then((data)=>{
//   return data.json()
// }).then((json)=>{
//   console.log(json)
// })

// fetch('/react/api/demo.json').then((data)=>{
//   return data.json()
// }).then((json)=>{
//   console.log(json)
// })



// import React,{Component} from 'react'
// import ReactDom from 'react-dom'
//
// class App extends Component{
//     render(){
//         return <div>Hello World</div>
//     }
// }
//
// ReactDom.render(<App/>,document.getElementById('root '))
