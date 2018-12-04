import * as React from 'react';
import Player from './Player';
import Overlay from './Overlay';

export default () => {
    return (
        <div className="app">
            <Player />
            <Overlay />
        </div>
    );
};