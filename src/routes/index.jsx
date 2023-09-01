import { PrivateRoutes } from "./privateRoutes"
import { PublicRoutes } from "./publicRoutes"
import { useApp } from "../localStorage/useApp"

function RoutesApp() {
    const { user } = useApp();
    if(user?.email) {
        return <PrivateRoutes/>
    }
    return (
        <PublicRoutes/>
    )
}

export {RoutesApp}