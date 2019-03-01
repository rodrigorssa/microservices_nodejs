import LojaController from '../controllers/lojaController'

export default (app:any) => {
    app.get('/',(req:any,res:any) => {
        res.send('funcionando!')
    })

    app.get('/lojas/:estado/:cidade',(req:any,res:any) => {

        let params = req.params
        let lojaController = new LojaController()
            lojaController.getAll(req,res,params)

    })
 
    app.post('/lojas',(req:any,res:any) => {

        //instanciando objeto Controller e passando os dados de request e response
        let lojaController = new LojaController();
            lojaController.post(req,res)
    })
}