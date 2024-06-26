"use client";
import ButtonGroup from "@/components/ButtonGroup";
import Configuration from "@/components/Configuration";
import FirstFifteen from "@/components/FirstFifteen";
import LastFifteen from "@/components/LastFifteen";
import { ConfigContext } from "@/context/ConfigContext";
import { Button, Modal } from "@mui/material";
import { Sedan } from "next/font/google";
import { SetStateAction, useContext, useState } from "react";

const sedan = Sedan({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const { showNumbers, simpleBackground } = useContext(ConfigContext);
  const [config, setConfig] = useState(false);
  const [ellos, setEllos] = useState<number>(0);
  const [nos, setNos] = useState<number>(0);

  const handleClose = () => {
    setConfig(false);
  };

  const handleSubtract = (team: "ellos" | "nos") => {
    if (team === "ellos") setEllos((e) => (e === 0 ? e : e - 1));
    if (team === "nos") setNos((n) => (n === 0 ? n : n - 1));
  };

  const handleAdd = (team: "ellos" | "nos") => {
    if (ellos + 1 > 30 || nos + 1 > 30) {
      setEllos(0);
      setNos(0);
      return;
    }

    if (team === "ellos") setEllos((e) => e + 1);
    if (team === "nos") setNos((n) => n + 1);
  };

  return (
    <div
      className={`m-auto bg-zinc-700 max-w-lg w-full min-h-screen relative ${
        !simpleBackground && " bg"
      }`}
    >
      <h1
        className={
          "text-center text-[#74abdf] text-4xl font-bold pt-6 " +
          sedan.className
        }
      >
        ANOTADOR TRUCO
      </h1>
      <Modal open={config} onClose={handleClose} closeAfterTransition>
        <Configuration handleClose={handleClose} />
      </Modal>
      <div className="w-full pt-6 flex justify-around">
        <div className="bg-white px-6 py-2 rounded-xl border shadow-lg font-semibold">
          Nosotros
          {showNumbers && (
            <>
              <br />
              <p className="text-center font-lg">{nos}</p>
            </>
          )}
        </div>
        <div className="bg-white px-6 py-2 rounded-xl border shadow-lg font-semibold">
          Ellos
          {showNumbers && (
            <>
              <br />
              <p className="text-center font-lg">{ellos}</p>
            </>
          )}
        </div>
      </div>
      <div className="pt-6 flex justify-around">
        <FirstFifteen user={nos} />
        <FirstFifteen user={ellos} />
      </div>
      <div className="pt-4 flex justify-around">
        <LastFifteen user={nos} />
        <LastFifteen user={ellos} />
      </div>
      <ButtonGroup
        handleSubtract={handleSubtract}
        handleAdd={handleAdd}
        setConfig={setConfig}
      />
    </div>
  );
}
