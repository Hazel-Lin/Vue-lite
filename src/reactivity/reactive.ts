/** 
 * 创建一个响应式数据
 * 数据劫持 proxy 
 * get 方法获取到对象属性
 * set 方法更新对象属性
 * 对数据做一个依赖收集
*/
/** 
 * raw { age:10 } => 一个Proxy代理后的对象 ∴ return new Proxy
 * 此时raw { age:10 } 是Proxy需要代理的目标对象
 * get方法 读取的时候触发 
 * target目标对象 key目标对象中的键
 * set方法 更新修改的时候触发 
 * target目标对象 key和value分别为目标对象中的键和值
 *
*/
import { 
  createProxy,
  reactiveHandler,
  readonlyHandler,
  ReactiveFlags
} from "./baseHandle"


export function reactive(raw){
  return createProxy(raw,reactiveHandler)
}
export function readonly(raw){
  return createProxy(raw,readonlyHandler)
}
// 判断是否是响应式对象
export function isReactive(Object){
  return !!Object[ReactiveFlags.IS_REACTIVE]
}
export function isReadonly(Object){
  return !!Object[ReactiveFlags.IS_READONLY]
}
// 判断是否是Proxy对象
// export function isReactive(Object){
//   return Object[ReactiveFlags.IS_REACTIVE]
// }