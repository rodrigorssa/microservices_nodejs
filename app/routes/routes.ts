import LojaController from '../controllers/lojaController'

export default (app:any) => {
    app.get('/',(req:any,res:any) => {
        res.send('funcionando!')
    })

    app.post('/lojas',(req:any,res:any)=>{
        let loja:any = req.body
        let lojaController = new LojaController();
            lojaController.post(loja,res)
    })
}