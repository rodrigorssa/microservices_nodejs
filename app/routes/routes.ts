import Lojas from '../models/Lojas'

export default (app:any) => {
    app.get('/',(req:any,res:any) => {
        res.send('funcionando!')
    })

    app.post('/lojas',(req:any,res:any)=>{
        let loja:JSON = req.body
        let lojas = new Lojas()
        lojas.salva(loja)
            .then((result)=> res.status(201).json(result))
            .catch((err) => new Error(err))
    })
}