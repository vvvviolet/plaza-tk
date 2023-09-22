import { defineStore } from 'pinia';
import axios from '../plugins/axios';

const $axios = axios().provide.axios;

export const useUserStore = defineStore('user',{
    state:()=>({
        uid:'',
        name:'',
        bio:'',
        image:''
    }),
    actions:{
       async login(email,password){
        await $axios.post('/auth/signin',{
            email:email,
            password:password
        })
       },
       async signup(email,password){
        await $axios.post('/auth/signup',{
            email:email,
            password:password
        })
       },
       async getUser(){
        let res=await $axios.get('/users/me')
        this.$state.id   =res.data[0].id
        // this.$state.uid  =res.data[0].uid
        this.$state.name =res.data[0].name
        // this.$state.bio  =res.data[0].bio
        // this.$state.image=res.data[0].image
       },
       
       async getVerifyCode(email){
        let res = await $axios.post('/auth/code',{
            email:email
        })
       return res.data
       }
    },
    persist: true
})