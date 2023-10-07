import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from "mui-tel-input";

const CustomInputPhone = (props: any) => {
    const { value, onChange, ...rest } = props;
    return (
        <MuiTelInput
            {...rest}
            value={value}
            onChange={onChange}
        />
    );
}

const InputPhone = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (value: any) => {
        setPhoneNumber(value);
    };

    return (
        <TextField
            label="Phone Number"
            className={`InputField ${phoneNumber.length > 1 ? 'phoneNumberIsValid' : 'phoneNumberIsNotValid'}`}
            InputProps={{
                inputComponent: CustomInputPhone,
                inputProps: {
                    value: phoneNumber,
                    onChange: handlePhoneNumberChange,
                },

            }}
        />
    );
}

export default InputPhone;
