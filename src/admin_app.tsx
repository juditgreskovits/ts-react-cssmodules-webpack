import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './Home';
import {SECRET} from './secret';

ReactDOM.render(<Home extra={SECRET}/>, document.getElementById("root"));
