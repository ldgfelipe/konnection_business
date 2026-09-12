<template>
    <v-card>
        <v-card-text>
            <v-select :label="label" v-model="catselect" :items="categorias" ></v-select>
        </v-card-text>
    </v-card>

</template>
<script>
import Categorias from '../../schemas/categorias';
export default{
    data(){
        return {
            categorias:Categorias,
            catselect:""
        }
    },
    methods:{
      
    },
    props:{
        label:{
            default:'Seleccione la categoría'
        }
    },
    watch:{
        catselect(){
         
            this.$emit('catselect',this.catselect)
        }

    }

}

</script>