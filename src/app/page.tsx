"use client";
import Configuration from "@/components/Configuration";
import { Modal } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [config, setConfig] = useState(false);

  const handleClose = () => {
    setConfig(false);
  };

  return (
    <div className="bg w-full h-screen relative">
      <div
        onClick={() => setConfig(true)}
        className="bg-white w-fit p-3 rounded-xl absolute right-3 top-3 cursor-pointer"
      >
        <Image src={"/img/menu.svg"} alt="menu" width={39} height={39} />
      </div>
      <Modal open={config} onClose={handleClose} closeAfterTransition>
        <Configuration handleClose={handleClose} />
      </Modal>
    </div>
  );
}
