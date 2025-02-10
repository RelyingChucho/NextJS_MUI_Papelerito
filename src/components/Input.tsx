import { TextField, TextFieldProps } from "@mui/material";

const diseño = {
  "& label": {
    color: "#94B3F2",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#94B3F2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#94B3F2",
    },
    "&:hover fieldset": {
      borderColor: "#94B3F2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#94B3F2",
    },
  },
  caretColor: "#94B3F2",
};

export default function Input({ ...props }: TextFieldProps) {
  return <TextField {...props} sx={diseño} />;
}
