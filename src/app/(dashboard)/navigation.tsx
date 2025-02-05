import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import { type Navigation } from "@toolpad/core/AppProvider";

export const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Menú",
  },
  {
    segment: "Categorias",
    title: "Categorias",
    icon: <CategoryRoundedIcon />
    ,
  },
];
