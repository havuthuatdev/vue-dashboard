import Photographer from '../../../apis/photographer'

export const getPhotographer = ({ commit }) => {
    return Photographer.all().then((response) => {
        commit("SET_PHOTOGRAPHER", response.data);
    })
}

export const totalBookingMonth = ({ commit }, month) => {
    Photographer.totalBookingMonth(month).then((response) => {
        commit("SET_TOTALBOOKINGMONTH", response.data);
    })
}