import BaseService from "./baseService";
import API from '../config/rest';

const register = (saveData) => {
    // console.log(BaseService.post(API.REGISTER, saveData));
    return BaseService.post(API.REGISTER, saveData);
}

export default {register};