import { marquee } from "./marquee.js";
marquee()

import "./style/main.css"
import "./style/main.less"

// 引入图片,图片的src属性
import gifStr from "./assets/1.gif"
import pnfStr from "./assets/logo_small.png"

// 创建节点
const gif = document.createElement('img')
const png = document.createElement('img')

// 给src赋值
gif.src = gifStr
png.src = pnfStr

// 添加节点
document.body.append(gif)
document.body.append(png)

// 引入字体图标文件
import './assets/fonts/iconfont.css'

const fn = () => { 
    console.log('海绵宝宝');
}
console.log(fn);
