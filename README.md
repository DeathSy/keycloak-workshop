# Keycloak Workshop


### To go along with us you'll need
- [docker](https://docs.docker.com/get-docker/)
- [node v12 or above](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) or npm


## Get Started
To spin up keycloak run following command
```sh
$ docker compose up
```
The you will find keycloak running on port 8080

To start api application, first go to api directory then run the following command
```sh
$ yarn dev
```
To start frontend application, first go to frontend directory then run the following command
```sh
$ yarn start
```