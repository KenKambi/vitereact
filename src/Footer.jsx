

export default function Footer (){

    const petName = "Luffy";

    return(
            <footer>
                <p> My pet is called {petName}</p>
                <small> &copy; {new Date().getFullYear()} <br />Thanks for visiting our website </small>
            </footer>
    );
}
