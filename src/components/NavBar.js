import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
    const style = {
        navBar: "inline-flex items-center py-3 px-3 my-6 rounded text-2xl items-center text-blue-600 hover:text-blue-900",
        activeLink: "text-blue-900 bg-blue-100",
    };
    return (
        <header className='bg-blue-200'>
            <div className='container mx-auto flex justify-between '>
                <nav className='flex'>
                    <NavLink
                        to='/'
                        exact
                        activeClassName='text-black'
                        className='inline-flex items-center py-6 px-3 mr-4 text-blue-600 hover:text-blue-900 text-4xl font-bold cursive tracking-widest'
                    >
                        My Name
                    </NavLink>
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
                </nav>
                <div>
                    <SocialIcon
                        url='https://twitter.com/'
                        className='mr-4'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url='https://facebook.com/'
                        className='mr-4'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url='https://linkedin.com/'
                        className={["mr-4", style.navBar]}
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
