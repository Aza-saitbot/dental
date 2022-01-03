const Router=require('express')
const router=new Router()
const deviceRouter=require('./deviceRouter')
const userRouterRouter=require('./userRouter')
const brandRouter=require('./brandRouter')
const typeRouter=require('./typeRouter')

router.use('/user',userRouterRouter)
router.use('/type',typeRouter)
router.use('/brand',brandRouter)
router.use('/device',deviceRouter)

module.exports=router