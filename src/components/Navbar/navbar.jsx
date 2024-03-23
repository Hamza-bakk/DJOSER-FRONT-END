import { useAtom } from 'jotai';
import { userAtom } from '../../stores/userAtom';

const Navbar = () => {
    const [user] = useAtom(userAtom);
    const handleHBClick = () => {
        window.location.href = "/";
    };

    return (
        <nav className="flex gradient-background p-4 w-full">
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex h-full w-3/12 justify-center rounded-lg items-center">
                    <div onClick={handleHBClick} className="cursor-pointer rounded-full bg-white h-10 w-10 flex items-center justify-center text-black font-bold">
                        HB
                    </div>
                </div>
                <div className="flex flex-row w-9/12 justify-around sm:gap-4 text-center items-center">
                    <a href="/propos-de-moi" className="text-white font-bold sm:text-sm hover:underline">A PROPOS DE MOI</a>
                    <a href="/contact" className="text-white font-bold  sm:text-sm  hover:underline">CONTACT</a>
                    {user.id == '' ? ( // Vérifier si l'ID de l'utilisateur est défini
                        <a href="/login" className="text-white font-bold sm:text-sm hover:underline">CONNEXION</a>
                    ) : (
                        <a href="/logout" className="text-white font-bold sm:text-sm hover:underline">DÉCONNEXION</a>

                    )}


                </div>
            </div>
        </nav>
    );
};

export default Navbar;
