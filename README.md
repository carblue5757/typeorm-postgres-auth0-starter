# typeorm-postgres-auth0-starter

Starter repo for a node ts application using fastify, typeorm and auth0

## Build instructions

- docker-compose up --build
  - This will launch postgres db in docker
- npm start
- using postman POST http://localhost:3000/user
- using postman GET http://localhost:3000/user
  - Should see a list of all users

## References

fastify: https://medium.com/sharenowtech/fastify-with-typescript-production-ready-integration-2303318ecd9e
