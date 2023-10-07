import { TextField } from "@mui/material";


interface IInputField {
    label: string;
}

const InputField = ({
    label
}: IInputField) => {

    return (
        <TextField
            className="InputField"
            id="outlined-basic"
            label={label}
            variant="outlined"
        />
    );
}

export default InputField;