import { SocialIcon } from "react-social-icons";

const Footer = () => {
    const style = {
        navBar: "inline-flex items-center py-1 my-2 px-3 rounded text-2xl items-center text-indigo-600 hover:text-indigo-900",
        socailIconSpaces: "mx-3 my-2",
    };
    return (
        <footer className='bg-indigo-800 text-indigo-50 md:absolute w-full bottom-11/12'>
            <div className='container mx-auto px-4 p-4'>
                <div className='flex flex-col justify-center mx-7 items-center md:flex-row md:justify-between'>
                    <div className='flex items-center flex-col md:flex-row'>
                        <h4 className='text-2xl'>You can Follow Us On:</h4>
                        <div className=''>
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

                    <div>
                        <h4 className='text-2xl m-1'>copyright &copy; 2021.</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
