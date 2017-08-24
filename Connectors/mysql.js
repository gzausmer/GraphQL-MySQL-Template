import * as mysql from "mysql";

// Enter your own db credentials:

export const connection = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
});