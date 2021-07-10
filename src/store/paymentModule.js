import axios from "axios";

export default {
    state: {
        pages: 0,
        currentPage: 1,
        paymentList: {},
        categories: ['Food', 'Navigation', 'Service', 'Sport', 'Education', 'Entertainment'],
        addPaymentVisible:false
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
            console.log(Object.keys(payload)[0])
            console.log(Object.keys(state.paymentList))


        },
        setPages(state, payload) {
            state.pages = Object.keys(payload).length

        },
        setPage(state, payload) {
            state.currentPage = payload
        },
        setAddPayment(state, payload) {
            // if (state.paymentList[`page${Object.keys(state.paymentList).length}`].length === 5) {
            //     state.paymentList = {...state.paymentList, [`page${Object.keys(state.paymentList).length + 1}`]: []}
            //     state.paymentList[`page${Object.keys(state.paymentList).length}`] = [...state.paymentList[`page${Object.keys(state.paymentList).length}`], payload]
            //     console.log(state.paymentList)
            //     console.log(state.paymentList[`page3`])
            // } else {
            //     state.paymentList[`page${Object.keys(state.paymentList).length}`] = [...state.paymentList[`page${Object.keys(state.paymentList).length}`], payload]
            //
            // }
            console.log( state.paymentList[`page${state.currentPage}`])
            console.log(payload)
            state.paymentList[`page${state.currentPage}`] = [...state.paymentList[`page${state.currentPage}`],payload]

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
        setAddPaymentVisible(state){
            state.addPaymentVisible = !state.addPaymentVisible
        }
    },
    getters: {
        getPaymentList: state => state.paymentList,
        getPages: state => state.pages,
        getPage: state => state.currentPage,
        getCategories: state => state.categories,
        getAddPaymentVisible: state=> state.addPaymentVisible


    },
    actions: {
        // async fetchDataAll(context) {
        //     await axios.get('https://raw.githubusercontent.com/DeniBog-script/vue/serverApi/paymentList.json')
        //         .then(response => {
        //             context.commit("setPaymentList", response.data)
        //             context.commit('setPages')
        //         })
        //
        // },
        fetchStart(context) {
            axios.get('https://raw.githubusercontent.com/DeniBog-script/vue/serverApi/paymentList.json')
                .then(response =>
                    context.commit('setPages', response.data)
                ).then(this.dispatch('fetchData', 1))
        },
        fetchData(context, currentPage) {
            axios.get('https://raw.githubusercontent.com/DeniBog-script/vue/serverApi/paymentList.json')
                .then(response => {
                    context.commit('setPage', currentPage)
                    context.commit("setPaymentList", {[`page${currentPage}`]: response.data[`page${currentPage}`]})
                })
        }
    }
}