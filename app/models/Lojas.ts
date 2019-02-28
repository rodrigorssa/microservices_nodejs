import Database from "./Database";

class Lojas extends Database {


    salva(loja:JSON) {
        return new Promise((resolve, reject) =>{
            this._db.query('INSERT INTO lojas SET ? )', loja, (err:any, result:any) => {
                if(err) {
                    reject('Erro ao inserir dados: '+ err)
                    return;
                }
                resolve(result);
            })
        })
    }


}

export default Lojas