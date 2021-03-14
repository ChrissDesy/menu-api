/**
 * Data Model Interfaces
 */
import { BaseMember, Member } from "./member.interface";
import { Members } from "./members.interface";

/**
 * DB Configs
 */
let mysql = require("mysql");

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qris",
  database: "node_api",
});

/**
 * Service Methods
 */

export async function findAll() {
    let query = 'SELECT * from family;'

    await conn.query(query, function(error: any, results: any, fields: any){
        if(error){
            console.log('Query error: ' + error);
            return null;
        }

        console.log(results);
        
        return results;
        
    });    
}