import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general',{
    state:()=>({
        isAuthOpen:false,
        isEditProfileOpen:false,
        selectedPost:null,
        ids:null,
        isBackUrl:"/",
        posts:null,
        suggested:null,
        following:null
    }),
    actions:{
        //
    }
})