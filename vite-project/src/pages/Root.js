import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation.js"


export default function Root() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />

            </main>
        </>

    )
}