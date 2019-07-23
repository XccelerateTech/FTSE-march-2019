To use this application -

Clone the files into your local machine, npm install
Then create a .env

Log into developers.facebook, register an the application, then supply the Facebook_App_ID and a Facebook_Client_Secret.

Now ensure you're connected to redis - we use it as a store so it is very important!

cd into this directory and run nodemon index.js


Sample ENV

FACEBOOK_ID=611823082537832
FACEBOOK_CLIENT_SECRET=35cdc1882e828312b3830e0a28c0cb86
CHATROOM_NAME=mychatroom


