

export default function Footer (){

    const petName = "Sanji";

    return(
            <footer>
                <p> My pet is called {petName}</p>
                <small> &copy; {new Date().getFullYear()} <br />Thanks for visiting my website </small>
            </footer>
    );
}
