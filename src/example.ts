import {Container} from '../lib/di'
import {Flickr} from './Flickr'

var flickr = Container.get(Flickr);
flickr.search('dogs');

// validate singleton
console.log(flickr.http === flickr.http2);
