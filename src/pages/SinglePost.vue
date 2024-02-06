<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            curPost: null,
            loading: false,
        };
    },
    created() {
        this.loading = true;
        axios
            .get(`${store.baseUrl}/api/posts/${this.$route.params.slug}`)
            .then((resp) => {
                this.curPost = resp.data.results;
                //console.log(resp.data.results);
            })
            .finally(() => {
                this.loading = false;
            });
    }
};
</script>

<template>
    <div class="container mt-3">
        <div v-if="loading">
            <h3>Pagina in caricamento...</h3>
        </div>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="card border border-0 text-center col-8 p-2">
                    <div class="card-body">
                        <h5 class="card-title fs-4 fw-bold mt-2 mb-2">{{ curPost.titolo }}</h5>
                        <h6 class="card-subtitle mb-4 text-muted">({{ curPost.slug }})</h6>
                        <p>
                            Categoria: {{ curPost.type ? curPost.type.nome : 'non assegnata' }}
                        </p>
                        <p class="card-text fw-bold mb-0">
                            Contenuto:
                        </p>
                        <p class="card-text">
                            {{ curPost.contenuto }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>