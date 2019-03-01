import * as mySql from 'mysql'

abstract class Database {
    protected _db:any;

    constructor(){
        this._db = mySql.createConnection({
            host     : '192.168.99.100',
            user     : 'root',
            password : 'senha',
            database : 'nossas_lojas'
        })
    }
}

export default Database