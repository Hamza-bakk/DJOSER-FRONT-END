import logo from "/public/Logo.png"


const Navbar = () => {
    return (
        <div className="flex gradient-background p-4 ">
            <div className="flex h-full justify-center w-full">
                <div className="flex w-full rounded cursor-pointer flex-row">
                    <a href="/">
                        <img
                            className=" rounded-full border border-gray-100 shadow-sm h-6 w-6"
                            src={logo} // Utilisez la variable d'importation pour spécifier la source de l'image
                            alt="Logo HB" // Assurez-vous de fournir une description textuelle pour l'accessibilité
                        />
                    </a>
                    <div className="flex md:flex-wrap sm:flex-row font-bold  text-white w-full justify-center text-center items-center">
                        {/* Ajoutez vos liens ici */}
                        <a href="/propos-de-moi" className="text-white mx-8 sm:mx-2 hover:underline" >A PROPOS DE MOI</a>
                        <a href="/contact" className="text-white mx-8 sm:mx-2 hover:underline">CONTACT</a>
                        <a href="/connexion" className="text-white mx-8 sm:mx-2 hover:underline">CONNEXION</a>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Navbar;
