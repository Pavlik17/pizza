import {defineStore} from "pinia";
import {ref} from "vue";

export const  ProductDataStore= defineStore('products_data',() => {
        let total_price = ref(JSON.parse(localStorage.getItem('total_price')));
        let array_products = ref(localStorage.getItem('products_cart')
            ? JSON.parse(localStorage.getItem('products_cart'))
            : []);
        let authToken = ref(localStorage.getItem('token'));
        const addProductsInCart = (productId, title, price, count) => {
            const newProduct = {
                idProduct: productId,
                titleProduct:title,
                priceProduct:price,
                count,
            };

            const isProduct = array_products.value.find(product => product.idProduct === productId);

            if (isProduct) {
                array_products.value = array_products.value.map(product => {
                    if (isProduct.idProduct === product.idProduct) {
                        return {
                            ...product,
                            count: product.count + 1,
                        }
                    }

                    return product;
                });
            } else {
                array_products.value = [
                    ...array_products.value,
                    newProduct
                ];
            }

            localStorage.setItem('products_cart', JSON.stringify(array_products.value));
        };
        const minusProductInCart = (productId) => {
            let changeProduct = array_products.value.find(item => item.idProduct === productId);
            if(changeProduct.count ===1){
                changeProduct.count -=1;
                array_products.value = array_products.value.filter(product => product.idProduct !== productId);
            }
                changeProduct.count -=1;
            localStorage.setItem('products_cart', JSON.stringify(array_products.value));
        }
        const plusProductInCart = (productId) => {
            let changeProduct = array_products.value.find(item => item.idProduct === productId);
            changeProduct.count +=1;
            localStorage.setItem('products_cart', JSON.stringify(array_products.value));
        }
        const removeProductFromCart = (idProduct) => {
            array_products.value = array_products.value.filter(product => product.idProduct !== idProduct);
            localStorage.setItem('products_cart', JSON.stringify(array_products.value));
        };
        const totalPriceProducts = () => {
            return array_products.value.reduce((sumProduct, currentProduct) => sumProduct + currentProduct.priceProduct * currentProduct.count, 0);
        };

    return {
        total_price,
        array_products,
        authToken,
        addProductsInCart,
        removeProductFromCart,
        totalPriceProducts,
        minusProductInCart,
        plusProductInCart,
    };
});

export default ProductDataStore;
