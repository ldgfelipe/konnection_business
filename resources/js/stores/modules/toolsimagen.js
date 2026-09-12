export default{
    namespace:true,
    state:{
        multimpleImagen:[],
        readersImagen:[]
    },
    mutations:{
        addMultipleStateImagen(state,data){
            state.multimpleImagen=data
        },
        addReadersImagen(state,data){
            state.readersImagen.push(data)
        }
    },
    
    actions:{
        addMultipleImagen({state,commit,dispatch},data){
                data.forEach((file, f) => {
                   commit('addReadersImagen',data[f])
                    })
                       
                    
        }
    },
    getters:{
        getMultipleImagen(state){
            return state.multimpleImagen
            },
    }
   

}