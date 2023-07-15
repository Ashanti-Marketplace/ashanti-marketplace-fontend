import Link from "next/link"



export default function signup () {
  return (
    <form>
          <div>
        <div className="overflow-hidden bg-[#090e0b] flex flex-row gap-16 w-full items-center">
  <img
    src="https://file.rendit.io/n/EwCyIn24jyvNw8BCgori.png"
    className="min-h-0 min-w-0"
  />
  <div className="self-end flex flex-col mb-[108px] gap-3 w-2/5 h-[779px]">
    <div className="text-5xl font-['Inter'] font-bold text-white self-start mb-4 w-32">
      Log0
    </div>
    <div className="whitespace-nowrap text-5xl font-['Ubuntu'] text-white self-start mb-2 w-3/5">
      Create an account
    </div>
    <div className="whitespace-nowrap text-2xl font-['Inter'] text-white mb-4">
      Sign up and collect African arts from all over the world.
    </div>
    <div className="border-solid border-white flex flex-col justify-center h-12 shrink-0 items-start mb-4 mr-20 border-t-0 border-b border-x-0">
      <div className="text-2xl font-['Inter'] font-medium text-white w-16">
        Name
      </div>
    </div>
    <div className="border-solid border-white flex flex-col justify-center h-12 shrink-0 items-start mb-4 mr-20 border-t-0 border-b border-x-0">
      <div className="text-2xl font-['Inter'] font-medium text-white w-16">
        Email
      </div>
    </div>
    <div className="border-solid border-white flex flex-col justify-center h-12 shrink-0 items-start mb-4 mr-20 border-t-0 border-b border-x-0">
      <div className="text-2xl font-['Inter'] font-medium text-white w-[113px]">
        Password
      </div>
    </div>
    <div className="bg-[#b38af1] flex flex-col justify-center h-12 shrink-0 items-center mb-4 ml-px mr-20 rounded-lg">
      <div className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-48">
        Create Account
      </div>
    </div>
    <div className="font-['Inter'] font-bold text-white self-start ml-64 w-5">
      Or
    </div>
    <div className="border-solid border-[#2f4736] flex flex-row justify-center gap-2 h-12 shrink-0 items-center mb-2 mr-20 border rounded-lg">
      <a className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-2/5">
        Sign up with Google
      </a>
      <img
        src="https://file.rendit.io/n/fNCYzi6nwEpzDXaP4oG9.svg"
        className="min-h-0 min-w-0 w-8 shrink-0"
      />
    </div>
    <div className="border-solid border-[#2f4736] flex flex-row justify-center gap-2 h-12 shrink-0 items-center mb-2 ml-px mr-20 border rounded-lg">
      <a className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-1/2">
        Sign up with Facebook
      </a>
      <img
        src="https://file.rendit.io/n/xcWq7lTQoiAQR9wLEWH5.svg"
        className="min-h-0 min-w-0 w-8 shrink-0"
      />
    </div>
    <div className="whitespace-nowrap font-['Inter'] text-white self-start ml-[147px]">
      Already have an account?{" "}
      < Link href='/login' className="font-bold text-[#2f4736] contents">Login</Link>
    </div>
  </div>
</div>

    </div>
    </form>
    
  )
}
