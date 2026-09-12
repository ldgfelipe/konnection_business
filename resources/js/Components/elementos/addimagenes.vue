<template>
    <v-card>
            <v-card-text>
                <v-file-input :label="label" multiple @change="emitedatos" ></v-file-input>
            </v-card-text>
    </v-card>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        emitedatos(evt){
            /// En Vuetify 3, @change entrega el array de archivos directamente (no un evento)
            var arrayImgs = Array.isArray(evt) ? evt : (evt && evt.target ? evt.target.files : []);
            var arrayFiles=[]
            var arrayShow=[]
            for(var i=0; i<arrayImgs.length; i++){
               arrayFiles.push(arrayImgs[i])
               arrayShow.push(URL.createObjectURL(arrayImgs[i]))
            } 
            this.$emit('tosend',arrayFiles)
            this.$emit('toshow',arrayShow)
        }
    },  
    props:{
        label:""
    }
}

</script>