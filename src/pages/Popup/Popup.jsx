import React from 'react';

import Greetings from '../../containers/Greetings/Greetings';
import Reloader from '../../containers/Reloader/Reloader';
import './Popup.css';

const Popup = () => {
  return (
    <div className='App'>
      {process.env.NODE_ENV === 'development' && <Reloader />}
      <header className='App-header'>
        <Greetings />
      </header>
    </div>
  );
};

export default Popup;
