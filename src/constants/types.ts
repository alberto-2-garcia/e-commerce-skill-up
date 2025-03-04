import { HttpStatusCode } from 'axios';
export interface QueryError extends Error {
    status: HttpStatusCode;
}
