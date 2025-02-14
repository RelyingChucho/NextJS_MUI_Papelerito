import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import { type Navigation } from "@toolpad/core/AppProvider";
import { Category, AddCategory, ListSearch, ListAdd } from "@/icons";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Menú",
  },
  {
    segment: "",
    title: "Inicio",
    icon: <HomeRoundedIcon />,
  },
  {
    kind: "page",
    segment: "Categorias",
    title: "Categorias",
    icon: <Category />,
    children: [
      {
        kind: "page",
        segment: "Registrar",
        title: "Registrar Categoria",
        icon: <AddCategory />,
      },
      {
        kind: "page",
        segment: "",
        title: "Consultar Categorias",
        icon: <ListSearch />,
      },
    ],
  },
  {
    kind: "page",
    segment: "Marcas",
    title: "Marcas",
    icon: <StoreRoundedIcon />,
    children: [
      {
        kind: "page",
        segment: "Registrar",
        title: "Registrar Marca",
        icon: <AddBusinessRoundedIcon />,
      },
      {
        kind: "page",
        segment: "",
        title: "Consultar Marcas",
        icon: <ListSearch />,
      },
    ],
  },
  {
    kind: "page",
    segment: "Productos",
    title: "Productos",
    icon: <CategoryRoundedIcon />,
    children: [
      {
        kind: "page",
        segment: "Registrar",
        title: "Registrar Productos",
        icon: <ListAdd />,
      },
      {
        kind: "page",
        segment: "",
        title: "Consultar Productos",
        icon: <ListSearch />,
      },
    ],
  },
];
