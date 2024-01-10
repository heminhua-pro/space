/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BuildComponent.ts":
/*!******************************************!*\
  !*** ./src/components/BuildComponent.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildComponent: () => (/* binding */ BuildComponent)
/* harmony export */ });
// 类 Build的父组件
class BuildComponent {
    constructor(obj) {
        // 从<template id="form-template">元素中, 获取子元素<div id="form">
        const templateEl = document.getElementById(obj.templateId);
        const copyTemplateEl = document.importNode(templateEl, true); //深拷贝一份
        this.divElement = copyTemplateEl.content.getElementById(obj.elementId);
        this.divElement.id = obj.newElementId; //给元素设置新id
        // 把元素插入到app中
        this.hostElement = document.getElementById(obj.hostElementId);
        this.hostElement.insertAdjacentElement(obj.insertAtStart ? 'afterbegin' : 'beforeend', this.divElement);
    }
}


/***/ }),

/***/ "./src/decoration/AutoBind.ts":
/*!************************************!*\
  !*** ./src/decoration/AutoBind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoBind: () => (/* binding */ AutoBind)
/* harmony export */ });
// 装饰器
function AutoBind(target, prop, descriptor) {
    const res = {
        configurable: true,
        enumerable: false,
        get() {
            return descriptor === null || descriptor === void 0 ? void 0 : descriptor.value.bind(this);
        }
    };
    return res;
}


/***/ }),

/***/ "./src/modal/BuildForm.ts":
/*!********************************!*\
  !*** ./src/modal/BuildForm.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildForm: () => (/* binding */ BuildForm)
/* harmony export */ });
/* harmony import */ var _components_BuildComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BuildComponent */ "./src/components/BuildComponent.ts");
/* harmony import */ var _decoration_AutoBind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decoration/AutoBind */ "./src/decoration/AutoBind.ts");
/* harmony import */ var _tools_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/validation */ "./src/tools/validation.ts");
/* harmony import */ var _state_ListState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/ListState */ "./src/state/ListState.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// 类 BuildForm
class BuildForm extends _components_BuildComponent__WEBPACK_IMPORTED_MODULE_0__.BuildComponent {
    constructor() {
        super({
            templateId: 'form-template',
            hostElementId: 'app',
            elementId: 'form',
            newElementId: 'form',
            insertAtStart: true,
        });
        // 获取3个input的值并校验
        this.titleInputEl = document.getElementById('title');
        this.descInputEl = document.getElementById('description');
        this.peopleInputEl = document.getElementById('people');
        this.submit();
    }
    submit() {
        const btnEl = document.getElementById('submit');
        // btnEl.addEventListener('click',this.validate.bind(this))
        btnEl.addEventListener('click', this.validate);
    }
    // 校验3个input
    validate() {
        const title = this.titleInputEl.value;
        const desc = this.descInputEl.value;
        const people = +this.peopleInputEl.value;
        if ((0,_tools_validation__WEBPACK_IMPORTED_MODULE_2__.ValidateData)({ value: title, required: true, }) &&
            (0,_tools_validation__WEBPACK_IMPORTED_MODULE_2__.ValidateData)({ value: desc, required: true, minLength: 1, maxLength: 10, }) &&
            (0,_tools_validation__WEBPACK_IMPORTED_MODULE_2__.ValidateData)({ value: people, required: true, min: 1, max: 10, })) {
            _state_ListState__WEBPACK_IMPORTED_MODULE_3__.listState.addState(title, desc, people, _state_ListState__WEBPACK_IMPORTED_MODULE_3__.LiStatus.Active); //放入ListState实例
            this.resetValue();
        }
        else {
            alert('error data');
        }
    }
    // 重置3个input
    resetValue() {
        this.titleInputEl.value = '';
        this.descInputEl.value = '';
        this.peopleInputEl.value = '';
    }
}
__decorate([
    _decoration_AutoBind__WEBPACK_IMPORTED_MODULE_1__.AutoBind
], BuildForm.prototype, "validate", null);


/***/ }),

/***/ "./src/modal/BuildLi.ts":
/*!******************************!*\
  !*** ./src/modal/BuildLi.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildLi: () => (/* binding */ BuildLi)
/* harmony export */ });
/* harmony import */ var _decoration_AutoBind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decoration/AutoBind */ "./src/decoration/AutoBind.ts");
/* harmony import */ var _state_ListState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/ListState */ "./src/state/ListState.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// 类 渲染li
class BuildLi {
    constructor(elementId, liInstance) {
        var _a, _b;
        this.liElement = document.createElement('li');
        this.liInstance = liInstance;
        let ul;
        ul = (_a = document.getElementById(elementId)) === null || _a === void 0 ? void 0 : _a.querySelector('ul'); //<ul></ul>
        if (!ul)
            return;
        // 移除已有的li元素 
        const haveEl = document.getElementById(liInstance.id);
        if (haveEl) {
            (_b = haveEl.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(haveEl);
        }
        this.liElement.textContent = 'Title: ' + liInstance.title + ',  Description: ' + liInstance.desc + ',  PeopleNum: ' + liInstance.people;
        this.liElement.id = liInstance.id;
        ul === null || ul === void 0 ? void 0 : ul.appendChild(this.liElement);
        this.config();
    }
    // 添加拖拉监听
    config() {
        this.liElement.draggable = true; //开启拖拉 <li draggable=true></li>
        this.liElement.addEventListener('dragend', this.dragEndHandler);
    }
    dragEndHandler(e) {
        // 拖拽结束 改变li的状态
        const status = this.liInstance.status === _state_ListState__WEBPACK_IMPORTED_MODULE_1__.LiStatus.Active ? _state_ListState__WEBPACK_IMPORTED_MODULE_1__.LiStatus.Finished : _state_ListState__WEBPACK_IMPORTED_MODULE_1__.LiStatus.Active;
        _state_ListState__WEBPACK_IMPORTED_MODULE_1__.listState.updateState(this.liInstance, status);
    }
}
__decorate([
    _decoration_AutoBind__WEBPACK_IMPORTED_MODULE_0__.AutoBind
], BuildLi.prototype, "dragEndHandler", null);


/***/ }),

/***/ "./src/modal/BuildUl.ts":
/*!******************************!*\
  !*** ./src/modal/BuildUl.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildUl: () => (/* binding */ BuildUl)
/* harmony export */ });
/* harmony import */ var _components_BuildComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BuildComponent */ "./src/components/BuildComponent.ts");
/* harmony import */ var _modal_BuildLi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/BuildLi */ "./src/modal/BuildLi.ts");
/* harmony import */ var _decoration_AutoBind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decoration/AutoBind */ "./src/decoration/AutoBind.ts");
/* harmony import */ var _state_ListState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/ListState */ "./src/state/ListState.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// 类 BuildUl
class BuildUl extends _components_BuildComponent__WEBPACK_IMPORTED_MODULE_0__.BuildComponent {
    constructor(type) {
        super({
            templateId: 'ul-template',
            hostElementId: 'app',
            elementId: 'ul',
            newElementId: `${type}-id`,
            insertAtStart: false,
        });
        this.type = type;
        this.renderTitle();
        _state_ListState__WEBPACK_IMPORTED_MODULE_3__.listState.addListener((state) => {
            this.renderList();
        });
        this.config();
    }
    // 渲染h3标题
    renderTitle() {
        this.divElement.querySelector('h3').textContent = `${this.type.toUpperCase()}-PROJECT`; //设置h3的文本
    }
    // 渲染li
    renderList() {
        const state = _state_ListState__WEBPACK_IMPORTED_MODULE_3__.listState.getState();
        state.map((it) => {
            // 区分active/finished
            if (this.type === 'active' && it.status === _state_ListState__WEBPACK_IMPORTED_MODULE_3__.LiStatus.Active) {
                new _modal_BuildLi__WEBPACK_IMPORTED_MODULE_1__.BuildLi(`active-id`, it);
            }
            else if (this.type === 'finished' && it.status === _state_ListState__WEBPACK_IMPORTED_MODULE_3__.LiStatus.Finished) {
                new _modal_BuildLi__WEBPACK_IMPORTED_MODULE_1__.BuildLi(`finished-id`, it);
            }
        });
    }
    // 监听是否有元素拖拽进来、出去
    config() {
        this.divElement.addEventListener('dragover', this.dragOverHandler); //正在拖拽中,且拖拽元素进入了ul
        this.divElement.addEventListener('dragleave', this.dragLeaveHandler); //正在拖拽中,且拖拽元素离开了ul
    }
    dragOverHandler(e) {
        // 进入时ul，更换背景颜色
        this.divElement.classList.add(`${this.type}-hover`);
    }
    dragLeaveHandler(e) {
        // 离开ul后，更换背景颜色
        this.divElement.classList.remove(`${this.type}-hover`);
    }
}
__decorate([
    _decoration_AutoBind__WEBPACK_IMPORTED_MODULE_2__.AutoBind
], BuildUl.prototype, "dragOverHandler", null);
__decorate([
    _decoration_AutoBind__WEBPACK_IMPORTED_MODULE_2__.AutoBind
], BuildUl.prototype, "dragLeaveHandler", null);


/***/ }),

/***/ "./src/state/ListState.ts":
/*!********************************!*\
  !*** ./src/state/ListState.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiStatus: () => (/* binding */ LiStatus),
/* harmony export */   LiType: () => (/* binding */ LiType),
/* harmony export */   ListState: () => (/* binding */ ListState),
/* harmony export */   listState: () => (/* binding */ listState)
/* harmony export */ });
// 枚举 列表状态
var LiStatus;
(function (LiStatus) {
    LiStatus[LiStatus["Active"] = 0] = "Active";
    LiStatus[LiStatus["Finished"] = 1] = "Finished";
})(LiStatus || (LiStatus = {}));
// 类 列表
class LiType {
    constructor(id, title, desc, people, status) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.people = people;
        this.status = status;
    }
}
// 类 管理列表 生成对象数组state
class ListState {
    constructor() {
        this.state = []; //列表
        this.listeners = []; //监听
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ListState();
        return this.instance;
    }
    addState(title, desc, people, status) {
        const liInstance = new LiType(Math.random().toString(), title, desc, people, status);
        this.state.push(liInstance);
        this.updateListener(liInstance);
    }
    // 拖拉 改变state
    updateState(liInstance, status) {
        const index = this.state.findIndex(it => liInstance.id === it.id);
        this.state[index].status = status;
        this.updateListener(this.state[index]);
    }
    getState() {
        return this.state;
    }
    addListener(listenerFn) {
        // console.log('addListener:',listenerFn)
        this.listeners.push(listenerFn);
    }
    updateListener(liInstance) {
        for (const listenerFn of this.listeners) {
            listenerFn(liInstance);
        }
    }
}
const listState = ListState.getInstance();


/***/ }),

/***/ "./src/tools/validation.ts":
/*!*********************************!*\
  !*** ./src/tools/validation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidateData: () => (/* binding */ ValidateData)
/* harmony export */ });
function ValidateData(obj) {
    const { value, required, min, max, minLength, maxLength } = obj;
    var isValid = true;
    if (required) {
        isValid = isValid && !!value;
    }
    if (min && typeof value === 'number') {
        isValid = isValid && value >= min;
    }
    if (max && typeof value === 'number') {
        isValid = isValid && value <= max;
    }
    if (minLength && typeof value === 'string') {
        isValid = isValid && value.length >= minLength;
    }
    if (maxLength && typeof value === 'string') {
        isValid = isValid && value.length <= maxLength;
    }
    return isValid;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_BuildForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/BuildForm */ "./src/modal/BuildForm.ts");
/* harmony import */ var _modal_BuildUl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/BuildUl */ "./src/modal/BuildUl.ts");


new _modal_BuildForm__WEBPACK_IMPORTED_MODULE_0__.BuildForm();
new _modal_BuildUl__WEBPACK_IMPORTED_MODULE_1__.BuildUl('active');
new _modal_BuildUl__WEBPACK_IMPORTED_MODULE_1__.BuildUl('finished');
console.log(111);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBU0EsY0FBYztBQUNQLE1BQWUsY0FBYztJQUlsQyxZQUFZLEdBQW1CO1FBQy9CLDBEQUEwRDtRQUMxRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQXdCLENBQUM7UUFDbEYsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQ3BFLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBTSxDQUFDO1FBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxVQUFVO1FBQ2pELGFBQWE7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBTSxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN2RyxDQUFDO0NBRUY7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRCxNQUFNO0FBQ0MsU0FBUyxRQUFRLENBQUMsTUFBVSxFQUFFLElBQVcsRUFBRSxVQUErQjtJQUMvRSxNQUFNLEdBQUcsR0FBc0I7UUFDN0IsWUFBWSxFQUFFLElBQUk7UUFDbEIsVUFBVSxFQUFFLEtBQUs7UUFDakIsR0FBRztZQUNELE9BQU8sVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLENBQUM7S0FDRjtJQUNELE9BQU8sR0FBRztBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNEQ7QUFDWjtBQUNDO0FBQ0s7QUFFdkQsY0FBYztBQUNQLE1BQU0sU0FBVSxTQUFRLHNFQUE2QztJQUsxRTtRQUNFLEtBQUssQ0FBQztZQUNKLFVBQVUsRUFBRSxlQUFlO1lBQzNCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFlBQVksRUFBRSxNQUFNO1lBQ3BCLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUMsQ0FBQztRQUNILGlCQUFpQjtRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFzQixDQUFDO1FBQzFFLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXlCLENBQUM7UUFDbEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBc0IsQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxFQUFFO0lBQ2YsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBdUIsQ0FBQztRQUN0RSwyREFBMkQ7UUFDM0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9DLENBQUM7SUFFRCxZQUFZO0lBRVosUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSztRQUNyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7UUFDbkMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUs7UUFFeEMsSUFDRSwrREFBWSxDQUFDLEVBQUUsS0FBSyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsSUFBSSxHQUFHLENBQUM7WUFDN0MsK0RBQVksQ0FBQyxFQUFFLEtBQUssRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEdBQUcsQ0FBQztZQUN4RSwrREFBWSxDQUFDLEVBQUUsS0FBSyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxDQUFDLEVBQzlELENBQUM7WUFDQSx1REFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxzREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUN0RSxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ25CLENBQUM7YUFBSSxDQUFDO1lBQ0osS0FBSyxDQUFDLFlBQVksQ0FBQztRQUNyQixDQUFDO0lBRUgsQ0FBQztJQUVELFlBQVk7SUFDWixVQUFVO1FBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUU7SUFDL0IsQ0FBQztDQUVGO0FBekJDO0lBREMsMERBQVE7eUNBaUJSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEOEM7QUFDYTtBQU05RCxTQUFTO0FBQ0YsTUFBTSxPQUFPO0lBSWxCLFlBQVksU0FBZ0IsRUFBRSxVQUFpQjs7UUFIdkMsY0FBUyxHQUFrQixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSTlELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksRUFBdUMsQ0FBQztRQUM1QyxFQUFFLEdBQUcsY0FBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsMENBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVztRQUN6RSxJQUFHLENBQUMsRUFBRTtZQUFFLE9BQU07UUFFZCxhQUFhO1FBQ2IsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBRyxNQUFNLEVBQUMsQ0FBQztZQUNULFlBQU0sQ0FBQyxVQUFVLDBDQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3hJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDbEMsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRS9CLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDZixDQUFDO0lBQ0QsU0FBUztJQUNELE1BQU07UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUMsK0JBQStCO1FBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDaEUsQ0FBQztJQUdELGNBQWMsQ0FBQyxDQUFXO1FBQ3hCLGVBQWU7UUFDZixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxzREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsc0RBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNEQUFRLENBQUMsTUFBTSxDQUFDO1FBQ2hHLHVEQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsTUFBTSxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQUxDO0lBREMsMERBQVE7NkNBS1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QzBEO0FBQ25CO0FBQ087QUFDYTtBQU85RCxZQUFZO0FBQ0wsTUFBTSxPQUFRLFNBQVEsc0VBQStDO0lBQzFFLFlBQW9CLElBQTJCO1FBQzdDLEtBQUssQ0FBQztZQUNKLFVBQVUsRUFBRSxhQUFhO1lBQ3pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsWUFBWSxFQUFFLEdBQUcsSUFBSSxLQUFLO1lBQzFCLGFBQWEsRUFBRSxLQUFLO1NBQ3JCLENBQUMsQ0FBQztRQVBlLFNBQUksR0FBSixJQUFJLENBQXVCO1FBUzdDLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFFbEIsdURBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFZLEVBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ25CLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDZixDQUFDO0lBRUQsU0FBUztJQUNELFdBQVc7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLFNBQVM7SUFDbkcsQ0FBQztJQUVELE9BQU87SUFDQyxVQUFVO1FBQ2hCLE1BQU0sS0FBSyxHQUFHLHVEQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQVMsRUFBQyxFQUFFO1lBQ3JCLG9CQUFvQjtZQUNwQixJQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssc0RBQVEsQ0FBQyxNQUFNLEVBQUMsQ0FBQztnQkFDMUQsSUFBSSxtREFBTyxDQUFDLFdBQVcsRUFBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixDQUFDO2lCQUFLLElBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxzREFBUSxDQUFDLFFBQVEsRUFBQyxDQUFDO2dCQUNwRSxJQUFJLG1EQUFPLENBQUMsYUFBYSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7UUFDSCxDQUFDLENBQUM7SUFFSixDQUFDO0lBRUQsaUJBQWlCO0lBQ1QsTUFBTTtRQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUNyRixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtJQUN6RixDQUFDO0lBR0QsZUFBZSxDQUFDLENBQVc7UUFDdkIsZUFBZTtRQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFHRCxnQkFBZ0IsQ0FBQyxDQUFXO1FBQzFCLGVBQWU7UUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0NBRUY7QUFYQztJQURDLDBEQUFROzhDQUlSO0FBR0Q7SUFEQywwREFBUTsrQ0FJUjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVILFVBQVU7QUFDVixJQUFZLFFBQTRCO0FBQXhDLFdBQVksUUFBUTtJQUFFLDJDQUFNO0lBQUUsK0NBQVE7QUFBQyxDQUFDLEVBQTVCLFFBQVEsS0FBUixRQUFRLFFBQW9CO0FBQ3hDLE9BQU87QUFDQSxNQUFNLE1BQU07SUFDakIsWUFBbUIsRUFBUyxFQUFTLEtBQVksRUFBUyxJQUFXLEVBQVMsTUFBYSxFQUFTLE1BQWdCO1FBQWpHLE9BQUUsR0FBRixFQUFFLENBQU87UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTztRQUFTLFdBQU0sR0FBTixNQUFNLENBQU87UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFVO0lBQUUsQ0FBQztDQUN4SDtBQUlELHFCQUFxQjtBQUNkLE1BQU0sU0FBUztJQUtwQjtRQUpRLFVBQUssR0FBWSxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBRXpCLGNBQVMsR0FBZ0IsRUFBRSxDQUFDLENBQUMsSUFBSTtJQUVuQixDQUFDO0lBRXZCLE1BQU0sQ0FBQyxXQUFXO1FBQ2hCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVE7UUFDdEIsQ0FBQztRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNoQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFZLEVBQUMsSUFBVyxFQUFDLE1BQWEsRUFBQyxNQUFlO1FBQzdELE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxhQUFhO0lBQ2IsV0FBVyxDQUFDLFVBQWlCLEVBQUUsTUFBZTtRQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUUsV0FBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSztJQUNuQixDQUFDO0lBRUQsV0FBVyxDQUFDLFVBQXFCO1FBQy9CLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYyxDQUFDLFVBQWlCO1FBQzlCLEtBQUksTUFBTSxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDO1lBQ3RDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztDQUVGO0FBRU0sTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3QzFDLFNBQVMsWUFBWSxDQUFDLEdBQWdCO0lBQzNDLE1BQU0sRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxHQUFHLEdBQUc7SUFDeEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRW5CLElBQUcsUUFBUSxFQUFDLENBQUM7UUFDWCxPQUFPLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFLO0lBQzlCLENBQUM7SUFDRCxJQUFHLEdBQUcsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUMsQ0FBQztRQUNuQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHO0lBQ25DLENBQUM7SUFDRCxJQUFHLEdBQUcsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUMsQ0FBQztRQUNuQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHO0lBQ25DLENBQUM7SUFDRCxJQUFHLFNBQVMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUMsQ0FBQztRQUN6QyxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksU0FBUztJQUNoRCxDQUFDO0lBQ0QsSUFBRyxTQUFTLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFDLENBQUM7UUFDekMsT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLFNBQVM7SUFDaEQsQ0FBQztJQUNELE9BQU8sT0FBTztBQUNoQixDQUFDOzs7Ozs7O1VDOUJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ0o7QUFFekMsSUFBSSx1REFBUyxFQUFFO0FBQ2YsSUFBSSxtREFBTyxDQUFDLFFBQVEsQ0FBQztBQUNyQixJQUFJLG1EQUFPLENBQUMsVUFBVSxDQUFDO0FBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL0J1aWxkQ29tcG9uZW50LnRzIiwid2VicGFjazovL3RzLXByb2plY3QvLi9zcmMvZGVjb3JhdGlvbi9BdXRvQmluZC50cyIsIndlYnBhY2s6Ly90cy1wcm9qZWN0Ly4vc3JjL21vZGFsL0J1aWxkRm9ybS50cyIsIndlYnBhY2s6Ly90cy1wcm9qZWN0Ly4vc3JjL21vZGFsL0J1aWxkTGkudHMiLCJ3ZWJwYWNrOi8vdHMtcHJvamVjdC8uL3NyYy9tb2RhbC9CdWlsZFVsLnRzIiwid2VicGFjazovL3RzLXByb2plY3QvLi9zcmMvc3RhdGUvTGlzdFN0YXRlLnRzIiwid2VicGFjazovL3RzLXByb2plY3QvLi9zcmMvdG9vbHMvdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly90cy1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtcHJvamVjdC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g57G75Z6LXHJcbnR5cGUgQ29uc3RydWN0b3JUeXBlID0ge1xyXG4gIHRlbXBsYXRlSWQ6c3RyaW5nLCBcclxuICBob3N0RWxlbWVudElkOnN0cmluZywgXHJcbiAgZWxlbWVudElkOnN0cmluZywgXHJcbiAgbmV3RWxlbWVudElkOnN0cmluZywgXHJcbiAgaW5zZXJ0QXRTdGFydDogYm9vbGVhblxyXG59XHJcblxyXG4vLyDnsbsgQnVpbGTnmoTniLbnu4Tku7ZcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJ1aWxkQ29tcG9uZW50PFQgZXh0ZW5kcyBIVE1MRGl2RWxlbWVudCxVIGV4dGVuZHMgSFRNTERpdkVsZW1lbnQgfCBIVE1MVUxpc3RFbGVtZW50PntcclxuICBob3N0RWxlbWVudDogVDsgLy9hcHBcclxuICBkaXZFbGVtZW50OiBVOyAvL2Zvcm3jgIF1bFxyXG5cclxuICBjb25zdHJ1Y3RvcihvYmo6Q29uc3RydWN0b3JUeXBlKXtcclxuICAvLyDku448dGVtcGxhdGUgaWQ9XCJmb3JtLXRlbXBsYXRlXCI+5YWD57Sg5LitLCDojrflj5blrZDlhYPntKA8ZGl2IGlkPVwiZm9ybVwiPlxyXG4gIGNvbnN0IHRlbXBsYXRlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmoudGVtcGxhdGVJZCkgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuICBjb25zdCBjb3B5VGVtcGxhdGVFbCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGVFbCx0cnVlKTsgLy/mt7Hmi7fotJ3kuIDku71cclxuICB0aGlzLmRpdkVsZW1lbnQgPSBjb3B5VGVtcGxhdGVFbC5jb250ZW50LmdldEVsZW1lbnRCeUlkKG9iai5lbGVtZW50SWQpIGFzIFU7XHJcbiAgdGhpcy5kaXZFbGVtZW50LmlkID0gb2JqLm5ld0VsZW1lbnRJZDsgLy/nu5nlhYPntKDorr7nva7mlrBpZFxyXG4gIC8vIOaKiuWFg+e0oOaPkuWFpeWIsGFwcOS4rVxyXG4gIHRoaXMuaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouaG9zdEVsZW1lbnRJZCkgYXMgVDtcclxuICB0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChvYmouaW5zZXJ0QXRTdGFydCA/ICdhZnRlcmJlZ2luJyA6ICdiZWZvcmVlbmQnLCB0aGlzLmRpdkVsZW1lbnQpXHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyDoo4XppbDlmahcclxuZXhwb3J0IGZ1bmN0aW9uIEF1dG9CaW5kKHRhcmdldDphbnksIHByb3A6c3RyaW5nLCBkZXNjcmlwdG9yPzogUHJvcGVydHlEZXNjcmlwdG9yKXtcclxuICBjb25zdCByZXM6UHJvcGVydHlEZXNjcmlwdG9yID0ge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICBnZXQoKXtcclxuICAgICAgcmV0dXJuIGRlc2NyaXB0b3I/LnZhbHVlLmJpbmQodGhpcylcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc1xyXG59XHJcbiAgIiwiaW1wb3J0IHsgQnVpbGRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWlsZENvbXBvbmVudFwiXHJcbmltcG9ydCB7IEF1dG9CaW5kIH0gZnJvbSBcIi4uL2RlY29yYXRpb24vQXV0b0JpbmRcIlxyXG5pbXBvcnQgeyBWYWxpZGF0ZURhdGEgfSBmcm9tICcuLi90b29scy92YWxpZGF0aW9uJ1xyXG5pbXBvcnQgeyBsaXN0U3RhdGUsTGlTdGF0dXMgfSBmcm9tICcuLi9zdGF0ZS9MaXN0U3RhdGUnXHJcblxyXG4vLyDnsbsgQnVpbGRGb3JtXHJcbmV4cG9ydCBjbGFzcyBCdWlsZEZvcm0gZXh0ZW5kcyBCdWlsZENvbXBvbmVudDxIVE1MRGl2RWxlbWVudCxIVE1MRGl2RWxlbWVudD57XHJcbiAgdGl0bGVJbnB1dEVsOiBIVE1MSW5wdXRFbGVtZW50Oy8vdGl0bGVcclxuICBkZXNjSW5wdXRFbDogSFRNTFRleHRBcmVhRWxlbWVudDsvL2Rlc2NyaXB0aW9uXHJcbiAgcGVvcGxlSW5wdXRFbDogSFRNTElucHV0RWxlbWVudDsvL3Blb3BsZVxyXG5cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICB0ZW1wbGF0ZUlkOiAnZm9ybS10ZW1wbGF0ZScsXHJcbiAgICAgIGhvc3RFbGVtZW50SWQ6ICdhcHAnLFxyXG4gICAgICBlbGVtZW50SWQ6ICdmb3JtJyxcclxuICAgICAgbmV3RWxlbWVudElkOiAnZm9ybScsXHJcbiAgICAgIGluc2VydEF0U3RhcnQ6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIC8vIOiOt+WPljPkuKppbnB1dOeahOWAvOW5tuagoemqjFxyXG4gICAgdGhpcy50aXRsZUlucHV0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKSEgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHRoaXMuZGVzY0lucHV0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKSEgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHRoaXMucGVvcGxlSW5wdXRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZW9wbGUnKSEgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHRoaXMuc3VibWl0KClcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpe1xyXG4gICAgY29uc3QgYnRuRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JykhIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgLy8gYnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMudmFsaWRhdGUuYmluZCh0aGlzKSlcclxuICAgIGJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLnZhbGlkYXRlKVxyXG4gIH1cclxuXHJcbiAgLy8g5qCh6aqMM+S4qmlucHV0XHJcbiAgQEF1dG9CaW5kXHJcbiAgdmFsaWRhdGUoKTogW3N0cmluZyxzdHJpbmcsbnVtYmVyXSB8IHZvaWQge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLnRpdGxlSW5wdXRFbC52YWx1ZVxyXG4gICAgY29uc3QgZGVzYyA9IHRoaXMuZGVzY0lucHV0RWwudmFsdWVcclxuICAgIGNvbnN0IHBlb3BsZSA9ICt0aGlzLnBlb3BsZUlucHV0RWwudmFsdWVcclxuXHJcbiAgICBpZiggXHJcbiAgICAgIFZhbGlkYXRlRGF0YSh7IHZhbHVlOnRpdGxlLCByZXF1aXJlZDp0cnVlLCB9KSAmJiBcclxuICAgICAgVmFsaWRhdGVEYXRhKHsgdmFsdWU6ZGVzYywgcmVxdWlyZWQ6dHJ1ZSwgbWluTGVuZ3RoOjEsIG1heExlbmd0aDogMTAsIH0pICYmXHJcbiAgICAgIFZhbGlkYXRlRGF0YSh7IHZhbHVlOnBlb3BsZSwgcmVxdWlyZWQ6dHJ1ZSwgbWluOjEsIG1heDoxMCwgfSkgXHJcbiAgICApe1xyXG4gICAgICBsaXN0U3RhdGUuYWRkU3RhdGUodGl0bGUsZGVzYyxwZW9wbGUsTGlTdGF0dXMuQWN0aXZlKTsgLy/mlL7lhaVMaXN0U3RhdGXlrp7kvotcclxuICAgICAgdGhpcy5yZXNldFZhbHVlKClcclxuICAgIH1lbHNle1xyXG4gICAgICBhbGVydCgnZXJyb3IgZGF0YScpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8g6YeN572uM+S4qmlucHV0XHJcbiAgcmVzZXRWYWx1ZSgpe1xyXG4gICAgdGhpcy50aXRsZUlucHV0RWwudmFsdWUgPSAnJ1xyXG4gICAgdGhpcy5kZXNjSW5wdXRFbC52YWx1ZSA9ICcnXHJcbiAgICB0aGlzLnBlb3BsZUlucHV0RWwudmFsdWUgPSAnJ1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBBdXRvQmluZCB9IGZyb20gJy4uL2RlY29yYXRpb24vQXV0b0JpbmQnXHJcbmltcG9ydCB7IGxpc3RTdGF0ZSxMaVN0YXR1cyxMaVR5cGUgfSBmcm9tICcuLi9zdGF0ZS9MaXN0U3RhdGUnXHJcblxyXG5pbnRlcmZhY2UgRHJhZ2dhYmxle1xyXG4gIGRyYWdFbmRIYW5kbGVyKGU6RHJhZ0V2ZW50KTogdm9pZDsgLy8g5pS55Y+YbGnnmoTkvY3nva5cclxufVxyXG5cclxuLy8g57G7IOa4suafk2xpXHJcbmV4cG9ydCBjbGFzcyBCdWlsZExpIGltcGxlbWVudHMgRHJhZ2dhYmxle1xyXG4gIHByaXZhdGUgbGlFbGVtZW50OiBIVE1MTElFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBwcml2YXRlIGxpSW5zdGFuY2U6IExpVHlwZTtcclxuICBcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50SWQ6c3RyaW5nLCBsaUluc3RhbmNlOkxpVHlwZSl7XHJcbiAgICB0aGlzLmxpSW5zdGFuY2UgPSBsaUluc3RhbmNlO1xyXG4gICAgbGV0IHVsOiBIVE1MVUxpc3RFbGVtZW50IHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuICAgIHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKT8ucXVlcnlTZWxlY3RvcigndWwnKTsgLy88dWw+PC91bD5cclxuICAgIGlmKCF1bCkgcmV0dXJuXHJcblxyXG4gICAgLy8g56e76Zmk5bey5pyJ55qEbGnlhYPntKAgXHJcbiAgICBjb25zdCBoYXZlRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaUluc3RhbmNlLmlkKTtcclxuICAgIGlmKGhhdmVFbCl7XHJcbiAgICAgIGhhdmVFbC5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChoYXZlRWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGlFbGVtZW50LnRleHRDb250ZW50ID0gJ1RpdGxlOiAnICsgbGlJbnN0YW5jZS50aXRsZSArICcsICBEZXNjcmlwdGlvbjogJyArIGxpSW5zdGFuY2UuZGVzYyArICcsICBQZW9wbGVOdW06ICcgKyBsaUluc3RhbmNlLnBlb3BsZTtcclxuICAgIHRoaXMubGlFbGVtZW50LmlkID0gbGlJbnN0YW5jZS5pZDtcclxuICAgIHVsPy5hcHBlbmRDaGlsZCh0aGlzLmxpRWxlbWVudClcclxuICAgICAgXHJcbiAgICB0aGlzLmNvbmZpZygpXHJcbiAgfVxyXG4gIC8vIOa3u+WKoOaLluaLieebkeWQrFxyXG4gIHByaXZhdGUgY29uZmlnKCl7XHJcbiAgICB0aGlzLmxpRWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlIC8v5byA5ZCv5ouW5ouJIDxsaSBkcmFnZ2FibGU9dHJ1ZT48L2xpPlxyXG4gICAgdGhpcy5saUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsdGhpcy5kcmFnRW5kSGFuZGxlcilcclxuICB9XHJcblxyXG4gIEBBdXRvQmluZFxyXG4gIGRyYWdFbmRIYW5kbGVyKGU6RHJhZ0V2ZW50KXtcclxuICAgIC8vIOaLluaLvee7k+adnyDmlLnlj5hsaeeahOeKtuaAgVxyXG4gICAgY29uc3Qgc3RhdHVzID0gdGhpcy5saUluc3RhbmNlLnN0YXR1cyA9PT0gTGlTdGF0dXMuQWN0aXZlID8gTGlTdGF0dXMuRmluaXNoZWQgOiBMaVN0YXR1cy5BY3RpdmU7XHJcbiAgICBsaXN0U3RhdGUudXBkYXRlU3RhdGUodGhpcy5saUluc3RhbmNlLHN0YXR1cylcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCdWlsZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnVpbGRDb21wb25lbnQnXHJcbmltcG9ydCB7IEJ1aWxkTGkgfSBmcm9tICcuLi9tb2RhbC9CdWlsZExpJ1xyXG5pbXBvcnQgeyBBdXRvQmluZCB9IGZyb20gJy4uL2RlY29yYXRpb24vQXV0b0JpbmQnXHJcbmltcG9ydCB7IGxpc3RTdGF0ZSxMaVN0YXR1cyxMaVR5cGUgfSBmcm9tICcuLi9zdGF0ZS9MaXN0U3RhdGUnXHJcblxyXG5pbnRlcmZhY2UgRHJhZ1RhcmdldHtcclxuICBkcmFnT3ZlckhhbmRsZXIoZTpEcmFnRXZlbnQpOiB2b2lkOyAvL+aNouiDjOaZr+minOiJslxyXG4gIGRyYWdMZWF2ZUhhbmRsZXIoZTpEcmFnRXZlbnQpOiB2b2lkOyAvL+aNouiDjOaZr+minOiJslxyXG59XHJcblxyXG4vLyDnsbsgQnVpbGRVbFxyXG5leHBvcnQgY2xhc3MgQnVpbGRVbCBleHRlbmRzIEJ1aWxkQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LEhUTUxVTGlzdEVsZW1lbnQ+IGltcGxlbWVudHMgRHJhZ1RhcmdldHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR5cGU6ICdhY3RpdmUnIHwgJ2ZpbmlzaGVkJyl7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIHRlbXBsYXRlSWQ6ICd1bC10ZW1wbGF0ZScsXHJcbiAgICAgIGhvc3RFbGVtZW50SWQ6ICdhcHAnLFxyXG4gICAgICBlbGVtZW50SWQ6ICd1bCcsXHJcbiAgICAgIG5ld0VsZW1lbnRJZDogYCR7dHlwZX0taWRgLFxyXG4gICAgICBpbnNlcnRBdFN0YXJ0OiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucmVuZGVyVGl0bGUoKVxyXG5cclxuICAgIGxpc3RTdGF0ZS5hZGRMaXN0ZW5lcigoc3RhdGU6TGlUeXBlKT0+e1xyXG4gICAgICB0aGlzLnJlbmRlckxpc3QoKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmNvbmZpZygpXHJcbiAgfVxyXG5cclxuICAvLyDmuLLmn5NoM+agh+mimFxyXG4gIHByaXZhdGUgcmVuZGVyVGl0bGUoKXtcclxuICAgIHRoaXMuZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMycpIS50ZXh0Q29udGVudCA9IGAke3RoaXMudHlwZS50b1VwcGVyQ2FzZSgpfS1QUk9KRUNUYCAvL+iuvue9rmgz55qE5paH5pysXHJcbiAgfVxyXG5cclxuICAvLyDmuLLmn5NsaVxyXG4gIHByaXZhdGUgcmVuZGVyTGlzdCgpe1xyXG4gICAgY29uc3Qgc3RhdGUgPSBsaXN0U3RhdGUuZ2V0U3RhdGUoKTtcclxuICAgIHN0YXRlLm1hcCgoaXQ6TGlUeXBlKT0+e1xyXG4gICAgICAvLyDljLrliIZhY3RpdmUvZmluaXNoZWRcclxuICAgICAgaWYodGhpcy50eXBlID09PSAnYWN0aXZlJyAmJiBpdC5zdGF0dXMgPT09IExpU3RhdHVzLkFjdGl2ZSl7XHJcbiAgICAgICAgbmV3IEJ1aWxkTGkoYGFjdGl2ZS1pZGAsaXQpO1xyXG4gICAgICB9ZWxzZSBpZih0aGlzLnR5cGUgPT09ICdmaW5pc2hlZCcgJiYgaXQuc3RhdHVzID09PSBMaVN0YXR1cy5GaW5pc2hlZCl7XHJcbiAgICAgICAgbmV3IEJ1aWxkTGkoYGZpbmlzaGVkLWlkYCxpdCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIOebkeWQrOaYr+WQpuacieWFg+e0oOaLluaLvei/m+adpeOAgeWHuuWOu1xyXG4gIHByaXZhdGUgY29uZmlnKCl7XHJcbiAgICB0aGlzLmRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLHRoaXMuZHJhZ092ZXJIYW5kbGVyKTsgLy/mraPlnKjmi5bmi73kuK0s5LiU5ouW5ou95YWD57Sg6L+b5YWl5LqGdWxcclxuICAgIHRoaXMuZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLHRoaXMuZHJhZ0xlYXZlSGFuZGxlcik7IC8v5q2j5Zyo5ouW5ou95LitLOS4lOaLluaLveWFg+e0oOemu+W8gOS6hnVsXHJcbiAgfVxyXG5cclxuICBAQXV0b0JpbmRcclxuICBkcmFnT3ZlckhhbmRsZXIoZTpEcmFnRXZlbnQpe1xyXG4gICAgICAvLyDov5vlhaXml7Z1bO+8jOabtOaNouiDjOaZr+minOiJslxyXG4gICAgICB0aGlzLmRpdkVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLnR5cGV9LWhvdmVyYCk7XHJcbiAgfVxyXG5cclxuICBAQXV0b0JpbmRcclxuICBkcmFnTGVhdmVIYW5kbGVyKGU6RHJhZ0V2ZW50KXtcclxuICAgIC8vIOemu+W8gHVs5ZCO77yM5pu05o2i6IOM5pmv6aKc6ImyXHJcbiAgICB0aGlzLmRpdkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHt0aGlzLnR5cGV9LWhvdmVyYCk7XHJcbiAgfVxyXG5cclxufSIsIi8vIOaemuS4viDliJfooajnirbmgIFcclxuZXhwb3J0IGVudW0gTGlTdGF0dXN7IEFjdGl2ZSwgRmluaXNoZWQgfSBcclxuLy8g57G7IOWIl+ihqFxyXG5leHBvcnQgY2xhc3MgTGlUeXBle1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDpzdHJpbmcsIHB1YmxpYyB0aXRsZTpzdHJpbmcsIHB1YmxpYyBkZXNjOnN0cmluZywgcHVibGljIHBlb3BsZTpudW1iZXIsIHB1YmxpYyBzdGF0dXM6IExpU3RhdHVzKXt9XHJcbn1cclxuLy8g5aOw5piObGlzdGVuZXJzW13ph4zpnaLnmoTmr4/kuIDkuKrlh73mlbDnmoTnsbvlnotcclxudHlwZSBMaXN0ZW5lckZuID0gKGl0ZW06TGlUeXBlKSA9PiB2b2lkXHJcblxyXG4vLyDnsbsg566h55CG5YiX6KGoIOeUn+aIkOWvueixoeaVsOe7hHN0YXRlXHJcbmV4cG9ydCBjbGFzcyBMaXN0U3RhdGV7XHJcbiAgcHJpdmF0ZSBzdGF0ZTpMaVR5cGVbXSA9IFtdOyAvL+WIl+ihqFxyXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBMaXN0U3RhdGU7IC8v5a6e5L6LXHJcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6TGlzdGVuZXJGbltdID0gW107IC8v55uR5ZCsXHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpe1xyXG4gICAgaWYodGhpcy5pbnN0YW5jZSl7XHJcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlXHJcbiAgICB9XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IExpc3RTdGF0ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBhZGRTdGF0ZSh0aXRsZTpzdHJpbmcsZGVzYzpzdHJpbmcscGVvcGxlOm51bWJlcixzdGF0dXM6TGlTdGF0dXMpe1xyXG4gICAgY29uc3QgbGlJbnN0YW5jZSA9IG5ldyBMaVR5cGUoTWF0aC5yYW5kb20oKS50b1N0cmluZygpLHRpdGxlLGRlc2MscGVvcGxlLHN0YXR1cyk7XHJcbiAgICB0aGlzLnN0YXRlLnB1c2gobGlJbnN0YW5jZSk7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RlbmVyKGxpSW5zdGFuY2UpO1xyXG4gIH1cclxuXHJcbiAgLy8g5ouW5ouJIOaUueWPmHN0YXRlXHJcbiAgdXBkYXRlU3RhdGUobGlJbnN0YW5jZTpMaVR5cGUsIHN0YXR1czpMaVN0YXR1cyl7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuZmluZEluZGV4KGl0PT5saUluc3RhbmNlLmlkID09PSBpdC5pZCk7XHJcbiAgICB0aGlzLnN0YXRlW2luZGV4XS5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB0aGlzLnVwZGF0ZUxpc3RlbmVyKHRoaXMuc3RhdGVbaW5kZXhdKTtcclxuICB9XHJcblxyXG4gIGdldFN0YXRlKCl7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVxyXG4gIH1cclxuXHJcbiAgYWRkTGlzdGVuZXIobGlzdGVuZXJGbjpMaXN0ZW5lckZuKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdhZGRMaXN0ZW5lcjonLGxpc3RlbmVyRm4pXHJcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyRm4pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdGVuZXIobGlJbnN0YW5jZTpMaVR5cGUpe1xyXG4gICAgZm9yKGNvbnN0IGxpc3RlbmVyRm4gb2YgdGhpcy5saXN0ZW5lcnMpe1xyXG4gICAgICBsaXN0ZW5lckZuKGxpSW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0U3RhdGUgPSBMaXN0U3RhdGUuZ2V0SW5zdGFuY2UoKTtcclxuIiwiLy8g5qCh6aqM5pWw5o2uXHJcbmludGVyZmFjZSB2YWxpZGF0YWJsZXtcclxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gIHJlcXVpcmVkPzogYm9vbGVhbixcclxuICBtaW4/OiBudW1iZXIsXHJcbiAgbWF4PzogbnVtYmVyLFxyXG4gIG1pbkxlbmd0aD86IG51bWJlcixcclxuICBtYXhMZW5ndGg/OiBudW1iZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZURhdGEob2JqOiB2YWxpZGF0YWJsZSk6Ym9vbGVhbntcclxuICBjb25zdCB7dmFsdWUscmVxdWlyZWQsbWluLG1heCxtaW5MZW5ndGgsbWF4TGVuZ3RofSA9IG9ialxyXG4gIHZhciBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgaWYocmVxdWlyZWQpe1xyXG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgISF2YWx1ZVxyXG4gIH1cclxuICBpZihtaW4gJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyl7XHJcbiAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWx1ZSA+PSBtaW5cclxuICB9XHJcbiAgaWYobWF4ICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpe1xyXG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsdWUgPD0gbWF4XHJcbiAgfVxyXG4gIGlmKG1pbkxlbmd0aCAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKXtcclxuICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbHVlLmxlbmd0aCA+PSBtaW5MZW5ndGhcclxuICB9XHJcbiAgaWYobWF4TGVuZ3RoICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpe1xyXG4gICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsdWUubGVuZ3RoIDw9IG1heExlbmd0aFxyXG4gIH1cclxuICByZXR1cm4gaXNWYWxpZFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBCdWlsZEZvcm0gfSBmcm9tICcuL21vZGFsL0J1aWxkRm9ybSdcclxuaW1wb3J0IHsgQnVpbGRVbCB9IGZyb20gJy4vbW9kYWwvQnVpbGRVbCdcclxuXHJcbm5ldyBCdWlsZEZvcm0oKVxyXG5uZXcgQnVpbGRVbCgnYWN0aXZlJylcclxubmV3IEJ1aWxkVWwoJ2ZpbmlzaGVkJylcclxuXHJcbmNvbnNvbGUubG9nKDExMSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=