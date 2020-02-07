import Taro, { Component } from '@tarojs/taro'
import {View,Text,Image} from '@tarojs/components'
import Top from './top'
import Activity from './activity'
import './head.less'

/**
 * @author YuLiang
 * update  2020-06-06
 * <a href="YuriyPikachu@163.com">Contact me</a>
 */
class Head extends Component{
  constructor(){
    super(...arguments)
    this.state = {
      store:{
        title:"川湘居",
        notice:"欢迎光临，很高兴为你服务~",
        tags:['味道好','分量足','主食不错']
      }
    }
  }

  render(){
    let {store} = this.state
    return (<View className = 'head'>
      <Top/>
      <Image className = 'bg' src = {require("../../assets/img/food.jpg")}/>
      <View className = 'store'>
        <Image className = 'store_img' src = {require("../../assets/img/store.jpg")}/>
        <View className = 'store_text'>
          <Text className = 'title'>{store.title}</Text>
          <Text>{store.notice}</Text>
          <View>
            {store.tags.map((item,index)=><Text className='tags_text' key={index}>{item}</Text>)}
          </View>
        </View>
      </View>
      <Activity/>
      </View>)
  }
}
export default Head;
