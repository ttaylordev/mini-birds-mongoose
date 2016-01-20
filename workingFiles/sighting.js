var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema; // we're making a schema
// we dont' do schema definition in controllers

// if you're using something more than once, it's mroe efficitent to seperate it as an other file


var sightingSchema = new Schema( {
  user: {},
  somethingElse: {},
  anotherThing: {}
} );