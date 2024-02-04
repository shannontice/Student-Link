const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connection');

const Post= require('./Post');

// Make model for our user table so that sequilize will create it
class User extends Model {
    toJSON() {
        const user = Object.assign({}, this.get());

        delete user.password;

        return user;
    }
}

// Model to interact with table
User.init(
    {
        username:{
            type: DataTypes.STRING,
            allowNull: false, 
            unique: {
                args:true,
                message: 'That user name already exists.'
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: {
                args: true,
                message: 'A user with that email already exists.'
            },
            validate: {
                isEmail: {
                    args: true,
                    message: 'You must provide a valid email address.'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 6,
                    message: 'Password must be at least 6 characters.'
                }
            }
        }

    },
    {
        sequelize,
        modelName: 'user',
    }
);

User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;