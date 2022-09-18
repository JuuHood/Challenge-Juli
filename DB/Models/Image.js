module.exports = function (sequelize, dataTypes) {
    let alias = "Image"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        url : { 
            type : dataTypes.STRING(500)
        }
    }
    let config ={
        tableName: "images",
        timestamps: false
    }

    let Image = sequelize.define(alias, cols, config)

    Image.associate = function(models){
        Image.belongsTo(models.Product,{
            as: "products",
            foreignKey: "product_id"
        })

   

}
return Image
}