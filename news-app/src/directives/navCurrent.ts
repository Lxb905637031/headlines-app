/* eslint-disable */ 

// binding.value接口
interface IConfig {
  activeClass: string,
  className: string,
  curIdx: number
}

// binding接口
interface IBinding {
  value: IConfig,
  oldValue: IConfig | undefined,
  [key: string]: any
}

export default {
  mounted(el: HTMLElement, { value } : IBinding) {
    const { activeClass, className, curIdx } = value
    const oNavItems: HTMLCollection = el.getElementsByClassName(className)
    // 给当前index的元素添加active样式
    oNavItems[curIdx].className += ` ${activeClass}` 
  },
  updated(el: HTMLElement, { value, oldValue }: IBinding) {
    const { activeClass, className, curIdx } = value
    const oNavItems: HTMLCollection = el.getElementsByClassName(className)
    // 断言
    const oldCurIdx: number = oldValue!.curIdx
    // 类名重重，添加新类名
    oNavItems[oldCurIdx].className = `${className}`
    oNavItems[curIdx].className += ` ${activeClass}`
  }
}