import React, { useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

<<<<<<< HEAD
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

=======
const defaultTheme=localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme||Theme.LIGHT;
>>>>>>> 46824f00109fcc4a3266d54303d7ebca15a53a3b
const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    
    const value = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;