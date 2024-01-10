import { BuildComponent } from '../components/BuildComponent'
import { BuildLi } from '../modal/BuildLi'
import { AutoBind } from '../decoration/AutoBind'
import { listState,LiStatus,LiType } from '../state/ListState'

interface DragTarget{
  dragOverHandler(e:DragEvent): void; //换背景颜色
  dragLeaveHandler(e:DragEvent): void; //换背景颜色
}

// 类 BuildUl
export class BuildUl extends BuildComponent<HTMLDivElement,HTMLUListElement> implements DragTarget{
  constructor(private type: 'active' | 'finished'){
    super({
      templateId: 'ul-template',
      hostElementId: 'app',
      elementId: 'ul',
      newElementId: `${type}-id`,
      insertAtStart: false,
    });

    this.renderTitle()

    listState.addListener((state:LiType)=>{
      this.renderList()
    })

    this.config()
  }

  // 渲染h3标题
  private renderTitle(){
    this.divElement.querySelector('h3')!.textContent = `${this.type.toUpperCase()}-PROJECT` //设置h3的文本
  }

  // 渲染li
  private renderList(){
    const state = listState.getState();
    state.map((it:LiType)=>{
      // 区分active/finished
      if(this.type === 'active' && it.status === LiStatus.Active){
        new BuildLi(`active-id`,it);
      }else if(this.type === 'finished' && it.status === LiStatus.Finished){
        new BuildLi(`finished-id`,it);
      }
    })
    
  }

  // 监听是否有元素拖拽进来、出去
  private config(){
    this.divElement.addEventListener('dragover',this.dragOverHandler); //正在拖拽中,且拖拽元素进入了ul
    this.divElement.addEventListener('dragleave',this.dragLeaveHandler); //正在拖拽中,且拖拽元素离开了ul
  }

  @AutoBind
  dragOverHandler(e:DragEvent){
      // 进入时ul，更换背景颜色
      this.divElement.classList.add(`${this.type}-hover`);
  }

  @AutoBind
  dragLeaveHandler(e:DragEvent){
    // 离开ul后，更换背景颜色
    this.divElement.classList.remove(`${this.type}-hover`);
  }

}