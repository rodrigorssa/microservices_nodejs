import Database from "./Database";
import { rejects } from "assert";

class Lojas extends Database {


    salva(loja:JSON){
        return new Promise((resolve, reject) =>{
            this._db.query('INSERT INTO lojas SET ? ', loja, (err:any, result:any) => {
                if(err) {
                    return reject('Erro ao inserir dados: '+ err)    
                }
                resolve(result);
            })
        })
    }

    buscaLojas(params?: any){

        //ajustando a consulta para receber ou não parametros de busca
        let filtro = (params) ? 'WHERE state = ? AND city = ?' : ''
        let dados = (params) ? [params.estado,params.cidade] : []
        let consulta = `SELECT * FROM lojas ${filtro}`

        console.log(consulta);
        return new Promise((resolve,reject) => {
            this._db.query(consulta, dados, (err:any,result:any) => {
                if(err) {
                    return reject('Erro ao buscar dados: '+ err)
                }
               return resolve(result);
            })
        })
    }

    buscaPorId(id:number){
        return new Promise((resolve,reject) =>{
            this._db.query('SELECT * FROM lojas WHERE id = ?', id, (err:any,result:any) => {
                if(err){
                    return reject('Erro ao realizar consulta')
                }
                return resolve(result)
            })
        })
    }

    buscaPorEstado(estado:string){
        return new Promise((resolve,reject) =>{
            this._db.query('SELECT * FROM lojas WHERE state = ?', estado, (err:any,result:any) => {
                if(err){
                    return reject('Erro ao realizar consulta')
                }
                return resolve(result)
            })
        })
    }

    atualiza(loja:JSON,id:number){
        return new Promise((resolve, reject) =>{
            this._db.query('UPDATE lojas SET ? WHERE id = ?',[loja,id], (err:any,result:any) => {
                if(err){
                     return reject('erro ao atualizar dado')
                }
                return resolve(result)
            })
        })
    }


}

export default Lojas