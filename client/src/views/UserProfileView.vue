<script>
import { mapActions, mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default {
    data() {
    const userProfile = {
        firstName: '',
        lastName: this.userProfile?.lastName || '',
        gender: this.userProfile?.gender || '',
        dateOfBirth: this.userProfile?.dateOfBirth || '',
        profilePicture: this.userProfile?.profilePicture || '',
       
    };

    if (typeof this.userProfile !== 'undefined') {
        userProfile.firstName = this.userProfile.firstName || '';

    }

    return {
        userProfile
    };
},

    computed: {
        ...mapState(useAppStore, ['userProfile'])


    },

    methods: {
        ...mapActions(useAppStore, ['fetchUserProfile', 'submitUserProfile']),
        fetchUserProfileById(id) {
            this.fetchUserProfile(id)
        },

        formUserProfileEdit() {
            this.submitUserProfile(this.userProfile)
        },

    

    },
    created() {
        this.fetchUserProfile()
        
    }

}
</script>

<template>
    <div class="container-xl px-4 mt-4">
        <hr class="mt-0 mb-4">
        <div class="row">
            <div class="col-xl-4">

                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Profile Picture</div>
                    <div class="card-body text-center">

                        <img :src="userProfile?.profilePicture">

                    </div>
                </div>
            </div>
            <div class="col-xl-8">

                <div class="card mb-4">
                    <div class="card-header">Account Details</div>
                    <div class="card-body">
                        <form @submit.prevent="formUserProfileEdit()">
                            <div class="row gx-3 mb-3">

                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputFirstName"></label>
                                    <input v-model="userProfile.firstName" class="form-control" id="inputFirstName"
                                        type="text" name="firstName" placeholder="Enter your first name">
                                </div>

                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLastName"></label>
                                    <input v-model="userProfile.lastName" class="form-control" id="inputLastName"
                                        type="text" name="lastName" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">

                                <div class="col-md-6">
                                    <label class="small mb-1" for="gender"></label>
                                    <input v-model="userProfile.gender" class="form-control" id="gender" type="text"
                                        name="gender" placeholder="Enter your Gender">
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">

                                <div class="col-md-6">
                                    <label class="small mb-1" for="dateOfBirth"></label>
                                    <input v-model="userProfile.dateOfBirth" class="form-control" id="dateOfBirth"
                                        type="date" name="dateOfBirth" placeholder="Enter your birthday">
                                </div>
                            </div>

                            <div class="row gx-3 mb-3">

                                <div class="col-md-6">
                                    <label class="small mb-1" for="profilePicture"></label>
                                    <input v-model="userProfile.profilePicture" class="form-control" id="profilePicture"
                                        type="text" name="profilePicture" placeholder="Enter your URL Photo...">
                                </div>
                            </div>
                            <input class="btn btn-warning" type="submit">
                        </form>


                        <p class="text-danger"></p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>