import axios from "axios";

export default {
    state: {
        pages: 0,
        page: 1,
        paymentList: {},
        categories: ['Food', 'Navigation', 'Service', 'Sport', 'Education', 'Entertainment']
    },
    mutations: {
        setPaymentList(state, payload) {

            state.paymentList = {...state.paymentList, ...payload}
            console.log(state.paymentList)

        },
        setPages(state) {
            state.pages = Object.keys(state.paymentList).length

        },
        setPage(state, payload) {
            state.page = payload
        },
        setAddPayment(state, payload) {

            if (state.paymentList[`page${Object.keys(state.paymentList).length}`].length === 5) {
                state.paymentList = {...state.paymentList, [`page${Object.keys(state.paymentList).length + 1}`]: []}
                state.paymentList[`page${Object.keys(state.paymentList).length}`] = [...state.paymentList[`page${Object.keys(state.paymentList).length}`], payload]
                console.log(state.paymentList)
                console.log(state.paymentList[`page3`])
            } else {
                state.paymentList[`page${Object.keys(state.paymentList).length}`] = [...state.paymentList[`page${Object.keys(state.paymentList).length}`], payload]

            }
        },
        setCategories(state, payload) {
            let find = state.categories.find(el => el === `${payload}`)
            if (find) {
                return false
            } else {
                state.categories = [...state.categories, payload]
                console.log(state.categories)
            }
        }
    },
    getters: {
        getPaymentList: state => state.paymentList,
        getPages: state => state.pages,
        getPage: state => state.page,
        getCategories: state => state.categories


    },
    actions: {
        async fetchData(context) {
            await axios.get('https://raw.githubusercontent.com/DeniBog-script/vue/serverApi/paymentList.json')
                .then(response => {
                    context.commit("setPaymentList", response.data)
                    context.commit('setPages')
                })

        },
    }
}