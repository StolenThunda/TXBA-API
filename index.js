import express from 'express';
import lib from './lib.js';
const port = 5900
const app = express()
const txba = new lib()


app.get(
  '/',
  /**
   * Index page 
   * @param {*} _req 
   * @param {*} res 
   * @returns {obj} notifications
   */
  async ( _req, res ) =>
    res.json( await txba.getNotifications() )
)

app.get( '/favorites', async ( _req, res ) =>
  res.json( await txba.getFavs() )
)

app.get( '/defaultSearchEntries', async ( _req, res ) =>
  res.json( await txba.getDefaultSearchEntries() )
)

app.get( '/segment/:id', async ( req, res ) =>
  res.json( await txba.getSegment( req.params.id ) )
)

app.get( '/package/:id', async ( req, res ) =>
  res.json( await txba.getPackage( req.params.id ) )
)

app.get( '/package/:id/:segmentId', async ( req, res ) =>
  res.json( await txba.getSegment( req.params.segmentId ) )
)

app.get( '/txba',( _req, res ) => 
  res.json(Reflect.ownKeys(txba))
)

app.get( '/api', ( req, res ) => {
  const routes = []
  app._router.stack.forEach( ( r ) => {
    const objRoute = {}
    if ( r?.route?.path ) {
      objRoute['path'] = r.route.path
      if ( r?.keys.length ) objRoute['params'] = r.keys
      routes.push( objRoute )
    }  
  })
  res.json( routes )
  // res.json(app._router.stack)
})
app.listen( port, () => console.log( `listening on port: ${port}` ) )