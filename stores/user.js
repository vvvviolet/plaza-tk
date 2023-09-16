import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
    state:()=>({
        id:'',
        uid:'',
        email:'',
        name:'',
        bio:'',
        image:''
    }),
    actions:{
       async getTokens(){
        await $axios.get('/sanctum/csrf-cookie')
       },
       async login(email,password){
        await $axios.post('/login',{
            email:email,
            password:password
        })
       },
       async getUser(){
        let res=await $axios.get('/api/logged-in-user')
        this.$state.id   =res.data[0].id
        this.$state.uid  =res.data[0].uid
        this.$state.name =res.data[0].name
        this.$state.bio  =res.data[0].bio
        this.$state.image=res.data[0].image
       }
    },
    persist: true
})