const express = require( 'express' );
const bodyParser = require( 'body-parser' );
// const massive = require( 'massive' );
const app = express();

app.use( bodyParser.json() );

require( 'dotenv' ).config();
// massive( process.env.DATABASE_URL )
// .then( db =>{ app.set( 'db', db )})
// .catch( err =>{ console.log( err )});

// const port = process.env.SERVER_PORT;
const port = 4000;

app.listen( port, () => { console.log( `Listening on port ${port}.` )})