import type { Theme, Components } from '@mui/material/styles';

export const labelCustomization: Components<Theme> = {
    MuiFormLabel: {
        styleOverrides: {
            root: ({ theme }) => ({
                marginBottom: 4,
            }),
        },
    },
};
