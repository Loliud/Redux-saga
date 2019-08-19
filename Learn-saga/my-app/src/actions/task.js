import *as taskApis from '../utils/index';
import *as types from '../constants/task';







export const fetchListApi = () => {
    return (dispatch) => {
        taskApis.getList()
            .then(res => {
                // xu ly du lieu
                let data = res.data;
                dispatch(fetchList(data));
            });
    };

};



export const fetchList = (task) => {
    return {
        type: types.FETCH_TASK,
        task
    };
};