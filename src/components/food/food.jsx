import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import Category from './category'
import FoodList from './foodlist'
import './food.less'

/**
 * @author YuLiang
 * update  2020-06-06
 * <a href="YuriyPikachu@163.com">Contact me</a>
 */
class Food extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [{title: '点菜'}, {title: '评价'}, {title: '商家'}],
      foodList: [{title: '点菜'}, {title: '评价'}, {title: '商家'}],
      currentList: []
    }
  }

  handleClick(value) {
    console.log(value);
    this.setState({
      current: value
    })
  }

  changeCategory(selectCategory) {
    if (this.state.foodList.some(item => item.pid === selectCategory.id)) {
      //不用加载数据
      this.setState({currentList: this.state.foodList.filter(item => item.pid === selectCategory.id)})
    } else {
      //需要加载数据
      this.setState({foodList: this.state.foodList.concat(this.getData(selectCategory))}, () => {
        this.setState({currentList: this.state.foodList.filter(item => item.pid === selectCategory.id)})
      })
    }
  }

  getData(selectCategory) {
    let current = Math.round((Math.random() * 2))
    let imgUrl = '../../assets/img/${current}.png'
    return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({
      img: current,
      pid: selectCategory.id,
      id: selectCategory.id + "_" + k,
      title: "分类" + selectCategory.id + "菜品" + (k + 1),
      sole: 70 * current,
      price: "999"
    }))
  }

  render() {
    let {current, tabList, currentList} = this.state
    return (
      <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane>
          <View className='food_body'>
            <Category onChangeCategory={this.changeCategory.bind(this)}/><FoodList currentList={currentList}/>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>评价</View>
        </AtTabsPane>
        <AtTabsPane> 商家</AtTabsPane>
      </AtTabs>
    )
  }
}

export default Food;
