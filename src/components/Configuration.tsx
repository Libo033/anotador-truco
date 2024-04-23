import { FormControlLabel, Switch } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ConfigProps {
  handleClose: () => void;
}

const Configuration: React.FC<ConfigProps> = ({ handleClose }) => {
  return (
    <div className="bg-white m-6 p-4 rounded-lg flex flex-col relative">
      <Image
        onClick={handleClose}
        className="absolute right-4"
        src={"/img/close.svg"}
        alt="cross"
        width={30}
        height={30}
      />
      <p className="text-2xl font-semibold border-b-2 pb-1 mb-4">
        Configuracion
      </p>
      <div>
        <div>
          <FormControlLabel
            control={<Switch />}
            label="Mostrar puntaje en numeros."
          />
        </div>
        <div>
          <FormControlLabel control={<Switch />} label="Fondo simple." />
        </div>
        <div className="mt-8 flex justify-center">
          <a
            className="text-cyan-500 font-semibold underline"
            href="https://valentinlibonat33.vercel.app/"
          >
            Mi pagina web
          </a>
        </div>
      </div>
    </div>
  );
};

export default Configuration;