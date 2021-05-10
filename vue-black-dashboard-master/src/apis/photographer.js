import {api} from './api'

export default {
    all(){
        return api.get("photographer/index");
    },
    totalBookingMonth(month){
        return api.get(`ranking/month/${month}`)
    }
}