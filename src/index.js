import React from 'react';
import ReactDOM from 'react-dom';
import YouTubeGallery from './containers/youtube-gallery';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';

ReactDOM.render(<YouTubeGallery />, document.getElementById('root'));
registerServiceWorker();
