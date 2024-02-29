import { describe, it, expect } from 'vitest'
import { mount, } from '@vue/test-utils'
import LoginForm from '../LoginForm.vue'

describe('LoginForm', () => {
    it('renders properly', () => {
        const wrapper = mount(LoginForm, { data() { return { email: 'Hello@gmail.com', password: '12345' } } })
        expect(wrapper.find('#email').element.value).equals('Hello@gmail.com');
        expect(wrapper.find('#password').element.value).equals('12345');
    })

    it('should login successfully', async () => {
        const wrapper = mount(LoginForm, {
            data() { return { email: 'eve.holt@reqres.in', password: 'cityslicka' } }
        })
        await wrapper.find('form').trigger('submit.prevent');
    })

})