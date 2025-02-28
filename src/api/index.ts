import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import { DEV_BASE_URL } from '../constants/apiConstants';
import axios from 'axios';

export const worker = setupWorker(...handlers);

axios.defaults.baseURL = process.env.NODE_ENV === 'QA' ? '' : DEV_BASE_URL;
