# Avec Vous - Server

A backend serving up an API for a social story-writing app.

## About

This backend app will manage a server and take in requests via the API described below. It is the backend for [the Avec Vous app](https://github.com/abbreviatedman/avec-vous-client).

## Installation and Usage

- Install MongoDB.
- Clone this repo.
- Navigate to the directory in your terminal.
- Run `npm install`.
- Run `npm run seed` if you'd like some starting users in your database.
- Run `npm start` to start the server.
- Hit up the routes below via a browser, curl, Postman, or your favorite route-hitting tool.

## Routes - MVP Version

- [x] `GET /stories`
- [ ] `GET /stories/:storyId`
- [ ] `GET /stories/:userId`
- [ ] `GET /stories/:userId/next`
- [ ] `PUT /stories/:storyId`
- [ ] `POST /stories`
- [ ] `POST /users/signup`
- [ ] `POST /users/login`
- [ ] `POST /users/logout`
- [ ] `GET /invites`
- [ ] `POST /invites`
- [ ] `DELETE /invites`

## Future Version Routes

- [ ] `GET /users/:userId`
- [ ] `GET /sentences/:userId`
- [ ] `POST /requests/:userId/:storyId`
- [ ] `PUT /removals/:storyId`
- [ ] `POST /friends`
- [ ] `GET /friends/:userId`
- [ ] `DELETE /friends/:userId`
- [ ] `GET /messages/:userId1/:userId2`
- [ ] `POST /messages/:userId1/:userId2`

## Technologies Used

- MongoDB
- Express
- Mongoose
