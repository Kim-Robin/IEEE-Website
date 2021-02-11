import {dbQuery} from '../database/db';

export type Schedule ={
    id: number;
    event: string;
    day: string;
    time: number;
    am_pm: string;
}

const getAllSchedule = async ()=>{
    const values = await dbQuery(`SELECT * FROM Schedule`);
    return values as Schedule[];
}

export const scheduleModel ={
    getAllSchedule
}
