import Image from "next/image";
import React from "react";

const LastFifteen: React.FC<{ user: number }> = ({ user }) => {
  return (
    <>
      {user === 0 ? (
        <div className="h-[240px] pt-6 w-[72px]"></div>
      ) : (
        <div className="h-[240px] w-[72px] flex flex-col gap-2">
          {user > 15 && (
            <Image
              src={`/img/${user > 20 ? "5" : user - 15}.png`}
              alt=""
              width={72}
              height={72}
            />
          )}
          {user > 20 && (
            <Image
              src={`/img/${user > 25 ? "5" : user - 20}.png`}
              alt=""
              width={72}
              height={72}
            />
          )}
          {user > 25 && (
            <Image
              src={`/img/${user - 25}.png`}
              alt=""
              width={72}
              height={72}
            />
          )}
        </div>
      )}
    </>
  );
};

export default LastFifteen;
