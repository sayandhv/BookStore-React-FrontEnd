import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://127.0.0.1:8000/api'

const header = {
    headers: {
        Authorization: 'Bearer' + " " + localStorage.getItem('token')
    }
}
class UserService {
    signUp(data) {
        return axiosService.post(`${baseURL}/register`, data)
    }
    login(data) {
        return axiosService.post(`${baseURL}/login`,data)        
    }

    forgetPassword(data) {
        return axiosService.post(`${baseURL}/forgotPassword`,data)        
    }

    address(data) {
        return axiosService.post(`${baseURL}/addAddress`,data,header)        
    }
}
export default UserService;
