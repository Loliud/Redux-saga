import AxiosService from '../service/AxiosService';
import {END_POINT} from '../constants/StatusType';

const url = 'todos';
const instance = AxiosService;
export const getList = () =>{
    return instance.get(`${END_POINT}/${url}`);
};