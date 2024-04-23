import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcoms";
import { Icons } from "./Icons";

export default function Footer(){
    return (
        <footer className="bg-rose-500 text-white">
            <div className="text-center px-4">
                <h1 className="text-3xl mb-6 font-semibold">
                    Ingeniosos
                </h1>
            </div>
            <ItemsContainer />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-200 text-sm pb-8">
                <span>@ 2024 Ingeniosos. All rights reserved.</span>
                <span>Terms . Privacy Policy</span>
                <SocialIcons Icons={Icons} />
            </div>
        </footer>
    )
}