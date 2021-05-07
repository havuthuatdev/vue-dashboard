import {api} from './api'

export default {
    all(){
        return api.get("customer/index");
    }
}