import {ref} from "vue";

const inputNameValidation = (event) => {
    const regName = /^[а-яА-Я][а-яА-Я]{2,19}$/;
    if(event.target.value.match(regName)){
        nameValidation.value = true;
    }else{
        nameValidation.value = false;
    };
    console.log(nameValidation.value);
};
const inputCodeOperatorValidation = (event) => {
    const regCode = /^(33|29|44)$/;
    if(event.target.value.match(regCode)){
        codeOperatorValidation.value = true;
    }else{
        codeOperatorValidation.value = false;
    }
};
const inputPhoneValidation = (event) => {
    const regPhoneNumber = /^\d{7}$/;
    if(event.target.value.match(regPhoneNumber)){
        phoneValidation.value = true;
    }else{
        phoneValidation.value = false;
    }
};
const inputStreetValidation = (event) => {
    const regStreet = /^[а-яА-Я][а-яА-Я]{2,19}$/;
    if(event.target.value.match(regStreet)){
        streetValidation.value = true;
    }else{
        streetValidation.value = false;
    }
};
const inputHomeValidation = (event) => {
    const regHomeNumber = /^[1-9]?\d{0,2}[а-яА-Я]?$/;
    if (event.target.value.match(regHomeNumber)){
        homeValidation.value = true;
    }else{
        homeValidation.value = false;
    };
};
const inputEntranceValidation = (event) => {
    const regEntrance = /^\d$/;
    if(event.target.value.match(regEntrance)){
        entranceValidation.value = true;
    }else{
        entranceValidation.value = false;
    }
};
const inputFlatValidation = (event) => {
    const regFlat = /^[1-9]?\d{1,2}$/;
    if(event.target.value.match(regFlat)){
        flatValidation.value = true;
    }else{
        flatValidation.value = false;
    }
};
const inputFloorValidation = (event) => {
    const regFloor = /^[1-9]?\d?$|^100$/;
    if(event.target.value.match(regFloor)){
        floorValidation.value = true;
    }else{
        floorValidation.value = false;
    };
};

const validationBeforeSending = () => {
    if(nameValidation.value && phoneValidation.value && codeOperatorValidation.value &&
        streetValidation.value && floorValidation.value && homeValidation.value &&
    entranceValidation.value && flatValidation.value){
        return true;
    }
    else{
        return false;
    }
};

const nameValidation = ref();
const phoneValidation= ref();
const codeOperatorValidation = ref();
const streetValidation = ref();
const floorValidation = ref();
const homeValidation = ref();
const entranceValidation =ref();
const flatValidation = ref();

export {validationBeforeSending,inputFlatValidation,inputHomeValidation,
        inputStreetValidation,inputCodeOperatorValidation,
        inputEntranceValidation,inputFloorValidation,
        inputNameValidation, inputPhoneValidation,
        nameValidation,phoneValidation,codeOperatorValidation,streetValidation,
        floorValidation,homeValidation,entranceValidation,flatValidation};
