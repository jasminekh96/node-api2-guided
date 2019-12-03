# Routing Notes 

## Terminology 

Separation of Concerns answers _"who should be doing this?"_

## Routing 

- use it to breakup an application/api into sub applications 
- picking the code to execute based on URL and HTTP Method
- used for managing sub resources (the comments on a blog post)


To fix `listen EADDRINUE: address already in use :::4000` run the api on another port or close your other server. Use `crtl + c` to stop a running server on a terminal. 

Error `server.listen is not a function`, check that the server is exported correctly (mind the `s` in `exports`), also check tthat the import (`require`) for the server is correct 


_as sort of a sanity test, it would  be safe to say because of server.use("/api/hubs", hubsRouter);  inside our server.js, all of our routes inside hubs-router.js will have "/api/hubs" in front of it, almost like how we set our baseURL in axiosWithAuth, yes?_ Yes! 

Type Error: Cannot read property 'use' of undefine. Make sure that whatever is to the left of '.use' is defined. 


{ [Error: SQLITE_CONSTRAINT: UNIQUE constraint failed: hubs.name] errno: 19, code: 'SQLITE_CONSTRAINT' }
- This means we're trying to create a new hub with a name of an existing hub. Pick a new name. 

# Query String Parameters 

The client can sed data to the server inside: 
- body 
- URL parameters
- query string parameters (part of the URL)
- ? (headers)

