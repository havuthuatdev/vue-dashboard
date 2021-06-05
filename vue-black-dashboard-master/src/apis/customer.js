import {api} from './api'

export default {
    all(){
        return api.get("customer/index");
    },
    createVouchers(voucher){
        return api.post("voucher/new",voucher);
    },
}