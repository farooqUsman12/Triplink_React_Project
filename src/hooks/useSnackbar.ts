import { useState } from 'react';

export enum SnackbarType {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
    Info = 'info',
}

export interface SnackbarOptions {
    message: string;
    type: SnackbarType;
    position: 'top' | 'right' | 'bottom' | 'left';
}

export const useSnackbar = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarOptions, setSnackbarOptions] = useState<SnackbarOptions>({
        message: '',
        type: SnackbarType.Success,
        position: 'bottom',
    });

    const showSnackbar = (options: SnackbarOptions) => {
        setSnackbarOptions(options);
        setSnackbarOpen(true);
    };

    const closeSnackbar = () => {
        setSnackbarOpen(false);
    };

    return {
        snackbarOpen,
        snackbarOptions,
        showSnackbar,
        closeSnackbar,
    };
};
