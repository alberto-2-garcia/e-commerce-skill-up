import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import { DEV_BASE_URL } from '../constants/apiConstants';
import axios from 'axios';

export const worker = setupWorker(...handlers);

worker.start({
    serviceWorker: {
        url: '/e-commerce-skill-up/mockServiceWorker.js'
    }
})

axios.defaults.baseURL = process.env.NODE_ENV === 'QA' ? '' : DEV_BASE_URL;
