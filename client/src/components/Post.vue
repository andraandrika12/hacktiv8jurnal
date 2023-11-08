<script>
import { mapActions } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    props: ['post', 'tag'],

    methods: {
        ...mapActions(useAppStore, ['fetchPost', 'fetchTag', 'deletePost']),
        deletePostId(id) {
            // console.log(id)
            this.deletePost(id)
        }

    },
    created() {
        this.fetchPost()
        this.fetchTag()
    }

}
</script>
<template>
    <div class="card gedf-card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="mr-2">
                        <img class="rounded-circle" width="45" src="https://picsum.photos/50/50">
                    </div>
                    <div class="ml-2">

                        <div class="h5 m-0"></div>

                        <div class="h5 m-0"></div>

                        <div class="h7 text-muted">{{ post.User.username }}</div>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <button class="btn btn-link-warning dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-ellipsis-h"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                            <div class="h6 dropdown-header">...</div>
                            <a @click.prevent="deletePostId(post.id)" class="dropdown-item">Delete Post</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="card-body">
            <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>{{ post.createdAt }}</div>
            <a class="card-link" href="">
                <h5 class="card-title">{{ post.title }}</h5>
            </a>

            <p class="card-text">
                {{ post.content }}
            </p>
            <img :src="post.imgUrl">
            <div v-if="post.Tags.length > 0">
                <span v-for="tag in post.Tags" :key="tag.id" class="badge badge-warning">{{ tag.tagName }}</span>
            </div>

        </div>
        <div class="card-footer">
            <a href="" class="card-link"><i class="fa fa-gittip"></i> Like</a>
            <a href="" class="card-link"><i class="fa fa-comment"></i> Comment</a>
            <a href="" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
        </div>
    </div>
</template>