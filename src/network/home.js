import {request} from 'network/network'

export function GetHomeMultiData(){
  return request({
    url: '/home/multidata',
    method: 'get'
  })
}

export function getProductData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
    })
  }
  