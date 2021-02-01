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
}

const getAllMembers = async ()=>{
    const values = await dbQuery(`SELECT * FROM Members`);
    console.log("values" + values);
    return values as Members[];
}

export const memberModel = {
    getAllMembers
}
