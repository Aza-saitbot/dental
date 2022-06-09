const uuid = require('uuid')
const path = require('path')
const {Job,JobInfo,Image,Carcass,Teeth} = require('../models/models')
const ApiError = require('../error/ApiError')
const {DataTypes} = require("sequelize");

class JobController {
    async create(req, res, next) {
        try {
            console.log('req.body', req.body)
            let {
                abatment,
                colorRestorations,
                colorTeeth,
                designCarcass,
                implants,
                intermediatePar,
                rootTab,
                shoulder,
                temporaryCrown,
                tz,
                teeth,
                carcass,
                datePicker,
            }=req.body

            const job = await Job.create({
                abatment,
                colorRestorations,
                colorTeeth,
                designCarcass,
                implants,
                intermediatePar,
                rootTab,
                shoulder,
                temporaryCrown,
                tz
            });

            if ( teeth){
                teeth = JSON.parse(teeth)
                teeth.forEach(i=>
                Teeth.create({
                    jobId:job.id,
                    numberTooth:teeth[i],
                        value:i.value
                    }
                )
                )
            }
            if ( carcass){
                 carcass = JSON.parse(carcass)
                carcass.forEach(i=>
                    Carcass.create({
                            jobId:job.id,
                            title:carcass[i],
                            value:i.value
                        }
                    )
                )
            }
            if ( datePicker){
                datePicker = JSON.parse(datePicker)
                datePicker.forEach(i=>
                    Carcass.create({
                            jobId:job.id,
                            date:i,

                        }
                    )
                )
            }

            const {files}=req.files

            if (files){
                console.log('1111111111111111files',files)

                files.forEach(f=>{
                    let fileName=uuid.v4() +".jpg"
                    f.mv(path.resolve(__dirname,'..',fileName))
                    Image.create({
                        jobId:job.id,
                        img:fileName
                    })

                    }

                )

                 res.json(job)
            }

            res.json(req.body)
            // const {img} = req.files
            // console.log('img',img)
            // let fileName = uuid.v4() + '.jpg'
            // img.mv(path.resolve(__dirname, '..', 'static', fileName))
            // const device = await Job.create({name, price, brandId, typeId, img: fileName})
            //
            // if (info) {
            //     info = JSON.parse(info)
            //     info.forEach(i =>
            //         JobInfo.create({
            //             title: i.title,
            //             description: i.description,
            //             deviceId: device.id
            //         })
            //     )
            //
            // }
            //
            // res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset})
        }
        return res.json(devices)

    }

    async getOne(req, res) {
        const {id}=req.params

        const device=await Device.findOne({
            where:{id},
            include:[{model:DeviceInfo,as:'info'}]
        })
        return res.json(device)
    }


}

module.exports = new JobController()