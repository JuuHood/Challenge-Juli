module.exports = function (sequelize, dataTypes) {
    let alias = "Brand"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50)
        }
    }
    let config ={
        tableName: "brand",
        timestamps: false
    }

    let brand = sequelize.define(alias, cols, config)
    brand.associate = function(models){
        brand.hasMany(models.Product,{
            as: "products",
            foreignKey: "brand_id"
        })
 
    }
 
    

    return brand
}