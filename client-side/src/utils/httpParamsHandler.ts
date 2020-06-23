import {HttpParams} from "@angular/common/http";

export function httpParamsHandler(params:Object) {
  let httpParams = new HttpParams();
  if (params) {
    for (let key in params) {
      httpParams = httpParams.set(key, params[key])
    }
    return httpParams.toString()
  }
}
