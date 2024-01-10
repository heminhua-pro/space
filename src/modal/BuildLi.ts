import { AutoBind } from '../decoration/AutoBind'
import { listState,LiStatus,LiType } from '../state/ListState'

interface Draggable{
  dragEndHandler(e:DragEvent): void; // 改变li的位置
}

// 类 渲染li
export class BuildLi implements Draggable{
  private liElement: HTMLLIElement = document.createElement('li');
  private liInstance: LiType;
  
  constructor(elementId:string, liInstance:LiType){
    this.liInstance = liInstance;
    let ul: HTMLUListElement | undefined | null;
    ul = document.getElementById(elementId)?.querySelector('ul'); //<ul></ul>
    if(!ul) return

    // 移除已有的li元素 
    const haveEl = document.getElementById(liInstance.id);
    if(haveEl){
      haveEl.parentNode?.removeChild(haveEl);
    }

    this.liElement.textContent = 'Title: ' + liInstance.title + ',  Description: ' + liInstance.desc + ',  PeopleNum: ' + liInstance.people;
    this.liElement.id = liInstance.id;
    ul?.appendChild(this.liElement)
      
    this.config()
  }
  // 添加拖拉监听
  private config(){
    this.liElement.draggable = true //开启拖拉 <li draggable=true></li>
    this.liElement.addEventListener('dragend',this.dragEndHandler)
  }

  @AutoBind
  dragEndHandler(e:DragEvent){
    // 拖拽结束 改变li的状态
    const status = this.liInstance.status === LiStatus.Active ? LiStatus.Finished : LiStatus.Active;
    listState.updateState(this.liInstance,status)
  }
}