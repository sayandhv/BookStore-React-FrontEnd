import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://127.0.0.1:8000/api';

const header = {
    headers: {
        Authorization: 'Bearer' + " " + localStorage.getItem('token')
    }
}

class OrderService {
    placeOrder(data) {
        return axiosService.post(`${baseURL}/placeOrders`, data, header);
    }
}



export default OrderService;