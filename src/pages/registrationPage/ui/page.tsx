import { Box, Button, Card, Divider, FormControl, FormLabel, Stack, TextField, Typography } from '@mui/material';
import { ColorModeSelect } from 'widgets/theme';

export const RegistrationPage = () => {
    return (
        <Stack direction="column" sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <Card
                sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', width: '100%',  maxWidth: '450px', padding: '32px' }}
                variant="outlined"
            >
                <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
                    Регистрация
                </Typography>
                <Box
                    component="form"
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    <FormControl>
                        <FormLabel>Имя</FormLabel>
                        <TextField
                            // error={emailError}
                            // helperText={emailErrorMessage}
                            type="email"
                            name="email"
                            placeholder="имя"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            // color={emailError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Пароль</FormLabel>
                        <TextField
                            // error={passwordError}
                            // helperText={passwordErrorMessage}
                            name="password"
                            placeholder="••••••"
                            type="password"
                            autoComplete="current-password"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            // color={passwordError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        //   onClick={validateInputs}
                    >
                        Sign in
                    </Button>
                </Box>
                <Divider />
                
            </Card>
        </Stack>
    );
};
