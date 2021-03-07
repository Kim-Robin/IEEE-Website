import axios, { AxiosResponse } from 'axios';
import { Members } from '../../../../backend/src/model/members';

async function fetchOfficers(officerType: string) {
    let response: void | AxiosResponse<any> = await axios.get('http://localhost:5000/members/' + officerType)
        .catch((error) => {
            console.log(error.config);
            if (error.response) {
                throw new Error(`Axios response error: ${error.response.data}\nStatus: ${error.response.status}\nHeaders: ${error.response.headers}`);
            } else if (error.request) {
                throw new Error(`Axios request error: ${error.request}`);
            } else {
                throw new Error(`Axios error: ${error.message}`);
            }
        });
    return response;
}

function modifyFetchedOfficer(officer: Members) {
    officer.image = officer.image.toLowerCase();
}

function makeOfficers(response: AxiosResponse<any>) {
    let fetchedOfficers: Members[] = [];
    response.data.forEach((item: Members) => {
        modifyFetchedOfficer(item);
        fetchedOfficers.push(item);
    });
    return fetchedOfficers;
}

export async function fetchEboard() {

    const eboard = await fetchOfficers('eboard')
        .then(response => {
            return makeOfficers(response);
        })
        .catch(error => {
            console.log(`Error getting eboard: ${error}`);
        }); 
    return eboard;
}

export async function fetchJboard() {
    
    const jboard = await fetchOfficers('jboard')
        .then(response => {
            return makeOfficers(response);
        })
        .catch(error => {
            console.log(`Error getting jboard: ${error}`);
        });
    return jboard;
}

export async function fetchDboard() {
    
    const dboard = await fetchOfficers('dboard')
        .then(response => {
            return makeOfficers(response);
        })
        .catch(error => {
            console.log(`Error getting dboard: ${error}`);
        });
    return dboard;
}