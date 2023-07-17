"use client"
import { useEffect, useState } from 'react'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Layout = ({children, home}) => {

    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        // Function to update the time
        function getYear() {
          const date = new Date(); // Create a new Date object with the current time
    
          //get current yeaar
            const year = date.getFullYear()
          // Update the currentTime state with the formatted time
          setCurrentYear(year);
        }
    
        // Update the time immediately
        getYear();
    
        //
        
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
      }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="ashanti an art market place"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title"  />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
      
  <nav className="flex flex-row gap-8 items-center mb-10 mx-16">
    <div className="text-5xl font-['Inter'] font-bold text-white mr-16 w-32 shrink-0">
      Log0
    </div>
    <div className="border-solid border-[#d9f3dd] flex flex-row justify-between mr-16 w-1/2 h-12 items-center pl-8 pr-6 border rounded-lg">
      <div className="whitespace-nowrap text-xl font-['Inter'] text-[#d5dad7] w-56 shrink-0">
        Search for afrikan vibes
      </div>
      <img
        src="https://file.rendit.io/n/WhZfQ1kaniQaji7VsTrT.svg"
        className="min-h-0 min-w-0 w-8 shrink-0"
      />
    </div>
    <Link href="./signup" className="text-lg font-['Inter'] text-[#d5dad7] mr-6 w-8 shrink-0">
      Buy
    </Link>
    <Link href="./signup"  className="text-lg font-['Inter'] text-[#d5dad7] mr-16 w-8 shrink-0">
      Sell
    </Link>
    <Link href= "./login"className="text-lg font-['Inter'] text-[#d5dad7] w-12 shrink-0">
      Login
    </Link>
    <Link href="./signup" className="whitespace-nowrap text-lg font-['Inter'] text-[#d5dad7] w-32 shrink-0">
      Create Account
    </Link>
  </nav>
      </header>
      <main>{children}</main>
      

      <footer>

       <div className="overflow-hidden bg-[#2a2a2a] flex flex-col justify-end gap-3 h-[432px] shrink-0 items-start py-6">
    <div className="self-stretch flex flex-row gap-5 items-center ml-24 mr-[407px]">
      <div className="text-3xl font-['Rubik'] font-semibold text-white mr-56 w-20 shrink-0">
        Logo
      </div>
      <div className="text-3xl font-['Rubik'] font-semibold text-white w-48 shrink-0">
        Marketplace
      </div>
      <div className="text-3xl font-['Rubik'] font-semibold text-white w-48 shrink-0">
        Marketplace
      </div>
      <div className="text-3xl font-['Rubik'] font-semibold text-white w-48 shrink-0">
        Marketplace
      </div>
    </div>
    <div className="flex flex-row justify-between ml-[407px] gap-[146px] items-center">
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-16 shrink-0">
        Explore
      </div>
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-16 shrink-0">
        Explore
      </div>
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-16 shrink-0">
        Explore
      </div>
    </div>
    <div className="flex flex-row justify-between ml-[407px] gap-[174px] items-center">
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-10 shrink-0">
        Blah
      </div>
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-10 shrink-0">
        Blah
      </div>
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-10 shrink-0">
        Blah
      </div>
    </div>
    <div className="flex flex-row justify-between ml-[407px] gap-[174px] items-center">
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-10 shrink-0">
        Blah
      </div>
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-10 shrink-0">
        Blah
      </div>
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-10 shrink-0">
        Blah
      </div>
    </div>
    <div className="flex flex-row justify-between gap-[174px] items-center mb-16 ml-[407px]">
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-10 shrink-0">
        Blah
      </div>
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-10 shrink-0">
        Blah
      </div>
      <div className="text-xl font-['Rubik'] text-[#a9a9a9] w-10 shrink-0">
        Blah
      </div>
    </div>
    <div className="border-solid border-[#676767] self-stretch mb-4 h-px shrink-0 border-t-2 border-b-0 border-x-0" />
   
  </div>  
           <p className="text-2xl font-['Rubik'] text-white self-center w-20">
           @ {currentYear}
           </p>
      </footer>
      
    </>
  )
}

export default Layout