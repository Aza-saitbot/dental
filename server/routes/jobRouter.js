const Router=require('express')
const router=new Router()
const jobController=require('../controllers/jobController')

router.post('/',jobController.create)
router.get('/',jobController.getAll)
router.get('/:id',jobController.getOne)

module.exports=router