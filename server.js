var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'node_modules' )));
app.use( bp.json() );
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
