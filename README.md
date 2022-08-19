# How to set it up

run the following command in order to launch the kibana and elastic search services

```
docker-compose up
```

Then populate the data going to server folder and using:

```
node importData.js
```

In order to make sure this process was successful, visit:

```
http://localhost:5601/app/dev_tools#/console
```

and there, type:

```
GET /users/_search
```

The imported data should be shown.

## How to run it

you just need to run the following commands:

- in the client folder

```
npm run start
```

and

in the server folder

```
npm run start
```

then go to:

`http://localhost:3000/`
