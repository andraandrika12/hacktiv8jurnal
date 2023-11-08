# Branded Things API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /post`
- `GET /post`
- `DELETE /post/:id`

- `GET /tag`
- `GET /user/:id`
- `GET /userProfile/:id`
- `POST /userProfile`
- `PUT /userProfile/:id`

&nbsp;

## POST /register

Description:

Register new user

Request:

- headers:

```json
{
    "access_token"
}
```

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Email <email> has been created`"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required!"
}
OR
{
  "message": "Email format is invalid"
}
OR
{
  "message": "Email already registered"
}
OR
{
  "message": "Password required!"
}
OR
{
  "message": "Password at least 5 character"
}
```

_Response (500 - Internal server error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## POST /login

Description:

login existed user

Request:

- headers:

```json
{
    "access_token"
}
```

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - Ok)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Invalid email or password"
}
```

_Response (500 - Internal server error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## GET /post

Description:

fetch all post on social media

Request:

- headers:

```json
{
    "access_token"
}
```

- body:

```json
{
  "title": "string",
  "content": "string",
  "imgUrl": "text",
  "UserId": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
    "title": "masalah hati",
    "content": "aku lagi galau",
    "imgUrl": "https://riliv.co/rilivstory/wp-content/uploads/2019/01/pexels-mikotoraw-photographer-3367850-1-scaled.jpg",
    "UserId": 1
  },
  "..."
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

## POST /post

Description:

add post on social media

Request:

- headers:

```json
{
    "access_token"
}
```

- body:

```json
[
  {
    "title": "string",
    "content": "string",
    "imgUrl": "text",
    "UserId": "integer"
  }
]
```

_Response (201 - Created)_

```json
[
  {
    "title": "masalah hati",
    "content": "aku lagi galau",
    "imgUrl": "https://riliv.co/rilivstory/wp-content/uploads/2019/01/pexels-mikotoraw-photographer-3367850-1-scaled.jpg",
    "UserId": 1
  }
]
```

_Response (400 - Bad Request)_

```json
{
  "message": "Validation error"
}
```

_Response (500 - Internal server error)_

```json
{
  "message": "Internal server error"
}
```

&nbsp;

## DELETE /products/:id

Description:

- Delete post by id

Request:

- headers:

```json
{
    "access_token"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Post <content> success to delete"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "not found"
}
```

_Response (500 - Internal server error)_

```json
{
  "message": "Internal server error"
}
```

## GET /tag

Description:

fetch all tag

Request:

- headers:

```json
{
    "access_token"
}
```

- body:

```json
[
  {
    "tagName": "string"
  }
]
```

_Response (200 - OK)_

```json
[
  {
    "id": 1,
    "tagName": "Sports",
    "createdAt": "2023-09-26T10:47:46.245Z",
    "updatedAt": "2023-09-26T10:47:46.245Z"
  },
  "..."
]
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

## GET /user/:id

Description:

- Get user from database by Id

Request:

- headers:

```json
{
    "access_token"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
    "id": 1,
    "username": "andraofficial",
    "email": "andraandrika12@gmail.com",
    "password": "$2a$10$iTETE9gaa6Ze4olh1z39KezfcS6hoAgeQieS.4gAP1EKK9xJLNuAO",
    "phoneNumber": "082362013606",
    "address": "surabaya",
    "createdAt": "2023-09-28T07:51:46.654Z",
    "updatedAt": "2023-09-28T07:51:46.654Z"
}
```

_Response (404 - not found)_

```json
{
  "message": "not found"
}
```

&nbsp;

## GET /userProfile/:id

Description:

- Get User Profile from database by Id

Request:

- headers:

```json
{
    "access_token"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
    "id": 1,
    "firstName": "Andra",
    "lastName": "Andrika",
    "gender": "Male",
    "dateOfBirth": "1997-12-11T17:00:00.000Z",
    "profilePicture": "https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/grid/original/5798_posting-di-medsos.png",
    "UserId": 1,
    "createdAt": "2023-09-28T07:51:46.663Z",
    "updatedAt": "2023-09-28T07:51:46.663Z"
}
```

_Response (404 - not found)_

```json
{
  "message": "not found"
}
```

&nbsp;

## GET /userProfile

Description:

- Post User Profile 

Request:

- headers:

```json
{
    "access_token"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
    "message": "userProfile with <firstName> created"
}
```

_Response (404 - not found)_

```json
{
  "message": "not found"
}
```
&nbsp;

## PUT /userProfile/:id

Description:

- change User Profile by Id

Request:

- headers:

```json
{
    "access_token"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
    "message": "userProfile with 2 updated"
}
```

_Response (404 - not found)_

```json
{
  "message": "not found"
}
```
&nbsp;