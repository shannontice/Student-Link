const { DataTypes, Model } = require('sequelize');
const sequelize = require("../db/connection")

class Post extends Model { }

Post.init(
    {
        subject:{
            type:DataTypes.STRING,
            allowNull:false
        },
        subject_level:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:false
        },
        topic:{
            type:DataTypes.STRING,
            allowNull:false
        },
        post_text:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        modelName: 'post',
    }
);

module.exports = Post;