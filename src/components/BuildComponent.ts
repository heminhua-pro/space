// 类型
type ConstructorType = {
  templateId:string, 
  hostElementId:string, 
  elementId:string, 
  newElementId:string, 
  insertAtStart: boolean
}

// 类 Build的父组件
export abstract class BuildComponent<T extends HTMLDivElement,U extends HTMLDivElement | HTMLUListElement>{
  hostElement: T; //app
  divElement: U; //form、ul

  constructor(obj:ConstructorType){
  // 从<template id="form-template">元素中, 获取子元素<div id="form">
  const templateEl = document.getElementById(obj.templateId) as HTMLTemplateElement;
  const copyTemplateEl = document.importNode(templateEl,true); //深拷贝一份
  this.divElement = copyTemplateEl.content.getElementById(obj.elementId) as U;
  this.divElement.id = obj.newElementId; //给元素设置新id
  // 把元素插入到app中
  this.hostElement = document.getElementById(obj.hostElementId) as T;
  this.hostElement.insertAdjacentElement(obj.insertAtStart ? 'afterbegin' : 'beforeend', this.divElement)
  }

}
