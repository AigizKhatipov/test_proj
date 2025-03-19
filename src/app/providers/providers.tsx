import { CssBaseline } from '@mui/material';
import type { FC, ReactNode } from 'react';
import { AppTheme } from 'widgets/appTheme';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <AppTheme >
                <CssBaseline enableColorScheme />
                {children}
            </AppTheme>
        </>
    );
};
