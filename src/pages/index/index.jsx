import Taro, {Component} from '@tarojs/taro'
import {View, Text, Button} from '@tarojs/components'
import './index.less'
import 'taro-ui/dist/style/index.scss'
import Head from '../../components/head/head'
import Food from '../../components/food/food'
import Bottom from '../../components/bottom/bottom'

/**
 * @author YuLiang
 * update  2020-06-06
 * <a href="YuriyPikachu@163.com">Contact me</a>
 */
export default class Index extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <Head /><Food />
        <Bottom/>
      </View>
    )
  }

  h5: {
    esnextModules: ['taro-ui']
  }
}
