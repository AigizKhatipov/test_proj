import { Theme, Components } from '@mui/material/styles';

const color = {
    50: 'hsl(220, 35%, 97%)',
    100: 'hsl(220, 30%, 94%)',
    200: 'hsl(220, 20%, 88%)',
    300: 'hsl(220, 20%, 80%)',
    400: 'hsl(220, 20%, 65%)',
    500: 'hsl(220, 20%, 42%)',
    600: 'hsl(220, 20%, 35%)',
    700: 'hsl(220, 20%, 25%)',
    800: 'hsl(220, 30%, 6%)',
    900: 'hsl(240, 33.30%, 2.90%)',
};

export const buttonCustomization: Components<Theme> = {
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                boxShadow: 'none',
                borderRadius: (theme || theme).shape.borderRadius,
                textTransform: 'none',
                variants: [
                    {
                        props: {
                            color: 'primary',
                            variant: 'contained',
                        },
                        style: {
                            marginTop: '4px',
                            color: 'white',
                            backgroundColor: color[900],
                            border: `1px solid ${color[700]}`,
                            borderRadius: '12px',
                            '&:hover': {
                                backgroundImage: 'none',
                                backgroundColor: color[700],
                                boxShadow: 'none',
                            },
                            '&:active': {
                                backgroundColor: color[800],
                            },
                            ...theme.applyStyles('dark', {
                                color: 'black',
                                backgroundColor: color[50],
                                border: `1px solid ${color[50]}`,
                                '&:hover': {
                                    backgroundImage: 'none',
                                    backgroundColor: color[300],
                                    boxShadow: 'none',
                                },
                                '&:active': {
                                    backgroundColor: color[400],
                                },
                            }),
                        },
                    },
                ],
            }),
        },
    },
};
