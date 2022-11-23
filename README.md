# Express Practice template

### Run following command to install the node package
- npm i
- npm init

### To start the server use following command:
- yarn start

### To get all the users information run following REST Api in browser or postman
- http://localhost:3000/api/users/
note in postman use the method as GET

### To get the single user information run following REST Api in browser or postman
- http://localhost:3000/api/users/<userID>
note in postman use the method as GET

### To create the user information run following REST Api in postman
- http://localhost:3000/api/users/
note in postman use the method as POST
Sample body can be used as:
{
    "first_name": "user",
    "last_name": "One",
    "email": "userOne@someMail.com",
    "gender": "user gender",
    "ip_address": "user ip address"
}

### To update the user information run following REST Api in postman
- http://localhost:3000/api/users/<userId>
note in postman use the method as PUT
Sample body can be used as:
{
    "first_name": "user",
    "last_name": "One",
    "email": "userOne@someMail.com",
    "gender": "user gender",
    "ip_address": "user ip address"
}

### To delete the user information run following REST Api in postman
- http://localhost:3000/api/users/<userId>
note in postman use the method as DELETE