<template>
    <div>
    <v-row>
        <v-col cols="12" md="3" v-for="(key,index) in productos" :key="index">
           <v-card class="elevation-1">
            <v-card-text class="text-center" >   
                <v-img v-if="key.imagen" :src="$assetUrl(key.imagen.split(',')[0])" height="150" cover></v-img>
                <v-img v-else height="150" color="grey-lighten-2" cover>
                    <div class="d-flex align-center justify-center fill-height">
                        <v-icon size="large" color="grey">mdi-image</v-icon>
                    </div>
                </v-img>
                {{ key.nombre }}
                <p style="font-size:18px;">
                <b> Precio: ${{ key.precio }}</b>
            </p>
                <v-btn @click="verprdocuto(key)" style="background-color:blue;  color:white; width:100%;">Ver Más</v-btn>
            </v-card-text>
          
        </v-card>
        </v-col>
    </v-row>

    <ViewProductos :state="estadoverprod" :producto="prodselect" @cerrarventana="cierraventa"></ViewProductos>


</div>
</template>
<script>
import ViewProductos from '@/Components/productos/ViewProductos.vue'
export default {
    data(){
        return {
            estadoverprod:false,
            prodselect:{}
        }
    },
    components:{
        ViewProductos
    },
    methods:{
        verprdocuto(key){
            this.estadoverprod= this.estadoverprod ? false : true;
            this.prodselect=key
        },
        cierraventa(evt){
            this.estadoverprod=evt
        }
    },
    props:{
        productos:[Object, Array]
    }

}
</script>