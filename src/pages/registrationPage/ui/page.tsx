import { Divider, Stack } from '@mui/material';
import { SignUp } from 'features/auth';
import { ColorModeSelect } from 'widgets/theme';

export const RegistrationPage = () => {
    return (
        <Stack direction="column" sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <SignUp />
            <Divider />
        </Stack>
    );
};
