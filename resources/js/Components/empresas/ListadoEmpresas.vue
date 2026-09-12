<template>
<v-row>
    <v-col cols="3" v-for="(key,index) in empresas">
        <v-card>
            <v-card-title>
                <img v-if="key.logo" :src="$assetUrl(key.logo)" style="width:100%;" />
            </v-card-title>
            <v-card-title>  
                {{ key.nombre }}
            </v-card-title>
            <v-card-text>
                {{ key.descripcion }}<br />
                <v-chip v-if="key.categorias" color="primary" size="small" class="mt-2 mb-2">{{ key.categorias }}</v-chip><br />
                <v-btn :href="'/empresa/'+key.id" style="background-color: #000066; color:#fff;">Ver Empresa</v-btn>
            </v-card-text>

        </v-card>
       
    </v-col>

</v-row>
</template>
<script>
export default{
    data(){
        return {

        }
    },
    props:{
        empresas: Array

    }
}

</script>