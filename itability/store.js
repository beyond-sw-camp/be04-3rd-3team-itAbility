// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            token: null
        };
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        }
    }
});

export default store;
