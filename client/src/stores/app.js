import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useAppStore = defineStore('app', {
    state: () => ({
      urlBase: 'https://hack.andraandrika.xyz/',
      user: {},
      posts: [],
      tags: null,
      deleteId: [],
      userProfile: {}

    }),
    actions: {
        async register(formRegister) {
            console.log(formRegister)
            try {
                const dataRegister = {
                    username: formRegister.username,
                    email: formRegister.email,
                    password: formRegister.password,
                    phoneNumber: formRegister.phoneNumber,
                    address: formRegister.address
                }
                await axios.post(this.urlBase + 'register', dataRegister)

                this.router.push('/login')

                Swal.fire({
                    icon: "success",
                    title: "Successfully register!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (error) {
                console.log(error)
            }
        },

        async loginPage(formLogin) {
            console.log(formLogin)
            try {
                const dataLogin = {
                    email: formLogin.email,
                    password: formLogin.password
                }

                const { data } = await axios({
                    method: 'POST',
                    url: this.urlBase + 'login',
                    data: dataLogin
                })

                localStorage.setItem('access_token', data.access_token)

                this.router.push('/post')
                

                Swal.fire({
                    icon: "success",
                    title: "Successfully login!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (error) {
                console.log(error)

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email or Password invalid!",
                    timer: 1500,
                });
            }
        },


        logout() {
            localStorage.removeItem('access_token')
            
            this.router.push('/')

            Swal.fire({
                icon: "success",
                title: "Successfully logout!",
                showConfirmButton: false,
                timer: 1500,
            });
        },

        async fetchPost() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: this.urlBase + 'post',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                })
                
                this.posts = data
                console.log(data)
              
            } catch (error) {
                console.log(error)
            }
        },

        async fetchTag() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: this.urlBase + 'tag',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                })

                this.tags = data
                console.log(data)
              
            } catch (error) {
                console.log(error)
            }
        },


        async submitPost(formPost) {
            console.log(formPost)
            try {
                const dataPost = {
                    title: formPost.title,
                    content: formPost.content,
                    imgUrl: formPost.imgUrl,
                    UserId: formPost.UserId,
                    TagId: formPost.TagId === '' ? null:formPost.TagId,
                    PostId: formPost.PostId
                }

                await axios({
                    method: 'POST',
                    url: this.urlBase + 'post',
                    data: dataPost,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                
                Swal.fire({
                    icon: "success",
                    title: "Successfully add post!",
                    showConfirmButton: false,
                    timer: 1500,
                });

                
                this.fetchPost()
                this.fetchUser()
                this.fetchUserProfile()

            } catch (error) {
                console.log(error)
            }
        },

        async deletePost(id) {
            console.log(id)
            try {
                await axios({
                    method: 'DELETE',
                    url: this.urlBase + 'post/' + id,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                
                this.fetchPost()

                Swal.fire({
                    icon: "success",
                    title: "Successfully Deleted!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (error) {
                console.log(error)

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You don't have access to delete",
                    timer: 1500,
                });
            }
        },

        async fetchUser(id) {
            console.log(id, '<<<<<<<<<<')
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: this.urlBase + 'user/' + id,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                })
                
                this.user = data
                console.log(data)
              
            } catch (error) {
                console.log(error)
            }
        },

        async fetchUserProfile(id) {
            try {
                if (id !== undefined) {
                    const { data } = await axios({
                        method: 'GET',
                        url: this.urlBase + 'userProfile/' + id,
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        },
                    })
                    this.userProfile = data
                    console.log(data)
                }
                
                

              
            } catch (error) {
                console.log(error)
            }
        },



        async submitUserProfile(formUserProfile) {
            try {
                const dataUserProfile = {
                    firstName: formUserProfile.firstName,
                    lastName: formUserProfile.lastName,
                    gender: formUserProfile.gender,
                    dateOfBirth: formUserProfile.dateOfBirth,
                    profilePicture: formUserProfile.profilePicture,
                    UserId: formUserProfile.UserId
                }
                let { data } = {}
                let id =  formUserProfile.UserId ?? ''
                console.log(id, '<<<<<<<<<<<<')
                if (id !== ''){
                    data = await axios({
                        method: 'PUT',
                        url: this.urlBase + 'userProfile/' + formUserProfile.UserId,
                        data: dataUserProfile,
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        }
                    })
                } else {
                    data = await axios({
                        method: 'POST',
                        url: this.urlBase + 'userProfile/',
                        data: dataUserProfile,
                        headers: {
                            access_token: localStorage.getItem('access_token')
                        }
                    })
                }


                this.UserProfile = data
                this.router.push('/post')

                
                Swal.fire({
                    icon: "success",
                    title: "Successfully submit your profile!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                

            } catch (error) {
                console.log(error)
            }
        },
        
    },

})