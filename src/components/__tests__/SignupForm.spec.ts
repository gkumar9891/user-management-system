import { describe, it, expect } from 'vitest'
import { mount, } from '@vue/test-utils'
import SignupForm from '../SignupForm.vue'

describe('SignupForm', () => {
    it('renders properly', () => {
        const wrapper = mount(SignupForm, { data() { return { email: 'Hello@gmail.com', password: '12345' } } })
        expect(wrapper.find('#email').element.value).equals('Hello@gmail.com');
        expect(wrapper.find('#password').element.value).equals('12345');
    })

    it('should signup successfully', async () => {
        const wrapper = mount(SignupForm, {
            data() { return { email: 'eve.holt@reqres.in', password: 'cityslicka' } }
        })
        await wrapper.find('form').trigger('submit.prevent');
    })
})