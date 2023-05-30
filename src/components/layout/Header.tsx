import { signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaGuitar } from "react-icons/fa";

function Header() {
  const session = null;
  const { systemTheme, theme, setTheme } = useTheme();
  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  const testTheme = () => {
    console.log("Another produce finder");
  }
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      console.log(currentTheme);
      return (
        <div className="">
          <button onClick={() => setTheme("light")}>light</button>
        </div>
      );
    } else {
      console.log(currentTheme);
      return (
        <div className="">
          <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
      );
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

                <div className=" text-2xl">
                  <Link href="/">TUCODE</Link>
                </div>
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
          </div>
          {/* login */}
          {/*show only if user is not logged in */}
          <div className="flex flex-row justify-end">
            <div className=" pr-2 mr-4 text-white justify-end">
              {!session && (
                <>
                  <div className="">Create My Account / </div>
                  <div className="text" onClick={handleSignin}>
                    Login
                  </div>
                </>
              )}
              {session && (
                <div className="" onClick={handleSignout}>
                  Logout
                </div>
              )}
            </div>
          </div>
          <button className="flex flex-row justify-end items-center text-white bg-green-200" onClick={renderThemeChanger}>
            <FaGuitar size={45}  className="text-red-500 hover:text-orange-400 "/>
          </button>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Header;
