import axios from "axios";

const BackandApiMainService = {
    async getCategories(){
        return axios.get('http://localhost:8060/product/category');
    },
    async getProducts(){
      return axios.get('http://localhost:8060/product/product');
      },
      
};

export default BackandApiMainService;
