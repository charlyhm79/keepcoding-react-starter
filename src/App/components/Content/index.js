import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { Home, Counter, Contact } from '../../../scenes';

const Content = () => (
  // React nos obliga a englobar las etiquetas múltiples
  // Fragment es una etiqueta "falsa" que devuelve solo el contenido
  <Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/counter" component={Counter} />
    <Route path="/contact" component={Contact} />
  </Fragment>
);

export default Content;
