import MQRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

const mqRequest = new MQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export default mqRequest
