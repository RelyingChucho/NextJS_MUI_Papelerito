"use client";

import { TextField, TextFieldProps } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const diseño = {
  "& label.Mui-focused": {
    color: "#0d9488",
  },
  "& label": {
    color: "#0d9488",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0d9488",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0d9488",
    },
    "&:hover fieldset": {
      borderColor: "#0d9488",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0d9488",
    },
  },
  caretColor: "#0d9488",
};

type InputProps = TextFieldProps & {
  paramName?: string;
  param?: boolean;
};

export default function Input({
  paramName = "",
  param = false,
  ...props
}: InputProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState("");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  // Obtener valor inicial de los searchParams
  useEffect(() => {
    if (param) {
      const initialValue = searchParams.get(paramName) || "";
      setValue(initialValue);
    }
  }, [paramName, searchParams, param]);

  // Actualizar searchParams con debounce
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (param) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (newValue) {
          params.set(paramName, newValue);
        } else {
          params.delete(paramName);
        }

        router.replace(`?${params.toString()}`, { scroll: false });
      }, 300);
    }
  };

  return (
    <TextField {...props} value={value} onChange={handleChange} sx={diseño} />
  );
}
