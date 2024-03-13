
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="container mx-auto lg:flex lg:justify-between lg:text-left text-center py-10 border-b-2 items-center ">
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <div className='flex justify-center items-center lg:mt-0 mt-4'><img src={profile} alt="" /></div>
        </div>
    );
};

export default Header;