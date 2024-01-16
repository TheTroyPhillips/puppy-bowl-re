import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <h1 id="header">The Puppy Bowl</h1>
            <nav id="nav">
                <Link className="link" to="/">
                    <p className= "link-home">Home</p>
                </Link>
            </nav>
        </header>
    )
}