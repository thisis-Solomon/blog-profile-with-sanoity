import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
    const style = {
        navBar: "inline-flex items-center py-1 my-2 px-3 rounded text-2xl items-center text-indigo-50 hover:text-indigo-900",
        activeLink: "text-indigo-900 bg-indigo-100",
        socailIconSpaces: "mx-3 my-2",
    };
    return (
        <header className='bg-indigo-500 flex justify-center align-center flex-col'>
            <div className='container mx-auto px-4  md:flex md:justify-between'>
                <nav className='lg:flex lg:justify-between md:flex md:justify-center md:items-center md:gap-10'>
                    <div className='flex justify-center '>
                        <NavLink
                            to='/'
                            exact
                            activeClassName='text-black'
                            className='inline-flex items-center justify-between  pt-4 px-3 hover:text-indigo-100 text-4xl font-bold cursive tracking-widest md:py-4'
                        >
                            My Name
                        </NavLink>
                    </div>

                    <div className='flex justify-center flex-wrap'>
                        <NavLink
                            to='about'
                            className={style.navBar}
                            activeClassName={style.activeLink}
                        >
                            About Me
                        </NavLink>
                        <NavLink
                            to='project'
                            className={style.navBar}
                            activeClassName={style.activeLink}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to='post'
                            className={style.navBar}
                            activeClassName={style.activeLink}
                        >
                            Blog Posts
                        </NavLink>
                    </div>
                </nav>
                <div className='flex justify-center md:flex-col md:my-2 md:gap-3 lg:flex-row'>
                    <SocialIcon
                        url='https://twitter.com/'
                        className={style.socailIconSpaces}
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url='https://facebook.com/'
                        className={style.socailIconSpaces}
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url='https://linkedin.com/'
                        className={style.socailIconSpaces}
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
