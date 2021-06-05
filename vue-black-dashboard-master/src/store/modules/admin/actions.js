// import Customer from '../../../apis/customer'
// export const getCustomer = ({ commit }) =>{
//     // console.log(Photographer.all());
//     Customer.all().then((response)=>{
//         commit("SET_CUSTOMER", response.data);
//         console.log(response.data);
//     })
//     // const photographer = await api.get("/customer/index");
//     // commit("SET_PHOTOGRAPHER", photographer);
// }

// import Admin from "../../../apis/admin";
// export const createVoucher = ({ commit }, voucher) => {
//     debugger
//     return Admin.createVoucher(voucher).then((response) => {
//         debugger
//         commit("SET_CUSTOMER", response.data);
//     })
// }
// export const logoutAdmin = ({ commit }) => {};

// export const loginAdmin = ({ commit }, { username, password }) => {
//   debugger;
//   Admin.login({ username, password }).then(response => {
//     debugger;
//     console.log(response);
//     if (response.data) {
//         setToken(response.data.user.token);
//         commit("SET_USER", response.data.user);
//         ApiService.setHeader()
//         // this.$router.push('Home');
//     }
//     commit("LOGIN_ADMIN", response.data)
//   }).catch((err) =>{
//       console.log(err);
//   });
// };
