# simple_nodejs_jwt_api_backend

A simple NodeJS app as a backend with a few APIs and JWT authentication

(_this project is only for serving some simple APIs with JWT authentication_)

Starts on **port 3100**

 #### implemented APIS:
|  api url            | method | description                                                       |
|---------------------|--------|-------------------------------------------------------------------|
| "/api/tips/regular" |   get  | getting regular tips list as a json. no authentication required.  |
| "/api/tips/special" |   get  | getting regular tips list as a json. JWT **x-access-token** required.   |
| "/api/auth"         |  post  | to get JWT access token. **name** and **password** is required.           |

 
-------


The static defined name and password:

|  Name   | Password |                                                       
|---------|----------|
|  ali    |   ali    | 
| example |  qwerty  | 


---------

This repository is only contain the frontend part.

The frontend part of this app (a simple ReactJS app) located 
[HERE](https://github.com/bodaghialib4/simple_react_jwt_app).


-------


This project implemented according to below Tutorial

[link to the tutorial](https://codesource.io/setting-up-react-authentication-using-jwt/)
