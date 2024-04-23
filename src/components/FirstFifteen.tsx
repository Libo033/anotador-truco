import Image from "next/image";
import React from "react";

const FirstFifteen: React.FC<{ user: number }> = ({ user }) => {
  return (
    <>
      {user === 0 ? (
        <div className="h-[240px] pt-6 w-[72px]"></div>
      ) : (
        <div className="h-[240px] w-[72px] flex flex-col gap-2">
          {user > 0 && (
            <Image
              src={`/img/${user >= 5 ? "5" : user}.png`}
              alt=""
              width={72}
              height={72}
            />
          )}
          {user > 5 && (
            <Image
              src={`/img/${user > 10 ? "5" : user - 5}.png`}
              alt=""
              width={72}
              height={72}
            />
          )}
          {user > 10 && (
            <Image
              src={`/img/${user > 15 ? "5" : user - 10}.png`}
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

export default FirstFifteen;
