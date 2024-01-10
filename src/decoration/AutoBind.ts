// 装饰器
export function AutoBind(target:any, prop:string, descriptor?: PropertyDescriptor){
  const res:PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get(){
      return descriptor?.value.bind(this)
    }
  }
  return res
}
  