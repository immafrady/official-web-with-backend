import {HttpParams} from "@angular/common/http";

export function httpParamsHandler(params: Object = {}): HttpParams {
  let httpParams = new HttpParams();
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      const value = params[key]
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach(v => {
            httpParams = httpParams.append(key, String(v));
          })
        } else {
          httpParams = httpParams.set(key, String(value));
        }
      }
    }

  }
  return httpParams
}
