import {createStore} from 'vuex';
import productos from './modules/productos';
import toolsimagen from './modules/toolsimagen';

const store = createStore({
    modules:{
        productos:productos,
        toolsimagen:toolsimagen
    }
})

export default store;