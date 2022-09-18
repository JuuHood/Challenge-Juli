const db = require("../DB/Models");
const products = require("../DB/Models/Products");

const APIcontroller = {

    //Aca va la logica//
    list : (req, res) => {
        db.Product
        .findAll({
            include: [{
                association: "brands"
            }, {
                association: "materials"
            }, {
                association: "colors"
            },  {
                association: "image"
            }
        ]
        })
            
            .then(products => {
                console.log("🚀 ~ file: APIcontroller.js ~ line 23 ~ products", products)

            	return res.status(200).json({
                	total: products.length,
                	data: products,
                	status: 200
            	})
        	})
            
        },

    show:(req,res)=>{
        db.Product
        .findByPK(req.params.id)
        .then(product=>{
            return res.status(200).json({
                data: product,
                status:200
            })
        })
    },

    store:(req,res)=>{
        db.Product
        .create(req.params.id)
        .then(products=>{
            return res.status(200).json({
                data: products,
                status:200,
                created:"ok"
            })
        })
    },

    delete:(req,res)=>{
        db.Product
        .destroy({
            where:{
                id:req.params.id
            }
    })
        .then(response=>{

            return res.json(response)
        })
    },

    listBrandProducts:(req,res)=>{
        db.Brand.findAll({
            include: [{
                association: "products"
            }]
        })
        .then(brand =>{
            return res.status(200).json({
                data: brand,
                status:200
            })
        })
    },
    lastProduct: (req, res) => {
        db.Product.findAll({
                include: [{
                    association: "brands"
                }, {
                    association: "materials"
                }, {
                    association: "colors"
                }, {
                    association: "image"
                }],
                order: [["id" ,'DESC']],
                limit: 1
            })
            .then(products =>{
                return res.status(200).json({
                    total: products.length,
                    data: products,
                    status: 200
                })
               }) 
        }
    }

module.exports = APIcontroller