module.exports = function (sequelize, dataTypes) {
    let alias = "Material"
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
        tableName: "material",
        timestamps: false
    }

    let Material = sequelize.define(alias, cols, config)

    return Material
}