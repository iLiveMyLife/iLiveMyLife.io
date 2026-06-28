import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { unregister } from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

// Service worker removed: the landing is actively iterated, so a cache-first worker
// would strand returning visitors on stale builds. Unregister any worker still in
// the browser (the self-destroying public/service-worker.js also heals old clients).
unregister();