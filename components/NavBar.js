import Link from "next/link";
import { useRouter } from "next/router";


export default function NavBar() {
    const router = useRouter();
    return (
    <nav>
        <Link href="/">
            <a className={router.pathname === "/" ? "active": ""}>Home</a>
        </Link>
        <br />
        <Link href="/about">
            <a className={router.pathname === "/about" ? "active": ""}>about</a>
        </Link>
        <style jsx>{`
            a {
                text-decoration : none;
                }
            .active {
                color:green;
            }
        `}</style>
    </nav>
    )
}