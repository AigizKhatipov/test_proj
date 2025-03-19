import type { Theme, Components } from '@mui/material/styles';

export const TextFielCustomization: Components<Theme> = {
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: 0,
            },
            root: () => ({
                padding: '8px 12px',
                borderRadius: '12px'
            }),
            
        },
    },
};
