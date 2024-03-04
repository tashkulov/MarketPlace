import axios from "axios";

import { USER_LOCAL_STORAGE_KEY } from "../consts/localStorage";

<<<<<<< HEAD
export const $api = axios.create({
    baseURL: "http://localhost:3500" 
});

$api.interceptors.request.use((config) => {
    
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || "";
    }
    
    return config;
});
=======

export const $api=axios.create({
    baseURL:"http://localhost:3500"
});

$api.interceptors.request.use((config)=>{
    if(config.headers){
        config.headers.Authorization=localStorage.getItem(USER_LOCAL_STORAGE_KEY) || "";
    }
    return config;
});

>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
