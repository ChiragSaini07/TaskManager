# TaskManager
This Project is developed using nextjs, react, prisma and mongodb.
Nextjs & reactjs are used for framework and front-end.
Prisma and Mongodb provides the backend facility, with mongodb as database.

How to run the project:-
1.	In order to run application two environment files are required to connect to database and 
other to put the secret api key to start the clerk.
a.	‘prisma init –datasource-provider mongodb’  will initialize the prisma with mongodb database and will provide the .env file and prisma folder for schema and model creation.
b.	Prisma folder is already included with the code file.
c.	Only env files and connection need to be established.
d.	.env.local file need to be created manually.
e.	.env will contain the database url and .env.local will contain the secret api key.
f.	Both of these are required to be putted in the root directory.
2.	The Project will run with the command `npm run dev`.
3.	The command should be typed in the code editor Terminal OR in the command prompt of 
the root directory.
4.	The project will run on the local host port:3000.
5.	The first will be a sign-in OR signup page, facility provided by clerk.
6.	In order to proceed further you must sign-up first, with a google account else 404 error 
will occur due to no account present.
7.	Then in the later logins you can sign-in with the same account.
8.	Now the tasks can be added, edited, deleted or marked completed in the application.
