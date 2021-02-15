import axios, { AxiosResponse } from 'axios';
import { Events } from '../../../../backend/src/model/events';
import thumbnails from '../../images/event-thumbnails/2020-2021/thumbnails';

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

function modifyFetchedEvent(event: Events) {
    console.log(thumbnails.android_app_basics);
    switch(event.event_name) {
        case 'Building Up your Profile with Technologies, Projects, Certifications, Activities, and Experience':
            event.image = thumbnails.building_your_profile;
            break;
        case 'Introduction to development with Unity':
            event.image = thumbnails.intro_to_unity;
            break;
        case 'Prepare for your tech interview with whiteboard coding practice':
            event.image = thumbnails.coding_interview_practice;
            break;
        case 'Android workshop1 - Introduction to Android developement':
            event.image = thumbnails.android_app_basics;
            break;
        case 'Personal Project Showcase':
            event.image = thumbnails.personal_project_showcase;
            break;
        case 'Technical Talk Watch Party - Quantum Computing For Computer Scientists':
            event.image = thumbnails.quantum_computing;
            break;
        case 'Android Dev Series: Family Tree':
            event.image = thumbnails.android_family_tree;
            break;
        case 'Introduction to Git and Github':
            event.image = thumbnails.git_into_github;
            break;
        case 'Android workshop2 - Introduction to using the camera in application':
            event.image = thumbnails.android_camera;
            break;
        case 'Introduction to machine learning with neural networks':
            event.image = thumbnails.neural_networks;
            break;
        case 'Introduction to Game Engines':
            event.image = thumbnails.game_engines;
            break;
        case 'OS Dev Workshop 1: The C programming language':
            event.image = thumbnails.c_programming_lanugage;
            break;
        case 'OS Dev Workshop 2: x86 assembly and its relationship with C':
            event.image = thumbnails.x86_intro;
            break;
        case 'OS Dev Workshop 3: Operating System Development, the basics of building your own OS':
            event.image = thumbnails.os_intro;
            break;
        default:
            event.image = 'none';
    } 
    return event;
}

function makeEvents(response: AxiosResponse<any>) {
    let fetchedOfficers: Events[] = [];
    response.data.forEach((item: Events) => {
        modifyFetchedEvent(item);
        fetchedOfficers.push(item);
    });
    return fetchedOfficers;
}