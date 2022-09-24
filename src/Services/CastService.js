import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://127.0.0.1:8000/api';

const header = {
    headers: {
        Authorization: 'Bearer' + " " + localStorage.getItem('token')
    }
}

class CartService {


    addBookToCart(data) {
        return axiosService.post(`${baseURL}/addBookToCartByBookId`, data, header)
    }

    incrementCartQuanitity(data) {
        return axiosService.post(`${baseURL}/increamentBookQuantityInCart`, data, header)
    }

    decrementCartQuanitity(data) {
        return axiosService.post(`${baseURL}/decrementBookQuantityInCart`, data, header)
    }


    deleteBookFromCart=(data)=>{
        let response = axiosService.put(`${baseURL}/deleteBookByCartId`, data, header)
        return response;
    }




    getAllBooksFromCart() {
        // const headers = header();
        return axiosService.get(`${baseURL}/getAllBooksInCart`, header)
    }


}
export default CartService;