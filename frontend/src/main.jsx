import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    BrowserRouter,
    useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'
import Layout from '@/components/layouts/main-layout.jsx'
import {useLocation} from "react-router";
import { AuthProvider } from '@/contexts/auth-context.jsx';
function App() {
    const route = useRoutes(routes)
    const location = useLocation().pathname;
    const path = [
        '/system/sign-in',
        '/system/sign-up',
    ]
    const layout = !path.includes(location)
        ? <Layout>{route}</Layout>
        : route
    return (
        <Suspense>
            {layout}
        </Suspense>
    )
}

const app = createRoot(document.getElementById('root'))
app.render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
)
