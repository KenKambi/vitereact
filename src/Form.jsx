

const Form = () => {

    return ( 
        <main>
            <form action="si">
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

                

            </form>
        </main>
    );
}
 
export default Form;