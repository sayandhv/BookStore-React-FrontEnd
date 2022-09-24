import axios from "axios";

class AxiosService {
    post(url, data='',headers){
        return axios.post(url, data, headers)
    }

    get(url, data = "", headers) {
        return axios.get(url, data, headers)
    }

    put(url, data = "", headers) {
        return axios.put(url, data, headers)
    }
}
export default AxiosService;