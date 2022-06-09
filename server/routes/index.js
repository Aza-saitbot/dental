const Router=require('express')
const router=new Router()
const jobRouter=require('./jobRouter')
const userRouterRouter=require('./userRouter')
// const brandRouter=require('./brandRouter')
// const typeRouter=require('./typeRouter')

router.use('/user',userRouterRouter)
// router.use('/type',typeRouter)
// router.use('/brand',brandRouter)
router.use('/job',jobRouter)

module.exports=router