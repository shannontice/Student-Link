// models/User.js
const { DataTypes, Model } = require('sequelize');
const validator = require('validator'); // Add this line
const sequelize = require('../db/connection');
const Post = require('./Post');
const {hash, compare} = require('bcrypt');

class User extends Model {
    toJSON() {
        const user = Object.assign({}, this.get());
        delete user.password;
        return user;
    }

    async validatePass(formPassword) {
        const is_valid = await compare(formPassword, this.password);

        return is_valid;
    }
 }


User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                message: 'That username already exists.'
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
                isEmail(value) {
                    if (!validator.isEmail(value)) {
                        throw new Error('Invalid email address');
                    }
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
        hooks: {
            async beforeCreate(user) {
                user.password = await hash(user.password, 10);

                return user;
            }
        }
    }
);

User.hasMany(Post);
Post.belongsTo(User);

module.exports = User;