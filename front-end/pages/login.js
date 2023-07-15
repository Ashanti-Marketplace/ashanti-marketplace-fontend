import Link from "next/link"

export default function Login(){
     // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
 
    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }
 
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
 
    // API endpoint where we send form data.
    const endpoint = '/api/form'
 
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
 
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  

 return(
    <form onSubmit={handleSubmit}>
    
    <div className="overflow-hidden bg-[#090e0b] flex flex-row justify-between pl-16 w-full items-center"></div>
  <div className="self-end flex flex-col mb-[117px] gap-2 h-[690px]">
    <div className="text-5xl font-['Inter'] font-bold text-white self-start mb-6 w-32">
      Log0
    </div>
    <div className="whitespace-nowrap text-5xl font-['Ubuntu'] text-white self-start w-3/5">
      Welcome back!
    </div>
    <div className="whitespace-nowrap text-2xl font-['Inter'] text-white mb-6 mr-px">
      Let’s get you back on track as an artlover/artist
    </div>

    // We pass the event to the handleSubmit function on submit.
    
      <div className="border-solid border-white flex flex-col justify-center mb-6 h-12 shrink-0 items-start border-t-0 border-b border-x-0">
        <input className="text-2xl font-['Inter'] font-medium text-white w-16" type="text" id="first" name="first" required  placeholder="Email"/>
      </div>
      
      <div className="border-solid border-white flex flex-col justify-center mb-8 h-12 shrink-0 items-start border-t-0 border-b border-x-0">
       <input className="text-2xl font-['Inter'] font-medium text-white w-[113px]"type="text" id="last" name="last" required  placeholder="Password"/>
      </div>
      
      <div className="bg-[#b38af1] flex flex-col justify-center h-12 shrink-0 items-center mb-6 mr-px rounded-lg">
      <button className="text-2xl font-['Inter'] font-semibold text-white w-16"type="submit">Submit</button>
      </div>

      <div className="font-['Inter'] font-bold text-white self-center mb-3 w-5">
      Or
    </div>

    <div className="border-solid border-[#2f4736] flex flex-row justify-center gap-2 h-12 shrink-0 items-center mb-2 mr-px border rounded-lg">
      <div className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-[210px] shrink-0">
        Login with Google
      </div>
      <img
        src="https://file.rendit.io/n/XOKcZzv0fFr9J9cajLLI.svg"
        className="min-h-0 min-w-0 w-8 shrink-0"
      />
    </div>
    <div className="border-solid border-[#2f4736] flex flex-row justify-center gap-2 h-12 shrink-0 items-center mb-4 mr-px border rounded-lg">
      <div className="whitespace-nowrap text-2xl font-['Inter'] font-semibold text-white w-1/2">
        Login with Facebook
      </div>
      <img
        src="https://file.rendit.io/n/RL0opZFFsdclP9NCTjfB.svg"
        className="min-h-0 min-w-0 w-8 shrink-0"
      />
    </div>
    <div className="whitespace-nowrap font-['Inter'] text-white self-end mr-[113px] w-1/2">
      Don’t have an account?{" "}
      <Link href='/signup' className="font-bold text-[#273b2d] contents">Created one</Link>
    </div>
  </div>
  <img
    src="https://file.rendit.io/n/WGpHGGEvV1dIjQ2qEUfv.png"
    className="min-h-0 min-w-0"
  />
  
    
    </form>
    
   
     
    
 
)

}




 