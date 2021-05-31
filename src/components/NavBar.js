import { NavLink } from "react-router-dom";

const NavBar = () => {
    const style = {
        navBar: "inline-flex items-center py-1 my-2 px-3 rounded text-2xl items-center text-indigo-50 hover:text-indigo-900",
        activeLink: "text-indigo-900 bg-indigo-100",
        socailIconSpaces: "mx-3 my-2",
    };
    return (
        <header className='bg-indigo-500 flex justify-center align-center flex-col'>
            <div className='container mx-auto px-4  md:flex md:justify-between'>
                <nav className='w-full divide-y divide-indigo-900 md:divide-opacity-0 md:flex md:justify-between md:flex md:justify-center md:items-center md:gap-10'>
                    <div className='flex justify-center items-center flex-col'>
                        <NavLink
                            to='/'
                            exact
                            activeClassName='text-black'
                            className='inline-flex items-center justify-between  pt-4 px-3 hover:text-indigo-100 text-4xl font-bold cursive tracking-widest md:pt-4'
                        >
                            ZHPPF
                        </NavLink>
                        <h3 className='text-white text-2xl mb-2'>
                            Metal fabrication training.
                        </h3>
                    </div>

                    <div className='flex justify-center flex-wrap'>
                        <NavLink
                            to='project'
                            className={style.navBar}
                            activeClassName={style.activeLink}
                        >
                            Work
                        </NavLink>
                        <NavLink
                            to='post'
                            className={style.navBar}
                            activeClassName={style.activeLink}
                        >
                            Blog Posts
                        </NavLink>

                        <NavLink
                            to='about'
                            className={style.navBar}
                            activeClassName={style.activeLink}
                        >
                            Team
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
