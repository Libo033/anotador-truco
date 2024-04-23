"use client";
import Configuration from "@/components/Configuration";
import { Button, Divider, Modal } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
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
    <div className="m-auto bg max-w-lg w-full h-screen relative">
      <Modal open={config} onClose={handleClose} closeAfterTransition>
        <Configuration handleClose={handleClose} />
      </Modal>
      <div className="w-full pt-6 flex justify-around">
        <div className="bg-white px-6 py-2 rounded-xl border shadow-lg">
          Nosotros
        </div>
        <div className="bg-white px-6 py-2 rounded-xl border shadow-lg">
          Ellos
        </div>
      </div>
      <div className="pt-6 flex justify-around">
        {nos === 0 ? (
          <div className="h-[273px] pt-6 w-[72px]"></div>
        ) : (
          <div className="h-[273px] w-[72px] flex flex-col gap-4">
            {nos > 0 && (
              <Image
                src={`/img/${nos >= 5 ? "5" : nos}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
            {nos > 5 && (
              <Image
                src={`/img/${nos > 10 ? "5" : nos - 5}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
            {nos > 10 && (
              <Image
                src={`/img/${nos > 15 ? "5" : nos - 10}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
          </div>
        )}
        {ellos === 0 ? (
          <div className="h-[273px] pt-6 w-[72px]"></div>
        ) : (
          <div className="h-[273px] w-[72px] flex flex-col gap-4">
            {ellos > 0 && (
              <Image
                src={`/img/${ellos >= 5 ? "5" : ellos}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
            {ellos > 5 && (
              <Image
                src={`/img/${ellos > 10 ? "5" : ellos - 5}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
            {ellos > 10 && (
              <Image
                src={`/img/${ellos > 15 ? "5" : ellos - 10}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
          </div>
        )}
      </div>
      <div className="pt-6 flex justify-around">
        {nos === 0 ? (
          <div className="h-[273px] pt-6 w-[72px]"></div>
        ) : (
          <div className="h-[273px] w-[72px] flex flex-col gap-4">
            {nos > 15 && (
              <Image
                src={`/img/${nos > 20 ? "5" : nos - 15}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
            {nos > 20 && (
              <Image
                src={`/img/${nos > 25 ? "5" : nos - 20}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
            {nos > 25 && (
              <Image
                src={`/img/${nos - 25}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
          </div>
        )}
        {ellos === 0 ? (
          <div className="h-[273px] pt-6 w-[72px]"></div>
        ) : (
          <div className="h-[273px] w-[72px] flex flex-col gap-4">
            {ellos > 15 && (
              <Image
                src={`/img/${ellos > 20 ? "5" : ellos - 15}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
            {ellos > 20 && (
              <Image
                src={`/img/${ellos > 25 ? "5" : ellos - 20}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
            {ellos > 25 && (
              <Image
                src={`/img/${ellos - 25}.png`}
                alt=""
                width={72}
                height={72}
              />
            )}
          </div>
        )}
      </div>
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
      <div className="pt-4 px-6">
        <Button variant="contained" onClick={() => setConfig(true)} fullWidth>
          Configuracion
        </Button>
      </div>
    </div>
  );
}
