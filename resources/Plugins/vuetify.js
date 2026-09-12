import 'vuetify/styles' //Estilos de vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    //Indicamos el prefijo por defecto
    //Vueitfy soporta varias bibliotecas de iconos, pero acuparemos mdi
    icons: { 
        defaultSet: 'mdi',
        sets: {
            mdi,
        },
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    //Ejemplo de donde personalizar los colores
                    primary: '#000066',
                    secondary:'#6699FF'
                }
            },
        },
    },
})

export default vuetify