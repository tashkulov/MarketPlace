import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './app/App';
import { StoreProvider } from "./app/providers/StoreProvider";
import { ThemeProvider } from "./app/providers/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render( 
<<<<<<< HEAD
=======
    
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>
<<<<<<< HEAD
=======
    
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
);

