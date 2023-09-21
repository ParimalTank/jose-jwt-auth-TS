import { useAuth } from "../app/hooks/useAuth";
import Link from "next/link";

async function Header() {
    const auth = await useAuth.fromServer();

    return (
        <header>
            <div>
                <Link href="/">Logo</Link>
            </div>
            <nav>
                {auth ? (
                    <Link href="/panel">Panel (Protected Route)</Link>
                ) : (
                    <Link href="/login">Login</Link>
                )}
            </nav>
        </header>
    );
}

export default Header;
