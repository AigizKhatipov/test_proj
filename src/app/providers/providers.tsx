import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux'
import type { FC, ReactNode } from 'react';
import { AppTheme } from 'widgets/appTheme';
import store from 'app/store';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <AppTheme>
                    <CssBaseline enableColorScheme />
                    {children}
                </AppTheme>
            </Provider>
        </>
    );
};
