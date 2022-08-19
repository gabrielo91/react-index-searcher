# How to run it

run the following command in order to launch the kibana and elastic search services

```
docker-compose up
```

Then populate the data by using:

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

The imported data should be shown
