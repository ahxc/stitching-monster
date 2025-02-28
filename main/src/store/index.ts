import { initGlobalState } from 'qiankun'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { option } from '@/utils/type'

// 为 store state 声明类型
export interface State {
  locale?: string, // 当前语言
  title?: string,
  languageList?: option[], // 可选语言列表
  drawer?: boolean,
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

const initState = () => {
  return {
    // 当前语言，命名规则以element语言库为标准
    locale: 'zhCn',
    title: '作家助手', // 页面标题
    // 语言候选项
    languageList: [
      { code: 'zhCn', label: "简体中文" },
      { code: 'en', label: "English" },
    ],
    // 侧边栏打开状态
    drawer: false,
  }
}

export function useStore() {
  return baseUseStore(key)
}

export const store = createStore<State>({
  state: initState,
  mutations: {
    setState(state: State, payload: State) {
      Object.assign(state, payload)
    },
  },
  getters: {
  },
  actions: {
    setGlobalState(state: object) {
      return initGlobalState(state)
    },
  },
  modules: {
  }
})
