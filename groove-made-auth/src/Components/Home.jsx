import React from 'react';
import img from '../Assets/d6892bf250f71554ecc7ec7b6a67093e.jpeg'

const Home = () => {
    return (
        <div className={"w-full h-screen relative"}>
            <img className={"w-full h-full object-cover absolute flex justify-center items-center"} src={img} alt={""}/>
            <div className={"absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white text-2xl"}>
                {/*<button>Sign In</button>*/}
            </div>
        </div>
    );
};

export default Home;