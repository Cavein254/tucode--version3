import { useState } from "react"

const DropDown = () => {
  const [IsOpen, setIsOpen] = useState(true)
  return (
    <div className="relative flex flex-col items-center w-[150px] h-[150px] rounded-md bg-white">
      <button className="text-gray-900 bg-gray-200  w-full flex items-center justify-between font-thin text-2xl rounded-md tracking-wider border-4 border-transparent active:border-green-400 px-4 duration-300 active:text-green-500" onClick={()=>setIsOpen((prev) => !prev)}>Dropdown</button>
    </div>
  )
}

export default DropDown