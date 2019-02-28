import * as mySql from 'mysql'

abstract class Database {
    protected _db:any;

    constructor(){
        this._db = mySql.createConnection({
            host     : 'http://192.168.99.100:3306',
            user     : 'root',
            password : 'senha',
            database : 'nossas_lojas'
        })
    }
}

export default Database