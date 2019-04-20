import './index.css'
import axios from 'axios'
import $ from 'jquery'

function getComponent () {
  return import(/* webpackChunkName:"loadsh"*/'lodash').then(({ default: _ }) => {
    var element = document.createElement('div')
    element.innerHTML = _.join(['1', '2', '3'], '***')
    return element
  })
}

getComponent().then(element => {
  document.body.appendChild(element)
})


fetch('/api/v2/movie/top250?start=25&count=25').then((data)=>{
  return data.json()
}).then((json)=>{
  console.log(json)
})