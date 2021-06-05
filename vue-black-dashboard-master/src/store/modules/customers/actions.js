import Customer from '../../../apis/customer'
export const getCustomer = ({ commit }) => {
    return Customer.all().then((response) => {
        commit("SET_CUSTOMER", response.data);
    })
}
export const createVoucher = ({ commit }, { code, description, count, denomination, datetime1, datetime2 }) => {
    debugger
    return Customer.createVouchers({
        code: code,
        description: description,
        count: count,
        denomination: denomination,
        start_time: datetime1,
        end_time: datetime2
    }).then(response => {
        debugger
        commit("SET_CUSTOMER", response.data);
        alert("Create the voucher successfully")
    }).catch((err) => {
        console.log(err);
    })
}
