import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './foodlist.less'
import Addfood from "../addfood/addfood";

/**
 * @author YuLiang
 * update  2020-06-06
 * <a href="YuriyPikachu@163.com">Contact me</a>
 */
class Foodlist extends Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  render() {
    let {selectCategory, currentList} = this.props
    return (<View className='food_list'>
      <View className="food_list_for_list">{
        currentList.map((item, index) => {
          return (<View key={item.id} className="food_list_item">
            <Image className="food_list_item_img"
                   src={item.img === 2 ? require('../../assets/img/2.png') : require('../../assets/img/1.png')}></Image>
            <View className="food_list_item_info">
              <Text>{item.title}</Text>
              <Text>月售：{item.sole}</Text>
              <Text className="price">价格：{item.price}</Text>
              <Addfood food={item}/>
            </View>
          </View>)
        })
      }
      </View>
    </View>)
  }
}

export default Foodlist;
