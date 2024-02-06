<script>
import { store } from '../store';

export default {
    props: {
        post: Object,
    },
    data() {
        return {
            store,
        };
    },
    computed: {
        truncateText() {
            if(this.post.contenuto && this.post.contenuto.length > 100) {
                return this.post.contenuto.substring(0, 100) + "...";
            }
            return this.post.contenuto;
        }
    }
}
</script>

<template>
    <div class="card p-1 h-100">
        <img v-if="post.cover_image" :src="`${store.baseUrl}/storage/${post.cover_image}`" class="card-img-top ms_image" alt="">
        <p class="text-center text-secondary py-5" v-if="!post.cover_image">Nessuna <br> immagine <br> trovata</p>
        <div class="card-body">
            <h4 class="card-title fw-bold mb-2">{{ post.titolo }}</h4>
            <h6 class="card-subtitle mb-4 text-secondary"><i>({{ post.slug }})</i></h6>
            <p class="card-text"> <span class="fw-bold">Categoria:</span> {{ post.type ? post.type.nome : 'non assegnata' }}
            </p>
            <p class="card-text"> <span class="fw-bold">Contenuto:</span> <br> {{ truncateText }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ms_image{
        aspect-ratio: 1;
    }
</style>