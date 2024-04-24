import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    arg: Palette["primary"];
  }

  interface PaletteOptions {
    arg?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include a salmon option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    arg: true;
  }
}

interface ButtonGroupProps {
  handleSubtract: (team: "ellos" | "nos") => void;
  handleAdd: (team: "ellos" | "nos") => void;
  setConfig: React.Dispatch<React.SetStateAction<boolean>>;
}

const theme = createTheme({
  palette: {
    arg: {
      main: "#74abdf",
      light: "#12abdf",
      dark: "#74abdf",
      contrastText: "#ffffff",
    },
  },
});

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  handleAdd,
  handleSubtract,
  setConfig,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-around">
        <div className="flex gap-4 mt-6">
          <Button
            color="arg"
            onClick={() => handleSubtract("nos")}
            variant="contained"
            size="large"
          >
            -
          </Button>
          <Button
            color="arg"
            onClick={() => handleAdd("nos")}
            variant="contained"
            size="large"
          >
            +
          </Button>
        </div>
        <div className="flex gap-4 mt-6">
          <Button
            color="arg"
            onClick={() => handleSubtract("ellos")}
            variant="contained"
            size="large"
          >
            -
          </Button>
          <Button
            color="arg"
            onClick={() => handleAdd("ellos")}
            variant="contained"
            size="large"
          >
            +
          </Button>
        </div>
      </div>
      <div className="pt-4 px-6 pb-6">
        <Button
          color="arg"
          variant="contained"
          onClick={() => setConfig(true)}
          fullWidth
        >
          Configuracion
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default ButtonGroup;
