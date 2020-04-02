import axios from 'axios';

export const axiosDefault = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://hudumammu.herokuapp.com/"
});

export const axiosWithToken = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://hudumammu.herokuapp.com/",
    headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        // 'x-requested-with': '*',
        'Content-Type': 'application/json'
    }
});