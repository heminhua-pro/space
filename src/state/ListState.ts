// 枚举 列表状态
export enum LiStatus{ Active, Finished } 
// 类 列表
export class LiType{
  constructor(public id:string, public title:string, public desc:string, public people:number, public status: LiStatus){}
}
// 声明listeners[]里面的每一个函数的类型
type ListenerFn = (item:LiType) => void

// 类 管理列表 生成对象数组state
export class ListState{
  private state:LiType[] = []; //列表
  private static instance: ListState; //实例
  private listeners:ListenerFn[] = []; //监听

  private constructor(){}

  static getInstance(){
    if(this.instance){
      return this.instance
    }
    this.instance = new ListState();
    return this.instance;
  }

  addState(title:string,desc:string,people:number,status:LiStatus){
    const liInstance = new LiType(Math.random().toString(),title,desc,people,status);
    this.state.push(liInstance);
    this.updateListener(liInstance);
  }

  // 拖拉 改变state
  updateState(liInstance:LiType, status:LiStatus){
    const index = this.state.findIndex(it=>liInstance.id === it.id);
    this.state[index].status = status;
    this.updateListener(this.state[index]);
  }

  getState(){
    return this.state
  }

  addListener(listenerFn:ListenerFn){
    // console.log('addListener:',listenerFn)
    this.listeners.push(listenerFn);
  }

  updateListener(liInstance:LiType){
    for(const listenerFn of this.listeners){
      listenerFn(liInstance);
    }
  }

}

export const listState = ListState.getInstance();
