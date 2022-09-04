import { useTheme } from 'next-themes';
import Link from "next/link";
import { FaGuitar } from "react-icons/fa";

function Header() {
  const {systemTheme,theme,setTheme} = useTheme();
  const renderThemeChanger = () =>{
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if(currentTheme === 'dark') {
      return (
        <div className="">
        <button onClick={()=> setTheme('light')}>light</button>
      </div>

      )
    }else {
      return (
<div className="">
          <button onClick={()=>setTheme('dark')}>Dark</button>
          </div>
      )
    }
  }; 

  return (
    <div className="sticky top-0 z-50">
      <div>
        {/* logo */}

        <div className="flex flex-row justify-between bg-black pl-2 m-0">
          <div className="flex flex-col text-white pl-2 pt-2">
            <div>
              <div className="flex flex-row justify-center items-center">
                <Link href="/">
                <FaGuitar size={45} />
                </Link>
                
                <div className=" text-2xl"><Link href='/'>TUCODE</Link></div>
                
              </div>
              <div>
                <div className=" text-sm">code.commit.deploy</div>
              </div>
            </div>
          </div>

          {/* Mid */}
          {/* Todo: Make it hidden in small devices */}
          <div className="text-gray-400 font-xs mt-8 hidden md:flex">
            <div className="pr-2">
              <Link href="/posts/">POSTS</Link>
            </div>
            <div className="pr-2">
              <Link href="/snippets/">SNIPPETS</Link>
            </div>
            <div className="pr-2">
              <Link href="/questions/">QUESTIONS</Link>
            </div>
            <div className="pr-2">
              <Link href="/about/">ABOUT US</Link>
            </div>
            <div className="pr-2">
              <Link href="/help/">HELP</Link>
            </div>
            <div className="pr-2">
              <Link href="/contact/">CONTACT US</Link>
            </div>
           
          </div>
          {/* login */}
          {/*show only if user is not logged in */}
          <div className="flex flex-row justify-end hidden md:visible lg:visible">
            <div className=" pr-2 mr-4 text-gray-400 justify-end">
              <div className="">Create My Account / </div>
              <div className="">Login</div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center text-white">
                <FaGuitar size={45} />
            </div>
        </div>
        <div className="">
        </div>
        
      </div>
    </div>
  );
}

export default Header;