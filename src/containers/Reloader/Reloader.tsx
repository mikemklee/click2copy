import React from 'react';
import { VscDebugRestart } from 'react-icons/vsc';

import './Reloader.scss';

const Reloader = () => {
  return (
    <div
      className='reloader'
      title='Reload chrome runtime'
      onClick={() => chrome.runtime.reload()}
    >
      <VscDebugRestart />
    </div>
  );
};

export default Reloader;
