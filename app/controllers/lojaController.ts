import Lojas from '../models/Lojas'

class LojaController {

    post(loja:JSON,res:any){
        let lojas = new Lojas()
        lojas.salva(loja)
            .then((result:any) => res.status(201).json(result.insertId))
            .catch((err) =>  {
                throw new Error(err)
            })
    }
}


export default LojaController