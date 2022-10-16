import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:8080' });

// export const getAllData = async () => {
//     try {
//         let data = await API.post('/auth/login', { phone: '0978932712', password: '12345' });
//         return data;
//     } catch (err) {
//         console.log(err);
//         // rej(err);
//     }
// };

export const getAllData = async (data) => {
    console.log(data);
    axios
        .post('http://localhost:8080/auth/login', {
            password: data.password,
            phone: data.phoneNumber,
        })
        .then((res) => {
            console.log(res.data.data);
            localStorage.setItem('token', res.data.data);
        });
};
export const Signup = (data) => {
    axios
        .post('http://localhost:8080/user/sign-up', {
            phone: data.phoneNumber,
            password: data.password,
            name: data.firstName,
        })
        .then((res) => {
            console.log('Success', res.data.data);
            return { message: res.data.message, errCode: 1 };
        })
        .catch((res) => {
            console.log('Failed', res.response.data);

            return { message: res.response.data, errCode: -1 };
        });
};
