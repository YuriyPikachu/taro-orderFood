//获取菜品数量，通过传入信息，来统计当前有多少菜品
//缓存数据 H5 小程序
import Taro from '@tarojs/taro'

const foodKey = "taro_key"
import Event from './events'

let myEvent = new Event()//实例化之后一个事件关系

/**
 * @author YuLiang
 * update  2020-06-06
 * <a href="YuriyPikachu@163.com">Contact me</a>
 */
export function getFoodCount(food) {
  let store = Taro.getStorageSync(foodKey)
  if (store) {
    if (store[food.id]) {
      return store[food.id].Num
    } else {
      return 0
    }
  } else {
    return 0
  }
}

//设置菜品的数量，当加菜或者减菜时触发，Num是由加减菜组件自身的state存储的，加，减
//当减少数量等于0时，要删除菜品的数据结构
//当加菜的时候，
export function setFoodCount(food, Num, type, callBack) {
  if (food) {
    let store = Taro.getStorageSync(foodKey)
    if (!store) store = {}
    if (type === "minus") {
      if (Num === 1) {
        if (store[food.id]) {
          delete store[food.id]
        }
      } else {
        if (store[food.id]) {
          store[food.id].Num = Num - 1 //数量减1，结构不变
        }
      }
      Taro.setStorageSync(foodKey, store)
      callBack && callBack()
    }
    if (type === "add") {
      //加菜逻辑
      if (store[food.id]) {
        //说明已经加过了
        store[food.id].Num = Num + 1
      } else {
        //说明没有加过
        store[food.id] = {Num: 1, ...food}
      }
      Taro.setStorageSync(foodKey, store)
      callBack && callBack()
    }
  }
}

export function getEvent() {
  return myEvent
}

//获取所有菜品的数量以及价格
export function getAllFoodInfo() {
  let allPrice = 0
  let allNum = 0
  let store = Taro.getStorageSync(foodKey)
  if (store) {
    //对store进行遍历
    Object.keys(store).map((key) => {
      if (store[key]) {
        allPrice += store[key].price * store[key].Num
        allNum += store[key].Num
      }
    })
  }
  return {allPrice, allNum}
}
