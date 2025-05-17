import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import profile from '../../assets/demo-user.png';

const navLink = [
    {
        link: "/",
        display: "Home"
    },
    {
        link: "/about",
        display: "About"
    },
    {
        link: "/career",
        display: "Career"
    }
]


const Navbar = () => {

    return (
        <nav className='py-[20px] container mx-auto px-[80px]'>
            <div className='flex items-center flex-col pb-[15px]'>
                <img className='h-[40px]' src={logo} alt="logo-image" />
                <p className='text-[gray] py-[6px]'>Journalism Without Fear or Favour</p>
                <p className='font-bold text-[#3c3c3c]'>Sunday,November 27,2025</p>
            </div>

            <div className='flex items-center gap-[10px] h-[50px] w-full bg-[#e1e1e1] px-[10px] py-[5px] rounded-md'>
                <p className='h-full bg-orange-700 px-[35px] text-[#fff] flex items-center justify-center rounded-md'>Latest</p>
                <marquee>
                    আইন অনুযায়ী পুলিশ কাউকে ধরলে তাকে ২৪ ঘন্টার মধ্যে আদালতে হাজির করার নিয়ম আছে। এই নিয়ম বিদেশীদের জন্যও সমানভাবে প্রযোজ্য।
                </marquee>
            </div>

            <div className='flex items-center justify-between py-[15px]'>
                <div>
                </div>
                <ul className='flex items-center gap-[30px]'>
                    {
                        navLink?.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item?.link}>
                                    {item?.display}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex items-center gap-[20px]'>
                    <Link to={"/profile"}>
                        <img className='h-[40px] w-[40px] rounded-full border-[1px]' src={profile} alt="image" />
                    </Link>
                    <Link className='py-[8px] px-[35px] bg-[#000] text-[#fff] rounded-md' to={"/login"}>
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;