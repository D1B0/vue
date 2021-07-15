import axios from "axios";

export default {
    state: {
        pages: 0,
        currentPage: 1,
        paymentList: {},
        categories: ['Food', 'Navigation', 'Service', 'Sport', 'Education', 'Entertainment'],

    },
    mutations: {
        setPaymentList(state, payload) {
            let find = Object.keys(state.paymentList).find(el =>
                el === Object.keys(payload)[0])
            if (!find) {
                state.paymentList = {...state.paymentList, ...payload}
            } else {
                return false
            }
        },
        setPages(state, payload) {
            state.pages = Object.keys(payload).length

        },
        setPage(state, payload) {
            state.currentPage = payload
        },
        setAddPayment(state, payload) {
            state.paymentList[`page${state.currentPage}`] = [...state.paymentList[`page${state.currentPage}`], payload]

        },
        setCategories(state, payload) {
            let find = state.categories.find(el => el === `${payload}`)
            if (find) {
                return false
            } else {
                state.categories = [...state.categories, payload]
                console.log(state.categories)
            }
        },
        setEditPayment(state, payload){
            let idx = state.paymentList[`page${state.currentPage}`].findIndex(token=> token.id === payload.id)
            state.paymentList[`page${state.currentPage}`][idx]={...state.paymentList[`page${state.currentPage}`][0], ...payload}
            state.paymentList = {...state.paymentList}
        },
        setDeletePayment(state,payload){
            let idx = state.paymentList[`page${state.currentPage}`].findIndex(token=> token.id === payload.id)
            state.paymentList[`page${state.currentPage}`].splice(idx,1)
            state.paymentList = {...state.paymentList}
        }
    },
    getters: {
        getPaymentList: state => state.paymentList,
        getPages: state => state.pages,
        getPage: state => state.currentPage,
        getCategories: state => state.categories,


    },
    actions: {

        fetchData(context, currentPage = 1) {
            axios.get('https://raw.githubusercontent.com/DeniBog-script/vue/serverApi/paymentList.json')
                .then(response => {
                        context.commit('setPages', response.data)
                        context.commit('setPage', currentPage)
                        context.commit("setPaymentList", {[`page${currentPage}`]: response.data[`page${currentPage}`]})
                    }
                )
        },
    }
}