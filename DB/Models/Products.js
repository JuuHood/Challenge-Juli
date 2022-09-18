module.exports = function (sequelize, dataTypes) {
    let alias = "Product"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50)
        },
        brand_id: {
            type: dataTypes.INTEGER
        },
        material_id: {
            type: dataTypes.INTEGER
        },
        color_id: { 
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING(500)
        }
    }
    let config ={
        tableName: "products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsTo(models.Material,{
            as: "materials",
            foreignKey: "material_id"
        })

        Product.belongsTo(models.Brand,{
            as: "brands",
            foreignKey: "brand_id"
        }) 

        Product.belongsTo(models.Color,{
            as: "colors",
            foreignKey: "color_id"
        })
        Product.hasOne(models.Image,{
            as: "image",
            foreignKey: "product_id"
        })

    }
    return Product
}