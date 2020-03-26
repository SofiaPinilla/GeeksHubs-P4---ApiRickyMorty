'use strict';
module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('Location', {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        dimension: DataTypes.STRING
    }, {});
    Location.associate = function(models) {
        // associations can be defined here
    };
    return Location;
};