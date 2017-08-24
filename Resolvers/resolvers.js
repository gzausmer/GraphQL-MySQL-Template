import {connection} from '../Connectors/mysql';

let getSupplierByCompany = (company) => {
    const sqlAll = `SELECT * FROM suppliers`;
    const sqlByCompany = `${sqlAll} WHERE COMPANY = '${company}'`;
    let sql = company? sqlByCompany : sqlAll;
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

let getCompany = (name) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM Companies WHERE NAME = '${name}'`;
        connection.query(sql, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};

export const resolvers = {
    Query: {

        getSupplier: (obj, {company}) => {
            return getSupplierByCompany(company).then(rows => rows);
        },
    },

    Supplier: {

        COMPANY: (obj) => {
            return getCompany(obj.COMPANY).then(rows => rows[0]);
        }
    }

};

