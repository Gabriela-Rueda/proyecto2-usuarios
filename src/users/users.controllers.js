const { use } = require("chai");

const usersDB =  [];
let baseId= 1;

const findAllUsers = async () =>{
    return await usersDB
}

const findUserById = async (id)=>{
    const findUser = await usersDB.find(user=>user.id===id)
      return findUser;
}

const createUser = async (userObj) =>{
 const newUser={
    id: baseId++,
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email:userObj.email,
    password: userObj.password,
    age:userObj.age
 }

 await usersDB.push(newUser)

 return newUser
}

module.exports={
findAllUsers,
findUserById,
createUser
}