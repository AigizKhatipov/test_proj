import { Box, Button, Card, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ username, password });
    };

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                width: '100%',
                maxWidth: '450px',
                padding: '32px',
            }}
            variant="outlined"
        >
            <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
                Регистрация
            </Typography>
            <Box
                component="form"
                noValidate
                sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
                onSubmit={handleSubmit}
            >
                <FormControl>
                    <FormLabel>Имя</FormLabel>
                    <TextField
                        type="email"
                        name="email"
                        placeholder="email"
                        autoComplete="email"
                        required
                        fullWidth
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Пароль</FormLabel>
                    <TextField
                        name="password"
                        placeholder="••••••"
                        type="password"
                        autoComplete="current-password"
                        required
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" fullWidth variant="contained">
                    Регистрация
                </Button>
            </Box>
        </Card>
    );
};
