# This is the  5th iteration of a NEPS Server.

## Errata

I wanted a license free server that used a structured data, no-sql solutions are off the table. The project needs web server, NodeJS with Express seemed to work nicely. Sequelize will help us keep our database and project data structures in line. Passport.js can handle security and Vue.js is a nice pattern for frontend development.  

mjhea0 at Github had a nice Node, Postgres and [Sequelize](http://docs.sequelizejs.com/manual/installation/getting-started.html) repo I cloned. I replaced the front end and added PassPort.

[Blog About Repo](https://mherman.org/blog/node-postgres-sequelize/), the orginal.

[Some guy reworked the repro](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-creating-todos) and I've been using it for some tips and tweak.

## Help
##### Postgre SQL connection:
connection strings, if you will.... Are stored in the server/config/config.json file.

##### How to create model:
  sequelize will generate our models and migrations. from a command prompt type soemthing like this.

  ~/NEPS_V/server$ ../node_modules/.bin/sequelize model:create --name item --attributes "id:integer, title:string, complete:boolean,UserId:integer"
  Break this down a bit.                       //Table Name            //ColumnName:DataType

  Now that we've created the models and migrations in our project lets sync them with postres. This will create our tables and what not.

  ~/NEPS_V/server$ ../node_modules/.bin/sequelize db:migrate

##### How to start the project:
  npm start


Grab the step 2 Git Repo. It seems to contain most of what you'll need. AXE Angular and replace with Vue.js.
From there look at adding passport.js and the required authentication components.

https://github.com/mjhea0/node-postgres-todo

12/27/18
Second repro
