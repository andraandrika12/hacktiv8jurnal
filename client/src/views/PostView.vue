<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';
import { RouterLink } from 'vue-router';
import NavbarPost from '../components/NavbarPost.vue';
import Post from '../components/Post.vue';

export default {
    components:
        { RouterLink, NavbarPost, Post },


    data() {
        return {
            formPost: {
                title: "",
                content: "",
                imgUrl: "",
                createdAt: "",
                UserId: "",
                TagId: "",
                PostId: ""
            }
        }
    },

    computed: {
        ...mapState(useAppStore, ['posts', 'tags', 'user', 'userProfile'])
    },

    methods: {
        ...mapActions(useAppStore, ['submitPost', 'fetchPost', 'fetchUser', 'fetchUserProfile']),
        fetchUserById(id) {
            this.fetchUser(id)
        },
        fetchUserProfileById(id) {
            this.fetchUserProfile(id)
        }

    },
    created() {
        this.fetchPost()
        this.fetchUser()
        this.fetchUserProfile()
    }

}
</script>
<template>
    <NavbarPost />

    <section class="bg-pattern">
        <div class="container-fluid gedf-wrapper">
            <div class="row">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="mr-2">
                                <img class="rounded-circle" width="45" :src="userProfile?.profilePicture">
                            </div>
                            <div class="h5">{{ user.username }}</div>
                            <div class="h6">
                                <RouterLink :to="'/userProfile/' + user.id">Edit Profile</RouterLink>
                            </div>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="h6 text-muted">Followers</div>
                                <div class="h5">5.2342</div>
                            </li>
                            <li class="list-group-item">
                                <div class="h6 text-muted">Following</div>
                                <div class="h5">6758</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 gedf-main">

                    <!--- \\\\\\\Post-->
                    <form @submit.prevent="submitPost(formPost)">
                        <div class="card gedf-card">
                            <div class="card-header">
                                <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="posts-tab" data-toggle="tab" role="tab"
                                            aria-selected="true">Write Something
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="posts" role="tabpanel"
                                        aria-labelledby="posts-tab">
                                        <div class="form-group">
                                            <label class="sr-only" for="message">post</label>
                                            <input v-model="formPost.title" name="title" class="form-control mb-2"
                                                id="message" rows="2" placeholder="Put your Title here..">
                                            <textarea v-model="formPost.content" name="content" class="form-control mb-2"
                                                id="message" rows="3"
                                                placeholder="What are you feeling? Tell Us..."></textarea>
                                            <input v-model="formPost.imgUrl" name="title" class="form-control mb-2"
                                                id="message" rows="2" placeholder="Put your link Image here..">
                                            <select v-model="formPost.TagId" class="form-control mb-3" name="TagId">
                                                <option value="" selected disabled>--- Choose Tag ---</option>
                                                <option v-for="(tag, index) in tags" :key="index" :value="tag.id">{{
                                                    tag.tagName }}</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div class="btn-toolbar justify-content-between">
                                    <div class="btn-group">
    <input class="form-submit" type="submit" value="submit">
</div>
                                    <div class="btn-group">
                                        <button id="btnGroupDrop1" type="button" class="btn btn-link dropdown-toggle"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-globe"></i>
                                        </button>

                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                            <a class="dropdown-item" href=""><i class="fa fa-globe"></i> Public</a>
                                            <a class="dropdown-item" href=""><i class="fa fa-users"></i> Friends</a>
                                            <a class="dropdown-item" href=""><i class="fa fa-user"></i> Just me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- Post /////-->

                    <!--- \\\\\\\PostCard-->
                    <Post v-for="(post, index) in posts" :key="index" :post="post" />
                    <!-- PostCard /////-->

                    <RouterLink to="/chatRoom" class="float">
                        <i class="fa fa-plus my-float"></i>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>