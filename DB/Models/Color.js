module.exports = function (sequelize, dataTypes) {
    let alias = "Color"
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
        tableName: "color",
        timestamps: false
    }

    let Color = sequelize.define(alias, cols, config)

    return Color
}