<template>

    <div v-if="links.length > 0">

        <div class="text-center">
                <v-pagination
                v-model="page"
                :length="links.length-2"
                rounded="circle"
               
                >
              
            </v-pagination>


  </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            page: this.currentPage()
        }
    },
    methods:{
        currentPage(){
            var params = new URLSearchParams(window.location.search);
            var p = parseInt(params.get('page'));
            return p && p > 0 ? p : 1;
        }
    },
    props:{
        links:[Array]
    },
    watch:{
        page(){ 
            var params = new URLSearchParams(window.location.search);
            if(this.page > 1){
                params.set('page', this.page);
            } else {
                params.delete('page');
            }
            var qs = params.toString();
            window.location.href = window.location.origin + window.location.pathname + (qs ? '?' + qs : '');
        }
    }
}

</script>
