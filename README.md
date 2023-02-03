
# AyrBlog

Este projeto consiste na criação de uma API e um banco de dados para produção de conteúdo para um blog. Foi desenvolvido uma aplicação em Node.js usando o pacote Sequelize para fazer um CRUD de posts.

## Funcionalidades

-   Endpoints para gerenciamento de posts
-   Autenticação de usuários com relação de posts
-   Categorização de posts

## Tecnologias Utilizadas

-   JavaScript
-   Node.js
-   Sequelize
-   Docker
-   MySQL

## Instalação

1.  Clone o repositório

```bash
git clone git@github.com:pedroayresb/ayr-blog.git
```

2.  Instale as dependências
```bash
npm install 
```

3.  Execute o script de criação de tabelas
```bash
npm run db:migrate
```
4.  Inicie a aplicação
```bash
npm start
```


5. Execute o comando do docker-compose
```bash
docker-compose up -d --build
```

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

6. Execute o  docker exec.

```bash
docker exec -it blogs_api bash
```

7. Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
 ## Documentação da API

### Rotas

#### Login
##### Método HTTP: POST

Rota: /login

Exemplo de requisição:

```json

{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```

Exemplo de resposta:

```json

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

#### User

##### Método HTTP: POST
Rota: /user

Corpo da Requisição:

```json

{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  /// a imagem é opcional
}
```

Exemplo de resposta:

```json

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```

##### Método HTTP: GET
Rota: /user

Exemplo de resposta:
```json
[
  {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },

  /* ... */
]
```

##### Método HTTP: GET
Rota: /user/:id

Exemplo de resposta:
```json
 {
     "id": 1,
     "displayName": "Lewis Hamilton",
     "email": "lewishamilton@gmail.com",
     "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
 },
```

##### Método HTTP: DELETE
Rota: /user/me

Retorna 204 vazio

#### Categories
##### Método HTTP: POST
Rota: /categories

Corpo da Requisição:
```json
{
  "name": "Typescript"
}
```
Exemplo de resposta:
```json
{
  "id": 3,
  "name": "Typescript"
}
```

##### Método HTTP: GET
Rota: /categories

Exemplo de resposta:
```json
[
  {
      "id": 1,
      "name": "Inovação"
  },
  {
      "id": 2,
      "name": "Escola"
  },

  /* ... */
]
```

#### Post
##### Método HTTP: POST
Rota: /post

Corpo da Requisição:
```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```
Exemplo de resposta:
```json
{
  "id": 3,
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 1,
  "updated": "2022-05-18T18:00:01.196Z",
  "published": "2022-05-18T18:00:01.196Z"
}
```

##### Método HTTP: GET
Rota: /post

Exemplo de resposta:
```json
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  },
  
  /* ... */
]
```

##### Método HTTP: GET
Rota: /post/:id

Exemplo de resposta:
```json
{
  "id": 1,
  "title": "Post do Ano",
  "content": "Melhor post do ano",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
      {
          "id": 1,
          "name": "Inovação"
      }
  ]
```

##### Método HTTP: GET
Rota: /post/search?q=:

Exemplo de resposta:
```json
// GET /post/search?q=Vamos que vamos
[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
```

##### Método HTTP: PUT
Rota: /post/:id

Corpo da Requisição:
```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```

Exemplo de resposta:
```json
{
  "id": 3,
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 1,
  "published": "2022-05-18T18:00:01.000Z",
  "updated": "2022-05-18T18:07:32.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    },
    {
      "id": 2,
      "name": "Escola"
    }
  ]
}
```

##### Método HTTP: DELETE
Rota: /post/:id

Retorna status `204` vazio


## Contribuição

Contribuições são sempre bem-vindas. Para contribuir, basta abrir uma nova issue ou enviar uma pull request.
