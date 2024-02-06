<script>
    import axios from 'axios';
    import PostCard from '../components/PostCard.vue';
    import {store} from '../store.js';

    export default {
        data() {
            return{
                store,
                posts: [],
            }
        },
        created() {
            axios.get(`${this.store.baseUrl}/api/posts`)
                .then((resp) => {
                    this.posts = resp.data.results.data;
                })
        },
        components: { PostCard },
    }
</script>

<template>
    <div class="container mt-3">
        <h2 class="fw-bold mb-4">Lista dei post:</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div class="col" v-for="post in posts" :key="post.id">
                <PostCard :post="post" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>