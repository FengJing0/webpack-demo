import logo from './images/image.jpg'
function creatAvatar () {
  let img = new Image()

  img.src = logo
  img.classList.add('avatar')
  root.append(img)
}

export default creatAvatar