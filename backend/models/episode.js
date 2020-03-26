'use strict';
module.exports = (sequelize, DataTypes) => {
    const Episode = sequelize.define('Episode', {
        name: {
            allowNull: false, //required
            type: DataTypes.STRING
        },
        air_date: DataTypes.STRING,
        episode: DataTypes.STRING
    }, {});
    Episode.associate = function(models) {
        // associations can be defined here
    };
    return Episode;
};