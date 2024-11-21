import Image from "next/image"
export default function Home(){
  return(
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-3xl w-1/2 px-4">
         <Image src={"/facebook.svg"} width={300} height={100} alt="Facebook Logo"/>
         <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life.</p>
         </div>
     
       {/* {Right Side} */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3 px-4 mr-5 ">
        <input className="my-2 border border-1 border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-600" type="text" placeholder="Email address or phone number"/>
        <input className="my-2 border border-1 border-gray-200 p-3 rounded-md focus:outline-1 outline-blue-600"type="password" placeholder="Password"/>
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-500">Log in</button>
        <p className="text-blue-500 text-sm text-center my-2 hover:underline cursor-pointer">Forgotten password?</p>
        <span className="my-2">
          <hr/>
        </span>
        <button className="bg-green-600 text-white text-xl font-semibold my-2 py-4  px-2 mx-auto rounded-md  hover:bg-green-500">Create new account</button>
      </div>
    </div>
  )
}