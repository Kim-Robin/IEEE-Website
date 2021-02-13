import axios, { AxiosResponse } from 'axios';
import { Members } from '../../../../backend/src/model/members';
import portraits from '../../images/officer-portraits/2020-2021/portraits';

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
    switch(officer.last_name.toLowerCase())  {
        case 'oswald':
            officer.linkedIn = portraits.eboard.chair;
            break;
        case 'walsh':
            officer.linkedIn = portraits.eboard.vice_chair;
            break;
        case 'cho':
            officer.linkedIn = portraits.eboard.treasurer;
            break;
        case 'comanzo':
            officer.linkedIn = portraits.eboard.secretary;
            break;
        case 'kaminski':
            officer.linkedIn = portraits.eboard.graduate_chair;
            break;
        case 'kim':
            officer.linkedIn = portraits.eboard.webmaster;
            break;
        case 'cheung':
            officer.linkedIn = portraits.jboard.chair;
            break;
        case 'aziz':
            officer.linkedIn = portraits.jboard.vice_chair;
            break;
        case 'matthews':
            officer.linkedIn = portraits.jboard.treasurer;
            break;
        case 'lysyuk':
            officer.linkedIn = portraits.jboard.secretary;
            break;
        case 'oh':
            officer.linkedIn = portraits.dboard.first_social_media_director;
            break;
        case 'utionkpan':
            officer.linkedIn = portraits.dboard.second_social_media_director;
            break;
        case 'stryker':
            officer.linkedIn = portraits.dboard.outreach_director;
            break;
        case 'killeen':
            officer.linkedIn = portraits.dboard.communications_director;
            break;
        case 'brown':
            officer.linkedIn = portraits.dboard.intelligence_director;
            break;
    }
    return officer;
}

function makeOfficers(data: any[]) {
    let fetchedOfficers: Members[] = [];
    data.forEach((item: Members) => {
        modifyFetchedOfficer(item);
        fetchedOfficers.push(item);
    });
    return fetchedOfficers;
}

export async function fetchEboard() {

    const eboard = await fetchOfficers('eboard')
        .then(response => {
            const fetchedOfficers = makeOfficers(response.data);
            return fetchedOfficers;
        })
        .catch(error => {
            console.log(`Error getting eboard: ${error}`);
        }); 
    return eboard;
}

export async function fetchJboard() {
    
    const jboard = await fetchOfficers('jboard')
        .then(response => {
            const fetchedOfficers = makeOfficers(response.data);
            return fetchedOfficers;
        })
        .catch(error => {
            console.log(`Error getting jboard: ${error}`);
        });
    return jboard;
}

export async function fetchDboard() {
    
    const dboard = await fetchOfficers('dboard')
        .then(response => {
            const fetchedOfficers = makeOfficers(response.data);
            return fetchedOfficers;
        })
        .catch(error => {
            console.log(`Error getting dboard: ${error}`);
        });
    return dboard;
}