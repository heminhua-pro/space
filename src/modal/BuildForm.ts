import { BuildComponent } from "../components/BuildComponent"
import { AutoBind } from "../decoration/AutoBind"
import { ValidateData } from '../tools/validation'
import { listState,LiStatus } from '../state/ListState'

// 类 BuildForm
export class BuildForm extends BuildComponent<HTMLDivElement,HTMLDivElement>{
  titleInputEl: HTMLInputElement;//title
  descInputEl: HTMLTextAreaElement;//description
  peopleInputEl: HTMLInputElement;//people

  constructor(){
    super({
      templateId: 'form-template',
      hostElementId: 'app',
      elementId: 'form',
      newElementId: 'form',
      insertAtStart: true,
    });
    // 获取3个input的值并校验
    this.titleInputEl = document.getElementById('title')! as HTMLInputElement;
    this.descInputEl = document.getElementById('description')! as HTMLTextAreaElement;
    this.peopleInputEl = document.getElementById('people')! as HTMLInputElement;
    this.submit()
  }

  submit(){
    const btnEl = document.getElementById('submit')! as HTMLButtonElement;
    // btnEl.addEventListener('click',this.validate.bind(this))
    btnEl.addEventListener('click',this.validate)
  }

  // 校验3个input
  @AutoBind
  validate(): [string,string,number] | void {
    const title = this.titleInputEl.value
    const desc = this.descInputEl.value
    const people = +this.peopleInputEl.value

    if( 
      ValidateData({ value:title, required:true, }) && 
      ValidateData({ value:desc, required:true, minLength:1, maxLength: 10, }) &&
      ValidateData({ value:people, required:true, min:1, max:10, }) 
    ){
      listState.addState(title,desc,people,LiStatus.Active); //放入ListState实例
      this.resetValue()
    }else{
      alert('error data')
    }

  }

  // 重置3个input
  resetValue(){
    this.titleInputEl.value = ''
    this.descInputEl.value = ''
    this.peopleInputEl.value = ''
  }

}