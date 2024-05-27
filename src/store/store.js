import {defineStore} from "pinia";
import {ref} from "vue";

export const  ProductDataStore= defineStore('products_data',() => {
    let total_price = ref(0);
    let products_in_cart = ref(JSON.parse(localStorage.getItem('products_in_cart')));
    function plusPrice(addedSum){
        total_price.value = total_price.value + Number(addedSum);
        localStorage.setItem('price',total_price.value);
       // console.log('Плюс + ' + addedSum);
        console.log('Итоговая цена: ' + total_price.value);
    };
    function minusPrice(addedSum){
        total_price.value -=addedSum;
        localStorage.setItem('price',total_price.value);
    };

    //добавляем, удаляем продукт в корзину
    function addProductsInCart(title,description,price, id){
        let addedProduct = {
            //добавить путь к изображению
            titleProduct: title,
            descriptionProduct:description,
            priceProduct:price,
            idProduct:id,
        };
            products_in_cart.value = [...products_in_cart.value, addedProduct];
            localStorage.setItem('products_in_cart', JSON.stringify(products_in_cart.value));
            plusPrice(addedProduct.priceProduct);
        console.log('Массив в хранилище:');
        console.log( products_in_cart);

    };
    //Доделать передачу продуктов в корзину
    function removeProductFromCart(id_product){
        let newProductsArray = productsInCart.value.filter(item => item.idProduct != id_product);
        products_in_cart.value = [...newProductsArray];
    };
    return {
        total_price,
        plusPrice,
        minusPrice,
        addProductsInCart,
        products_in_cart,
        removeProductFromCart,
    };
});
