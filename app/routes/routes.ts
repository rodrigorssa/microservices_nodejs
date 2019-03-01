import LojaController from '../controllers/lojaController'

export default (app:any) => {
    app.get('/',(req:any,res:any) => {
        res.send('funcionando!')
    })

    app.post('/lojas',(req:any,res:any)=>{

        //instanciando objeto Controller e passando os dados de request e response
        let lojaController = new LojaController();
            lojaController.post(req,res)
    })
}