import Photographer from '../../../apis/photographer'

export const getPhotographer = ({ commit }) =>{
    // console.log(Photographer.all());
    Photographer.all().then((response)=>{
        commit("SET_PHOTOGRAPHER", response.data);
        // console.log(response.data);
    })
    // const photographer = await api.get("/customer/index");
    // commit("SET_PHOTOGRAPHER", photographer);
}

export const totalBookingMonth = () =>{
    Photographer.totalBookingMonth("03").then(()=>{
        
    })
}