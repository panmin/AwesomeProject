import {URL_GET_HOME} from '../actions/constants_url'
import http from '../common/http'

export const getHome = (successCallback,failCallback)=>{
  http.get(URL_GET_HOME,successCallback,failCallback);
};