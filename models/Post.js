const { DataTypes, Model } = require('sequelize');
const sequelize = require("../db/connection")

class Post extends Model { }

Post.init(
    {
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        subject:{
            type:DataTypes.STRING,
            allowNull:false
        },
        subject_level:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:false
        },
        post_text:{
            type:DataTypes.STRING,
            allowNull:false
        },
        meeting_info: {
            type:DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'post',
    }
);

module.exports = Post;