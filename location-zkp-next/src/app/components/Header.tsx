"use client";

// import Pic from '../assets/logo_black.png'
// import Pic2 from '../assets/logo_white.png'
import Image from "next/image";
import React from "react";
import Link from "next/link";
// import MetamaskContext from '@/contexts/EthersContext'
// import { Button } from './ui/button'
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  // const { signer, account, connectWallet } = React.useContext(
  //   MetamaskContext,
  // ) as any

  return (
    <div className="fixed w-full h-16 bottom-0 lg:top-0 z-20 flex flex-col shadow-xl border-b-[1px] border-secondary justify-center backdrop-blur-md bg-background/15">
      <div className="w-full bg-transparent flex flex-row justify-center items-center lg:px-24 h-14">
        <Link href="/" className="h-16 flex items-center">
          {/* {useTheme().theme === 'dark' ? (
            <Image
              className='cursor-pointer h-[100%] w-auto py-2 hidden lg:inline-block'
              src={Pic2}
              width={100}
              height={100}
              alt=''
            />
          ) : (
            <Image
              className='cursor-pointer h-[100%] w-auto py-2 hidden lg:inline-block'
              src={Pic}
              width={100}
              height={100}
              alt=''
            />
          )} */}
          <p className="cursor-pointer font-semibold text-foreground mx-1 hidden lg:inline-block">
            HodlCoin
          </p>
        </Link>

        <div className="h-[100%] flex flex-row justify-center items-center lg:space-x-12">
          {/* <AvatarMenu /> */}


          <ConnectButton />

          {/* <Button onClick={connectWallet}>
            {signer
              ? 'Connected: ' +
                account?.substring(0, 5) +
                '...' +
                account?.substring(38, 42)
              : 'Connect Wallet'}
          </Button> */}
        </div>
      </div>
    </div>
  );
}
