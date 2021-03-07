import axios, { AxiosResponse } from 'axios';
import { Events } from '../../../../backend/src/model/events';

export default async function fetchEvents() {
    const response: void | AxiosResponse<any> = await axios.get('http://localhost:5000/events')
        .catch(error => {
            console.log(error.config);
            if (error.response) {
                throw new Error(`Axios response error: ${error.response.data}\nStatus: ${error.response.status}\nHeaders: ${error.response.headers}`);
            } else if (error.request) {
                throw new Error(`Axios request error: ${error.request}`);
            } else {
                throw new Error(`Axios error: ${error.message}`);
            }
        });
    return makeEvents(response);
}

function makeEvents(response: AxiosResponse<any>) {
    let fetchedOfficers: Events[] = [];
    response.data.forEach((item: Events) => {
        fetchedOfficers.push(item);
    });
    return fetchedOfficers;
}