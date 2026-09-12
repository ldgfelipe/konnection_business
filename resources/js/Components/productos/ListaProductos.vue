<template>
    <v-card>
        <v-card-title style="background-color:blue; color:white;">
          Mis Productos <v-btn @click="addproducto=true" style="color:black;"><v-icon>mdi-plus</v-icon></v-btn>
        </v-card-title>
        <v-card-text>

            <v-data-table :items="productos" :headers="titulos">
                <template v-slot:item.imagen="item">
                  
                 <v-img  v-if="item.item.imagen" :src="$assetUrl(item.item.imagen.split(',')[0])" style="width:200px;" />
                 
                </template>

                <template v-slot:item.action="item">

<v-btn style="background-color:blue; color:white;" @click="editarproducto(item)"><v-icon>mdi-pencil</v-icon></v-btn>
                </template>
            </v-data-table>

        </v-card-text>
      </v-card>


        <v-dialog v-model="editprod">
          <v-card>
            <v-card-title style="background-color:blue; color:white;">
              <span class="headline">Edita Producto</span>  
              
              <v-btn class="elevation-0" @click="editor ? editor=false : editor=true"><v-icon>mdi-pencil</v-icon></v-btn>
                
              <v-btn class="elevation-0" @click="editprod=false"><v-icon>mdi-close</v-icon></v-btn>

            </v-card-title>
            <v-card-text>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-row>
                    <v-col cols="12" sm="12" v-if="editor" > 
                      <UploadImagenes :label="'Agrega imagenes'"  @tosend="LoadImages" @toshow="LoadUpdateImagenes"></UploadImagenes>
                    </v-col>
                    <v-col cols="12" sm="4"  v-for="(key,index) in toshowimg">
                    
                     <v-img :src='$assetUrl(key)' v-if="key"  >

                      <v-btn v-if="editor"  class="elevation-0" @click="eliminarImagen(index)"><v-icon>mdi-close</v-icon></v-btn>
                     </v-img> 
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card>
                    <v-card-title>
                      <span v-if="!editor">  
               Producto:
              {{prodselect.item.nombre}} 
              </span>
              <v-text-field label="Nombre del producto"  v-if="editor"  v-model="prodselect.item.nombre" variant="outlined"></v-text-field>
              
             
              
              </v-card-title>
              <v-card-text>
    
                <span v-if="!editor">
                  Descripción: {{ prodselect.item.descripcion }}
                </span>     
                <v-textarea label="Descripción" v-if="editor" v-model="prodselect.item.descripcion" variant="outlined"></v-textarea>
                <hr />
                <br />
                <span v-if="!editor">Precio:
                {{ prodselect.item.precio }}
              </span>

                <v-text-field label="Precio" v-if="editor" v-model="prodselect.item.precio" variant="outlined"></v-text-field>

                <hr />
                <br />
                <span v-if="!editor"> Cantidad:
                {{ prodselect.item.stock }} </span>

                <v-text-field label="Cantidad" v-if="editor" v-model="prodselect.item.stock" variant="outlined"></v-text-field>

                  <hr />
                <span v-if="!editor"> Categoria de Producto:
                  {{ prodselect.item.categoria }} </span>


                <v-select v-if="editor" v-model="prodselect.item.categoria"  label="Categoría" :items="categorias"></v-select>


                  <hr />

                  <span v-if="!editor"> Palabras Clave:
                    {{ prodselect.item.palabras_clave }} </span>
                    <v-combobox
                    v-if="editor"
                    v-model="prodselect.item.palabras_clave"
                    chips
                    clearable
                    multiple
                    filled
                    rounded
                    append-icon=""
                  >
                      <template v-slot:selection="{ attrs, item, select, selected }">
                          <v-chip
                            small
                            v-bind="attrs"
                            :input-value="selected"
                            close
                            @click="select"
                            @click:close="remove(item)"
                            >
                            {{ item }}
                          </v-chip>
                      </template>
                  </v-combobox>

                <v-btn v-if="editor" @click="actualizarProducto()" style="background-color:blue; color:white;"><v-icon>mdi-content-save</v-icon></v-btn>


                  <v-btn style="background-color: red; color:white;" @click="eliminaproducto()">Elimar Producto</v-btn>

              </v-card-text>
              </v-card>
              
              </v-col>
                </v-row>

            </v-card-text>
          </v-card>
        </v-dialog>
   
   
        <!----Agrega Nuevo Producto o Edita Producto--->
        <v-dialog v-model="addproducto" max-width="500px"  class="mx-auto">
          <v-card >
            <v-card-title style="background-color:blue; color:white; text-align: center;">
              Registra Nuevo Producto
            </v-card-title>
            <v-card-text >

              <v-row>
              <v-col sm="4" v-for="(file,f) in imagenesCargadas" :key="f">
                    <img  :src="$assetUrl(file || '/images/sinimagen.jpg')" class="img-fluid" :title="'file' + f" />
                </v-col>
              </v-row>
               <UploadImagenes :label="'Selecciona las imagenes de tu producto'" @tosend="LoadImages" @toshow="cargaImagenes"></UploadImagenes>


                <v-text-field v-model="productoAdd.action" type="hidden" value="nuevo"></v-text-field>
                <v-text-field v-model="productoAdd.nombre" variant="outlined" label="Nombre"></v-text-field>
                <v-text-field v-model="productoAdd.descripcion" variant="outlined" label="Descripción"></v-text-field>
                <v-text-field v-model="productoAdd.precio" variant="outlined" label="Precio"></v-text-field>
                <v-text-field v-model="productoAdd.stock" variant="outlined" label="Cantidad"></v-text-field>
                <v-select v-model="productoAdd.categoria"  label="Categoría" :items="categorias"></v-select>

              <v-combobox
                    v-model="productoAdd.palabras_clave"
                    chips
                    clearable
                    multiple
                    filled
                    rounded
                    append-icon=""
                  >
                      <template v-slot:selection="{ attrs, item, select, selected }">
                          <v-chip
                            small
                            v-bind="attrs"
                            :input-value="selected"
                            close
                            @click="select"
                            @click:close="remove(item)"
                            >
                            {{ item }}
                          </v-chip>
                      </template>
                  </v-combobox>

                <v-btn  @click="guardarProducto()" style="background-color:blue; color:white;">Guardar</v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
        
</template>
<script>
/// pendiente:: agregar preloades para evistar duplicidad de productos poner un temporaizador y limpiar objecto de productAdd y proodselect para que al abrir el form de alta o modificación no aparezca el producto anterior 


import Producto from '../../schemas/producto';
import Categorias from '../../schemas/categorias';
import UploadImagenes from '@/Components/elementos/addimagenes.vue';
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex';
export default {
    components:{
      UploadImagenes
    },
    data(){
        return {    
          editor: false,
          categorias:Categorias,
            productos:[],
            editprod:false,
            addproducto:false,
            productoAdd:Producto,
            files:[],
            fileshow:[],
            prodselect:{},
            imagenprod:[],
            titulos:[
              {
                title:'Nombre',
                value:'nombre'
              },
              {
                title:'Descripción',
                value:'descripcion' 
              },
              {
                title:'Precio',
                value:'precio'
              },
              {
                title:'Imagen',
                value:'imagen'
              },
              {
                title:'Acciones',
                value:'action'
              }
            ],
            imagendelete:[],
            imagenesCargadas:[],
            toshowimg:[]
      
        }
    },
    mounted(){
      console.log(this.productoAdd)

      this.cargaLista()
    },
    computed:{
        },
    methods:{
   
      editarproducto(item){
        this.prodselect=item
        this.toshowimg=this.prodselect.item.imagen ? this.prodselect.item.imagen.split(',') : []
        if(this.prodselect.item.palabras_clave){
          this.prodselect.item.palabras_clave=String(this.prodselect.item.palabras_clave).split(',')
        }else{
          this.prodselect.item.palabras_clave=[]
        }
        this.editprod=true

      },
      eliminarImagen(x){
        this.imagendelete.push(this.toshowimg[x])
        this.toshowimg.splice(x,1)
      },
        cargaLista(){   
          axios.post('/cargaProductos')
        
                .then((res)=>{
                 this.productos=res.data
                });
        },
      
        LoadImages(evt){
     this.imagenprod=evt

        },
        actualizarProducto(){
          var formData = new FormData();
          var pos=0;
          var imagenesAr=[]


              for(var l=0;l<this.imagenprod.length;l++){
                formData.append('archivo['+l+']',  this.imagenprod[l]);   
              }       
              formData.append('id', this.prodselect.item.id); 
              formData.append('id_empresa', this.dtEmpresa.id); 
              formData.append('nombre', this.prodselect.item.nombre); 
              formData.append('descripcion', this.prodselect.item.descripcion);
              formData.append('precio', this.prodselect.item.precio);
              formData.append('stock', this.prodselect.item.stock);
              formData.append('categoria', this.prodselect.item.categoria ? this.prodselect.item.categoria : '');
              formData.append('palabras_clave', Array.isArray(this.prodselect.item.palabras_clave) ? this.prodselect.item.palabras_clave.join(',') : this.prodselect.item.palabras_clave);
              formData.append('actualiImagen', this.prodselect.item.imagen);
              formData.append('eliminaImagenes', JSON.stringify(this.imagendelete));
              formData.append('action', 'actualizar'); 
          
              setTimeout(()=>{
                axios.post('/guardaProducto', formData, {headers: {
            'Content-Type': 'multipart/form-data'
        }})
                .then((res)=>{
                    this.editprod=false
                   // this.prodselect={}
                   // this.addMultipleStateImagen([])
                  this.cargaLista()
                });
              },2000)

        },
        eliminaproducto(){
          if(confirm('¿Seguro que desea eliminar el producto? ')){
            var payload={
              id:this.prodselect.item.id,


            }
            axios.post('/eliminaproducto',payload)
            .then((res)=>{
              console.log(res)
              this.cargaLista()
              
              this.editprod=false
            })
          }

        },
        guardarProducto(){
          var formData = new FormData();
          var pos=0;
          var imagenesAr=[]


              for(var l=0;l<this.imagenprod.length;l++){
                formData.append('archivo['+l+']',  this.imagenprod[l]);   
              }       
              formData.append('id_empresa', this.dtEmpresa.id); 
              formData.append('nombre', this.productoAdd.nombre); 
              formData.append('descripcion', this.productoAdd.descripcion);
              formData.append('precio', this.productoAdd.precio);
              formData.append('stock', this.productoAdd.stock);
              formData.append('categoria', this.productoAdd.categoria ? this.productoAdd.categoria : '');
              formData.append('palabras_clave', Array.isArray(this.productoAdd.palabras_clave) ? this.productoAdd.palabras_clave.join(',') : this.productoAdd.palabras_clave);
              formData.append('action', 'nuevo'); 
          
              setTimeout(()=>{
                axios.post('/guardaProducto', formData, {headers: {
            'Content-Type': 'multipart/form-data'
        }})
                .then((res)=>{
                    this.addproducto=false
                    this.productoAdd={...Producto}
                    this.imagenesCargadas=[]
                    this.imagenprod=[]
                    this.cargaLista()
                });
              },2000)
              

        },
        cargaImagenes(evt){
          this.imagenesCargadas=evt
          console.log(this.imagenesCargadas)
        },
        LoadUpdateImagenes(evt){
          evt.map((d)=>{
            this.toshowimg.push(d);
          })
   
        }
    },
    props:['dtEmpresa']
}
</script>