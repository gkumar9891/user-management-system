import axios from '../http-instances/axios';
import type { Login as LoginResponse } from  '@/types/Login';
import type { Register as RegisterResponse } from '@/types/Register';

class User {
    async login(email: string, password: string): Promise<LoginResponse> {
        const options = {
            url: '/login',
            method: 'post',
            data: {
                email: email,
                password: password
            }
        }
        const data: LoginResponse  = await axios(options);
        return data;
    }
    async register(email: string, password: string): Promise<RegisterResponse> {
        const options = {
            url: '/register',
            method: 'post',
            data: {
                email: email,
                password: password
            }
        }
        const data: RegisterResponse = await axios(options);
        return data;
    }
}

export default new User()