declare namespace Ajax {
  /**
   * axios返回数据
   */
  export interface AxiosResponse {
    data: AjaxResponse
  }

  /**
   * 接口返回数据
   */
  export interface AjaxResponse {
    //状态码
    code: number,
    //数据
    result: any;
    //信息
    message?: string
  }
}
