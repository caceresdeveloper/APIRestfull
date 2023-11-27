module.exports = {
    findAll : async(req,res)=>{
        try {
            const data = [{"id":123,"name":"diego"},{"id":3455,"name":"vin"}]
            return  res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },

    //.body cuando enviamos datos como un json
    //.params
    findById : async(req,res) =>{
        const {id} = req.params
        console.log(`id=${id}`)
        try {
            return  res.status(200).json({"state":true,"data":id})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },
    save : async(req,res)=>{
        const {id,name,credit} = req.body
        const data = {"idcurso":id,"nameCurso":name,"credits":credit}

        try {
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },
    update : async(req,res)=>{
        const {id,name,credit} = req.body
        const data = {"id":id,"nombre":name,"creditos":credit}
        console.log(data)
        try {
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    }
}

//se creran las funcione para las llamada 