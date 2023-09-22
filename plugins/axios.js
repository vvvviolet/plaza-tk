import axios from "axios";

export default defineNuxtPlugin((NuxtApp)=>{
    axios.defaults.withCredentials = true;
    // axios.defaults.baseURL = 'http://localhost:3000/api';
    axios.defaults.baseURL = 'http://127.0.0.1:3000/api';
    return {
        provide:{
            axios: axios
        }
    }
})