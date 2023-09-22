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
       async auth(email,code){
        await $axios.post('/auth/verify',{
            email: email,
            code: code
        }).then((res)=>{
            console.log(res['data'])
            return new Promise(res['data'])
        }).catch((e)=>{
            console.log(e)
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
        let {data} = await $axios.post('/auth/code',{
            email:email
        })
       return data
       }
    },
    persist: true
})