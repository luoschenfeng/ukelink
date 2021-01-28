import Vue from 'vue'

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {
}
interface IRequestParams {
    url: string,
    data: object,
    method: 'past' | 'get'
}
interface Irequest {
    (params: IRequestParams): AxiosPromise
}
declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface Vue {
    $request: Irequest,
    $svgList: string,
  }
}