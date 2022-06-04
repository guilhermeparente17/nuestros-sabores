const Selectors = {
    getUser(state){
        return state?.user
    },

    getCategories(state){
        return state?.categories
    }
}

export default Selectors;