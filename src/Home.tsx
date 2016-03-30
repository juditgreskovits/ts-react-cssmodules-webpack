declare var require: any

import * as React from 'react';
const styles = require('./style.css');

export default class Home extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
      console.log('styles = ', styles);
        return  <div>
                    <h1 className={styles.red}>App</h1>
                </div>;
    }
};
