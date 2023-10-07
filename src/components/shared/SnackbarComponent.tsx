import React, {SyntheticEvent} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useSnackbar, SnackbarType } from '@/src/hooks/useSnackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarComponent = () => {
    const { snackbarOpen, snackbarOptions, closeSnackbar } = useSnackbar();

    const handleClose = (event: Event | SyntheticEvent<any, Event>, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        closeSnackbar();
    };

    return (
        <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000} // Adjust the duration as needed
            onClose={handleClose}
            anchorOrigin={{
                vertical: snackbarOptions.position === 'top' || snackbarOptions.position === 'bottom' ? snackbarOptions.position : 'bottom',
                horizontal: snackbarOptions.position === 'left' || snackbarOptions.position === 'right' ? snackbarOptions.position : 'right',
            }}
        >
            <Alert
                severity={snackbarOptions.type}
                onClose={handleClose}
                sx={{ width: '100%' }}
            >
                {snackbarOptions.message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarComponent;
