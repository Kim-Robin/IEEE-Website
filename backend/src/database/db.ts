import express from 'express';
import sqlite3 from 'sqlite3';

const DATABASE_FILE: string = "./IEEE_Info_DB.db";

let db = new sqlite3.Database(DATABASE_FILE, (err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log("Connection to the in-memory SQL");
});



export const dbQuery = async (query: string, params?: any[]) =>{

     const process = new Promise<any[]>((resolve, reject) =>{

        db.all(query, params, (err, rows) =>{
            if(err){
                reject(err);
            }else{
                resolve(rows);
            }
        })

    })
    .finally(()=>{
        db.close();
    });

    return process;
}



