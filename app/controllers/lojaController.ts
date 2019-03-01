import Lojas from '../models/Lojas'

class LojaController {

    post(req:any,res:any){
        
        //validando dados de entrada
        req.assert('name','Campo name é obrigatório.').notEmpty()
        req.assert('address','Campo address é obrigatório.').notEmpty()
        req.assert('phone','Campo phone é obrigatório.').notEmpty()
        req.assert('cnpj','Campo cnpj é obrigatório.').notEmpty()
        req.assert('workingHour','Campo workingHour é obrigatório.').notEmpty()
        req.assert('city','Campo city é obrigatório.').notEmpty()
        req.assert('state','Campo state é obrigatório.').notEmpty()

        let err:any = req.validationErrors()

        //se tiver algum erro o post não envia e mostra mensagem de erro
        if(err) {
            console.log(err)
            res.status(400).json(err[0].msg)
            return
        }

        //adicionando dados em variável, instanciando o objeto para salvar no bd
        let loja = req.body
        const lojas = new Lojas()
        lojas.salva(loja)
            .then((result:any) => res.status(201).json(result.insertId))
            .catch((err) =>  {
                throw new Error(err)
            })
    }

    getAll(req:any,res:any,params?:object){
        const lojas = new Lojas()
        lojas.buscaLojas(params)
            .then((result:any) => {
                //verificando se existe algo dentro do array, caso não tenha, retorna mensagem 'nada encontrado'
                if(Object.keys(result).length === 0 ){
                    res.status(400).json('Nada Encontrado')
                    return
                }
                res.status(200).json(result)
            })
            .catch((err) =>  {
                throw new Error(err)
            })
    }

    getById(req:any,res:any,id:number){
        const lojas = new Lojas()
        lojas.buscaPorId(id)
            .then((result:any) => {
                //verificando se existe control c control v do método acima
                if(Object.keys(result).length === 0 ){
                    res.status(400).json('Nada Encontrado')
                    return
                }
                res.status(200).json(result)
            })
            .catch((err) =>  {
                throw new Error(err)
            })
    }

    getByState(req:any,res:any,state:string){
        const lojas = new Lojas()
        lojas.buscaPorEstado(state)
            .then((result:any) => {
                //verificando se existe control c control v do método acima
                if(Object.keys(result).length === 0 ){
                    res.status(400).json('Nada Encontrado')
                    return
                }
                res.status(200).json(result)
            })
            .catch((err) =>  {
                throw new Error(err)
            })
    }
}


export default LojaController