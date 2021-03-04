import {dbQuery} from '../database/db';

export type Members = {
    id: number;
    first_name: string;
    last_name: string;
    role: string;
    position: string;
    linkedIn: string;
    start_year: number;
    end_year: number;
    image: string;
}

const getAllMembers = async ()=>{
    const values = await dbQuery(`SELECT * FROM Members`);
    console.log("values" + values);
    return values as Members[];
}

const getEboardMembers = async () => {
    const values = await dbQuery(`SELECT * FROM Members WHERE role = 'Eboard'`);
    console.log('eboard ' + values);
    return values as Members[];
}

const getJboardMembers = async () => {
    const values = await dbQuery(`SELECT * FROM Members WHERE role = 'Jboard'`);
    console.log('jboard ' + values);
    return values as Members[];
}

const getDboardMembers = async () => {
    const values = await dbQuery(`SELECT * FROM Members WHERE role = 'Dboard'`);
    console.log('dboard ' + values);
    return values as Members[];
}

export const memberModel = {
    getAllMembers,
    getEboardMembers,
    getJboardMembers,
    getDboardMembers
}
