import express from "express";
import cors from "cors"
import { PrismaClient } from '@prisma/client'
const fetch = require('node-fetch');

const fetchUser = async (username) => {
  const user = await fetch(`https://api.github.com/users/${username}`);
  console.log('jai fetch')
  return await user.json()
};

export function launch(port) {
  const prisma = new PrismaClient()
  const application = express();
  application.use(express.json())
  application.use(cors())
  
  application.get("/", (request, response) => {
    response.json("Hello, ici le serveur : utilisez /users/votre_login pour accéder à l'api github ! :) ");
  });

  application.get("/users/:username", async (request, response) => {
    const { username } = request.params

    let user = await prisma.user.findUnique({where: { login: username} })

    if(user) {
      console.log("il y'a un user avec le bon username dans la db")
      response.json({ data: { user } })
    }
    user = await fetchUser(username)
      console.log(user)
      for(const key in user) {
        if(user[key] === null){
          user[key] = ''
        }
        if(user[key] === true){
          user[key] = true
        }
        if(user[key] === false){
          user[key] = false
        }
      }
    await prisma.user.create({data : user})
    response.json({ data: { user } })

  });
  
  application.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}
