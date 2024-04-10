import { AuthProvider } from "./auth/context";
import { useRoutes } from "react-router-dom";

import { routes } from "./routes";

function App() {

    let routesElement = useRoutes(routes);

    return (
        <AuthProvider>
            {routesElement}
        </AuthProvider>
    );
}

export default App;