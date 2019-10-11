const loaderUtils = require('loader-utils')
const fs = require('fs')
const axios = require('axios')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  const resourcePath = this.resourcePath
  const callback = this.async()
  fs.stat(resourcePath, (err, stats) => {
    if (err) {
      console.log(err)
    } else {
      if (stats.size > 20 * 1024) {
        let index = resourcePath.lastIndexOf('/')
        axios.post('http://localhost:8000/api/user/login', {username: resourcePath.substring(index + 1)})
          .then(res => {
            console.log(res.data)
            callback(null, source)
          })
        // console.log(resourcePath.substring(index+1))
      }
    }
  })
  // console.log('loader',this.resourcePath)
  
  // return source
}
