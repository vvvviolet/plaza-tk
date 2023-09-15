import axios from "axios";

export default defineNuxtPlugin((NuxtApp)=>{
    axios.defaults.withCredentials = true;
    // axios.defaults.baseURL = process.env.baseURL;
    axios.defaults.baseURL = 'http://127.0.0.1:8000';
    return {
        provide:{
            axios: axios
        }
    }
})