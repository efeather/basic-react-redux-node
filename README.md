# Bootstrapped Layered Architecture React/Redux/Node Application

While searching the internet for React and Node project that have a layer architecture
it became quite clear that everyone has a different idea on how the project should be layered
for both the client and the server.

This is my version of this, and is by no means the absolute perfect application layout, but it is
the way I like to layout my project.

It is also not just a layered architecture sample but also includes testing, mocking, http frameworks

## Tech Used

The following is what I used in this project.

-   React
-   Redux
-   NodeJs
-   Typescript
-   Webpack
-   Jest
    -   To test the server
-   Nock
    -   Mocking out HTTP requests on the server
-   Fetch
    -   for requests from client to the server

## Project Layout

The project is laid out in 3 main parts

### client

This is the UI part of the application that will get served by the server

### common

This is intended to contain common pieces of code that is leveraged in both
the server and the client, Models, utilities etc.

### server

This serves up client, as well as serving as an API layer than can be accessed without the UI

## Execution and Tests

-   npm run start
    -   Will build the client and server and start the application
-   npm run test
    -   Will run the jest tests on the server

Once running the following urls can be hit

### Client related

-   localhost:8080/basicapp
    -   brings up the UI
-   localhost:8080/basicapp/about
    -   displays the about screen for the application

### Server Related (API)

-   localhost:8080/basicapp/webapi
    -   displays JSON giving the overall version of the application as defined in package.json.  Must pass
    the correctauthtoken in the header.  Hardcoded in the validate token function.

## Features
