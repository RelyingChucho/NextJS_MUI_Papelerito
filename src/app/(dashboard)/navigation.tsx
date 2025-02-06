import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import { type Navigation } from "@toolpad/core/AppProvider";
import { Category, AddCategory, ListSearch, ListAdd } from "@/icons";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

export const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Menú",
  },
  {
    segment: "Categorias",
    title: "Categorias",
    icon: <Category />,
    children: [
      {
        segment: "Registrar",
        title: "Registrar Categoria",
        icon: <AddCategory />,
      },
      {
        segment: "",
        title: "Consultar Categorias",
        icon: <ListSearch />,
      },
    ],
  },
  {
    segment: "Marcas",
    title: "Marcas",
    icon: <StoreRoundedIcon />,
    children: [
      {
        segment: "Registrar",
        title: "Registrar Marca",
        icon: <AddBusinessRoundedIcon />,
      },
      { segment: "", title: "Consultar Marcas", icon: <ListSearch /> },
    ],
  },
  {
    segment: "Productos",
    title: "Productos",
    icon: <CategoryRoundedIcon />,
    children: [
      {
        segment: "Registrar",
        title: "Registrar Productos",
        icon: <ListAdd />,
      },
      {
        segment: "",
        title: "Consultar Productos",
        icon: <ListSearch />,
      },
    ],
  },
];
