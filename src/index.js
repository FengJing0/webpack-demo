import './index.css'

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