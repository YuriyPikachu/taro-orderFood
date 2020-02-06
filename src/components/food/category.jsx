import Taro, {Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './category.less'
import {getEvent} from "../../utils/common";
let event = getEvent()

/**
 * @author YuLiang
 * update  2020-06-06
 * <a href="YuriyPikachu@163.com">Contact me</a>
 */
class Category extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      selectCategory: null,
      category: [
        {name: "专场", id: 1},
        {name: "热销", id: 2},
        {name: "折扣", id: 3},
        {name: "主食", id: 4},
        {name: "热菜", id: 5},
        {name: "凉菜", id: 6},
        {name: "特色乱炖", id: 7},
      ]
    }
  }

  clickHandle(item) {
    if (this.state.selectCategory && this.state.selectCategory.id !== item.id) {
      // this.setState({selectCategory: item})
      this.setState({selectCategory: item}, () => {
        this.props.onChangeCategory(this.state.selectCategory)
      })
      event.emit("changeCategory")
    } else if (!this.state.selectCategory) {
      this.setState({selectCategory: item},() => {
        this.props.onChangeCategory(this.state.selectCategory)
      })
      event.emit("changeCategory")
    }
  }

  render() {
    console.log("-------")
    let {category, selectCategory} = this.state
    return (<View className='category'>{
      category.map((item) => {
        return (<Text onClick={this.clickHandle.bind(this, item)}
                      className={"category_name " + ((selectCategory && selectCategory.id === item.id) ? "select" : "")}
                      key={item.id}
        >{item.name}</Text>)
      })
    }</View>)
  }
}

export default Category;
