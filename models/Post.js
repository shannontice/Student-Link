const { DataTypes, Model } = require('sequelize');
const sequelize = require("../db/connection")

class Post extends model { }

Post.init(
    {
        subject:{
            type:dataType.String,
            allowNull:false,
        },
        subject_level:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:false
        },
        topic:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        post_text:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    }
);

module.exports = Post;