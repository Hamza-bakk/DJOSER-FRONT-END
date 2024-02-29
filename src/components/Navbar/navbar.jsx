

const Navbar = () => {
    const handleHBClick = () => {
        window.location.href = "/";
    };

    return (
        <div className="flex gradient-background p-4 w-full border-2">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex h-full w-3/12 justify-center rounded-lg items-center">
                    <div onClick={handleHBClick} className="cursor-pointer rounded-full bg-white h-10 w-10 flex items-center justify-center text-black font-bold">
                        HB
                    </div>
                </div>
                <div className="flex flex-row w-9/12 justify-around sm:gap-4 text-center items-center">
                    <a href="/propos-de-moi" className="text-white font-bold sm:text-sm hover:underline">A PROPOS DE MOI</a>
                    <a href="/contact" className="text-white font-bold  sm:text-sm  hover:underline">CONTACT</a>
                    <a href="/connexion" className="text-white font-bold sm:text-sm  hover:underline">CONNEXION</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

