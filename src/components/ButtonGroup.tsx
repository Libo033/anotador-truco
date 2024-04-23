import { Button } from "@mui/material";
import React from "react";

interface ButtonGroupProps {
  handleSubtract: (team: "ellos" | "nos") => void;
  handleAdd: (team: "ellos" | "nos") => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  handleAdd,
  handleSubtract,
}) => {
  return (
    <div className="flex justify-around">
      <div className="flex gap-4 mt-6">
        <Button
          onClick={() => handleSubtract("nos")}
          variant="contained"
          size="large"
        >
          -
        </Button>
        <Button
          onClick={() => handleAdd("nos")}
          variant="contained"
          size="large"
        >
          +
        </Button>
      </div>
      <div className="flex gap-4 mt-6">
        <Button
          onClick={() => handleSubtract("ellos")}
          variant="contained"
          size="large"
        >
          -
        </Button>
        <Button
          onClick={() => handleAdd("ellos")}
          variant="contained"
          size="large"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
