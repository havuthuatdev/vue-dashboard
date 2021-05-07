import Customer from '../../../apis/customer'
export const getCustomer = ({ commit }) =>{
    // console.log(Photographer.all());
    Customer.all().then((response)=>{
        commit("SET_CUSTOMER", response.data);
        console.log(response.data);
    })
    // const photographer = await api.get("/customer/index");
    // commit("SET_PHOTOGRAPHER", photographer);
}