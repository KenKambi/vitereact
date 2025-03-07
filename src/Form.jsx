

const Form = () => {


    function signUp (){

    }

    return ( 
        <main>
            <form action={signUp}>
                <label htmlFor="email">Email :</label>
                <input id="email" type="email" placeholder="johnodoe@gmail.com"/>
                <br />

                <label htmlFor="password">Password :</label>
                <input id="password" type="password"  />
                <br />

                <label htmlFor="description"> Description : </label>
                <textarea name="description" id="description"></textarea>

                <fieldset>
                    <legend>Food Choice</legend>
                    <input id="food" type="radio" />
                    <label htmlFor="food">Breakfast</label>
                    <br />

                    <input id="food" type="radio" />
                    <label htmlFor="food">Lunch</label>
                    <br />

                    <input id="food" type="radio" />
                    <label htmlFor="food">Dinner</label>
                </fieldset>

                <fieldset>
                    <legend>Time of Day</legend>
                    <input id="time" type="checkbox" />
                    <label htmlFor="time">Morning</label>
                    <br />

                    <input id="time" type="checkbox" />
                    <label htmlFor="time">Lunch</label>
                    <br />

                    <input id="time" type="checkbox" />
                    <label htmlFor="time">Dinner</label>
                </fieldset>

                <select name="color" id="color"> 
                    <option value="color" disabled > --Choose Color-- </option>
                    <option value="color">Red</option>
                    <option value="color">Orange</option>
                    <option value="color">Blue</option>
                    <option value="color">Yellow</option>

                </select>
                <br />
                


                <button>Submit</button>

            </form>
        </main>
    );
}
 
export default Form;