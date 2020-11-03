# simple-rooms-api
simple rooms api is basic api built for node using express

## Requirements
- node
- heroku cli
- heroku login

## Running locally
To get the server running locally use the following commands in your terminal. It will deploy to http://localhost:3000

```bash
git clone https://github.com/EvolveU-FSD/simple-rooms-api.git
cd simple-rooms-api
npm install
npm dev or npm start
```


## Deploying to heroku
Ensure you have a heroku account and have installed the heroku cli.
https://devcenter.heroku.com/articles/heroku-cli

After ensuring you can run locally issue the following commands from the root of your project.

```bash
heroku login 
heroku create
git push heroku HEAD:master
heroku open
```

Note that heroku login will open up to a browser so you can login to heroku.
