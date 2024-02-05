// const { User } = require('../models/User');

// module.exports = {
//     async getAllUsers(req, res) {
//         try {
//             const users = await User.findAll()

//             res.send(users)


//         } catch (err) {
//             console.log(err)
//         }
//     },

//     async getUserByID(req, res) {
//         const user_id = req.params.id

//         try {
//             const user = await User.findOne({
//                 where: {
//                     id: user_id
//                 },
//             })

//             if (user) {
//                 return res.send(user)
//             }
//             res.send({
//                 error: 404,
//                 message: 'User not found with that ID'
//             })

//         } catch (err) {
//             console.log(err)
//         }

//     },

//     async createUser(req, res) {
//         const userData = req.body


//         try {
//             const user = await User.create(userData)


//             res.json({
//                 message: 'User added successfully!',
//                 user
//             })


//         } catch (err) {

//             const messages = err.errors.map(eObj => eObj.message);

//             return res.json({
//                 error: 401,
//                 message: messages
//             })
//         }

//     },

//     async getUserPosts(req, res) {
//         const user_id = req.query.user_id;
//         try {
//             const user = await User.findOne({
//                 where: {
//                     id: user_id
//                 },
//                 include: Post
//             });

//             if (user) {
//                 return res.json(user);
//             }
//         }
//         catch (err) {
//             console.log(err);
//         }
//     },

//     async deleteUser(req, res) {
//         const user_id = req.params.id

//         try {
//             await User.destroy({
//                 where: {
//                     id: user_id
//                 },
//             })

//             res.send({
//                 message: 'User has been deleted!'
//             })

//         } catch (err) {
//             console.log(err)
//         }
//     }
// }