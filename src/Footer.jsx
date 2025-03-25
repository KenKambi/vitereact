

export default function Footer (){

    const petName = "Luffy";

    return(
            <footer>
                <p> My pet is called {petName}</p>
                <p> &copy; Thanks for visiting our website</p>
                <p> The current year is {new Date().getFullYear()} </p>
            </footer>
    );
}
