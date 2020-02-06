import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './addfood.less'
import {getFoodCount, setFoodCount, getEvent} from '../../utils/common'
let myEvent = getEvent()
/**
 * @author YuLiang
 * update  2020-06-06
 * <a href="YuriyPikachu@163.com">Contact me</a>
 */
class Addfood extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      Num: 0
    }
  }

  componentDidMount() {
    getEvent().on("changeCategory",()=>{
      //监听到分类改变菜品的数量刷新
      this.setState({Num: getFoodCount(this.props.food)})
    })
  }

  addFood() {
    console.log("add-------")
    if (this.props.food) {
      setFoodCount(this.props.food, this.state.Num, "add", () => {
        this.setState({Num: getFoodCount(this.props.food)})
        myEvent.emit("addcut")
      })
    }
  }

  minusFood() {
    if (this.props.food) {
      if (this.state.Num > 0) {
        setFoodCount(this.props.food, this.state.Num, "minus", () => {
          this.setState({Num: getFoodCount(this.props.food)})
          myEvent.emit("addcut")
        })
      } else {
        console.error("当前加减菜品出现异常")
      }
    }
  }

  render() {
    let {Num} = this.state
    let hideClass = Num > 0 ? "" : "hide"
    return (<View className='add_food'>
      <Image onClick={this.minusFood.bind(this)} className={'img ' + hideClass}
             src={require("../../assets/img/minusFood.png")}/>
      <Text className={'num ' + hideClass}>{Num}</Text>
      <Image onClick={this.addFood.bind(this)} className='img' src={require("../../assets/img/addFood.png")}/>
    </View>)
  }
}

export default Addfood;
