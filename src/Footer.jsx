

function Footer (){

    const petName = "Luffy";

    return(
            <footer>
                <p> &copy; Thanks for visiting our website</p>
                <p> The current year is {new Date().getFullYear()} </p>
                <p> My pet is called {petName}</p>
            </footer>
    );
}
export default Footer