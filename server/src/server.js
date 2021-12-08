import express from "express";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export function launch(port) {
  const application = express();
  const fetch = require('node-fetch');

  application.get("/", (request, response) => {
    response.json("Hello, ici le serveur");
  });

  application.get("/api/users/:username", (request, response) => {
    // const { username } = request.params
    // async const user = await.prisma.user.findUnique({where: { login: username} })
    // if(user) {
    //   console.log("il y a un user avec le bon username dans la db")
    //   // l'afficher dans notre client via les info recup de la DB
    // }
    // Step 1 - Does User exist in our Database
    //   If True  -> Retrieve from our Database
    //   If False -> Request Github API https://api.github.com/users/$USERNAME
    //            -> Store User information in our Database
    fetch('https://api.github.com/users/'+request.params.username)
          .then(res => res.json())
          .then(json => {
            response.set('Access-Control-Allow-Origin', '*')
            .json({json});
      })
    // response.json({ username: request.params.username });
  });
  
  application.listen(port, () => {
    console.log(`server started at http://192.168.0.55:${port}`);
  });
}
