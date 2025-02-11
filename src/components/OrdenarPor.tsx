"use client";

import React, { useState } from "react";
import InputLabel, { InputLabelProps } from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter } from "next/navigation";

// Define el tipo para cada opción del select
export type Option = {
  value: string | number;
  label: string;
  /** 
   * Propiedad que se usará como clave del search param cuando se seleccione esta opción.
   */
  param: string;
};

// Define los props del componente genérico.
// Se extiende de InputLabelProps para poder pasar props al InputLabel.
type GenericSelectProps = InputLabelProps & {
  label: string; // Texto que se muestra en el label
  options: Option[]; // Arreglo de opciones, cada una con value, label y param
  value?: string | number; // Valor controlado (opcional)
  onChange?: (value: string | number) => void; // Callback cuando cambia el valor
  formControlSx?: object; // Estilos adicionales para FormControl (opcional)
  selectProps?: object; // Props adicionales para Select (opcional)
  /**
   * Si se establece en true, el select actualizará el search param usando la propiedad `param` de la opción seleccionada.
   */
  param?: boolean;
};

// Componente Select genérico y reutilizable
export default function CustomSelect({
  label,
  options,
  value: propValue,
  onChange,
  formControlSx,
  selectProps,
  param,
  ...props
}: GenericSelectProps) {
  const router = useRouter();
  // Si no se provee un valor controlado, usamos estado interno.
  const [internalValue, setInternalValue] = useState<string | number>("");
  const selectedValue = propValue !== undefined ? propValue : internalValue;

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    const newValue = event.target.value;
    if (propValue === undefined) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
    // Si se ha pasado el prop "param", actualizamos el search param en la URL.
    if (param) {
      // Buscamos la opción seleccionada para obtener su propiedad "param"
      const selectedOption = options.find((option) => option.value === newValue);
      if (selectedOption) {
        const key = selectedOption.param;
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set(key, newValue.toString());
        // Actualizamos la URL sin recargar la página.
        router.push(
          currentUrl.pathname + "?" + currentUrl.searchParams.toString()
        );
      }
    }
  };

  return (
    <FormControl
      className="w-64"
      sx={{
        "& label": {
          color: "#0d9488",
        },
        "& label.Mui-focused": {
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
        ...formControlSx,
      }}
    >
      <InputLabel {...props}>{label}</InputLabel>
      <Select
        value={selectedValue}
        label={label}
        onChange={handleChange}
        {...selectProps}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
