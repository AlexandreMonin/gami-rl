import {JSX} from "react";
import style from "./style.module.css";
import Image from "next/image";
import NavbarTab from "@/components/NavbarTabs/NavbarTab";
import NotLoggedAvatar from "@/components/NotLoggedAvatar/NotLoggedAvatar";
import {User} from "next-auth";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import LoggedAvatar from "@/components/LoggedAvatar/LoggedAvatar";
import {MainButton} from "@/components/Variant";

type NavbarProps = {
    user?: User
}

export default function NavigationBar({user}: NavbarProps): JSX.Element {
    return (

        <Navbar shouldHideOnScroll>
            <NavbarBrand>
                <p className="font-bold text-inherit">Gami-RL</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {
                user ? (
                    <NavbarContent justify="end">
                        <LoggedAvatar username={user.username} status={user.status} id={user.id}/>
                    </NavbarContent>
                ) : (
                    <NavbarContent justify="end">
                        <NavbarItem className="hidden lg:flex">
                            <Link href="#">Login</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <MainButton as={Link} color="primary" href="#" variant="flat">
                                Sign Up
                            </MainButton>
                        </NavbarItem>
                    </NavbarContent>
                )
            }
        </Navbar>



        // <div className={style.navbar}>
        //     <Image src="/logo.svg" alt="Logo du site Gami-RL" width={185} height={250} priority className={style.logo}/>
        //
        //     <div className={style.tabs}>
        //         {/*<NavbarTab name="Accueil" href="/"/>*/}
        //         <NavbarTab name="Forum" href="/post"/>
        //         <NavbarTab name="Joueurs" href="/players"/>
        //         <NavbarTab name="Évènements" href="/events"/>
        //     </div>
        //     {
        //         user ? (
        //             <LoggedAvatar username={user.username} status={user.status}  id={user.id}/>
        //         ) : (
        //             <NotLoggedAvatar/>
        //         )
        //     }
        //
        // </div>
    );
}