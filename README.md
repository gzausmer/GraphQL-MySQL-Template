# GraphQL-MySQL-Template
A simple GraphQL-MySQL Node.js project to get you started quickly

This template integrates the following:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [GraphQL](http://graphql.org/)
- [GraphQL-tools](http://dev.apollodata.com/tools/graphql-tools/generate-schema.html)
- [MySQL](https://www.mysql.com/)

Instructions:

1) clone and npm install

2) ./Types/types.js: Build the tables 'Supplier' and 'Company' on your MySQL server,
or change the Types according to your own database structure.

3) ./Connectors/mysql.js: Enter your db credentials.

4) Run babel-node server.js

5) Browse to http://localhost:3000/graphql to try out your queries - enojy!
