import Database from "./Database";

class Lojas extends Database {


    salva(loja:JSON){
        return new Promise((resolve, reject) =>{
            this._db.query('INSERT INTO lojas SET ? ', loja, (err:any, result:any) => {
                if(err) {
                    reject('Erro ao inserir dados: '+ err)
                    return;
                }
                resolve(result);
            })
        })
    }

    buscaLojas(params?: any){

        let filtro = (params) ? `WHERE state = '${params.estado}' AND city = '${params.cidade}'` : ''
        let consulta = `SELECT * FROM lojas ${filtro}`
        console.log(consulta);
        return new Promise((resolve,reject) => {
            this._db.query(consulta,(err:any,result:any) => {
                if(err) {
                    reject('Erro ao buscar dados: '+ err)
                    return;
                }
                resolve(result);
            })
        })
    }


}

export default Lojas