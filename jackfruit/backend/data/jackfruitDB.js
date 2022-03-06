import bcrypt from 'bcryptjs'

export const jackfruitDB = [
    {
        name:"Aditya Uday Ubale",
        email:"adityaubale63@gmail.com",
        password:bcrypt.hashSync('AdityaUbale01@#',10),
    },
    {
        name:"Akshat Mishra",
        email:"akshatmishra63@gmail.com",
        password:bcrypt.hashSync('AkshatMishra01@#',10),
    },
    {
        name:"Gaurav Pare",
        email:"gauravpare63@gmail.com",
        password:bcrypt.hashSync('GauravPare01@#',10),
    }
]