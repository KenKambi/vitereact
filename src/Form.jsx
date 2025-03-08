

const Form = () => {

    function signUp (formData) {
        
        const data = Object.fromEntries(formData);
        const time = formData.getAll("time");
        console.log(time);

        const allData = {...data, time};
        console.log(allData);

    }

    return ( 
        <main>
            <h1> SignUp Form </h1>
            <form action={signUp}>

                <label htmlFor="email">Email : </label>
                <input id="email" type="email" name="email" placeholder="johnodoe@gmail.com" required/>
                <br />

                <label htmlFor="password">Password : </label> 
                <input id="password" type="password" name="password" required/>
                <br />

                <label htmlFor="description"> Description </label> <br />
                <textarea name="description" id="description" required></textarea>

                <fieldset>
                    <legend>Food Choice</legend>
                    <input id="food" type="radio" name="food" value="breakfast"/>
                    <label htmlFor="food">Breakfast</label>
                    <br />

                    <input id="food" type="radio" name="food" value="lunch"/>
                    <label htmlFor="food">Lunch</label>
                    <br />

                    <input id="food" type="radio" name="food" value="dinner"/>
                    <label htmlFor="food">Dinner</label>
                </fieldset>

                <fieldset>
                    <legend>Time of Day</legend>
                    <input id="time" type="checkbox" name="time" value="morning" />
                    <label htmlFor="time">Morning</label>
                    <br />

                    <input id="time" type="checkbox" name="time" value="midday"/>
                    <label htmlFor="time">Midday</label>
                    <br />

                    <input id="time" type="checkbox" name="time" value="night"/>
                    <label htmlFor="time">Night</label>
                </fieldset>

                <select name="color" id="color" defaultValue="" required> 
                    <option value="" disabled > --Choose Color-- </option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>

                </select>
                <br />
                


                <button>Submit</button>

            </form>
        </main>
    );
}
 
export default Form;