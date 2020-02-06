import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'
import './bottom.less'
import {getAllFoodInfo, getEvent} from "../../utils/common"

let event = getEvent()

/**
 * @author YuLiang
 * update  2020-06-06
 * <a href="YuriyPikachu@163.com">Contact me</a>
 */
class Bottom extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      Num: 2,
      //配送费
      sendPrice: 3,
      supportTakeBySelf: false,
      //满多少钱起送
      sendMustPrice: 20,
      allPrice: 0
    }
  }

  componentDidMount() {
    //要获取整体存储的菜品数据进行计算
    //获取计算好的设置给state
    let {allPrice, allNum} = getAllFoodInfo()
    this.setState({Num: allNum, allPrice: allPrice})
    event.on("addcut", () => {
      //菜品发生变化
      let {allPrice, allNum} = getAllFoodInfo()
      this.setState({Num: allNum, allPrice: allPrice})
    })
  }

  render() {
    let {Num, sendPrice, supportTakeBySelf, sendMustPrice, allPrice} = this.state
    return (<View className='bottom'>
      <View className="bottom_body">
        {Num ? <Text className="num">{Num}</Text> : null}
        <Image className='img' src={Num?require("../../assets/img/store.png"):require("../../assets/img/empty_store.png")}/>
        <View
          className="info">{allPrice ? <Text className="price">{allPrice+"元"}</Text> :
          <Text>{sendPrice ? "另需配送费 " + sendPrice + " | " : ""}</Text>}<Text>{supportTakeBySelf ? "支持自取" : "不支持自取"}</Text></View>
        <View className="submit">{allPrice>=sendPrice?<Text className="goPay">去结算</Text>:<Text>{sendMustPrice ? sendMustPrice + "元起送" : ""}</Text>}</View>
      </View>
    </View>)
  }
}

export default Bottom;
