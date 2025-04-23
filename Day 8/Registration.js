import React from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  return (
    <form>
      <label>First Name
        <input type="text" /> (max 30 character a-z and A-Z)
      </label><br/><p/>
         <label>Last Name
        <input type="text" /> (max 30 character a-z and A-Z)
      </label><br/><p/>
      <label>D.O.B   
        <input type="date" />
      </label><br/><p/>
          <label>Email Id
        <input type="text" /> 
      </label><br/><p/>
         <label>Mobile no.
        <input type="number" /> (10 digit number)
      </label><br/><p/>
         <label>Gender :
        <input type="radio" />Male 
             <input type="radio" />Female <br/>
        Address    <textarea></textarea>
            <br/><p/>  <label>city
        <input type="text" /> (max 30 character a-z and A-Z)
      </label><br/><p/>
         <label> Pincode
        <input type="number" />
      </label><br/><p/>
      </label>
Country 
        <select>
        <option> India </option>
          <option> USA </option>
          <option1> Canada </option1></select><br/><p/>
         <label>Hobbies :
        <input type="checkbox" />Drawing
             <input type="checkbox" />Singing
            <input type="checkbox" />Sketching
             <input type="checkbox"/>others <input type="text"/>
      </label>
        <br/><p/>
        <table>
        <tr>
        <th>Sr. No.</th>
                 <th>Examination.</th>
                 <th>Board</th>
                 <th>Percentage</th>
                 <th>Year of passing</th>
        </tr>
            <tr>
            <td>1</td>
                            <td>Class X</td>
                            <td><input type="text"/></td>
                 <td><input type="text"/></td>
                 <td><input type="text"/></td>
            </tr>
            <tr>
             <td>2</td>
                            <td>Class XII</td>
                            <td><input type="text"/></td>
                 <td><input type="text"/></td>
                 <td><input type="text"/></td>
            </tr>
             <tr>
             <td>3</td>
                            <td>Graduation</td>
                            <td><input type="text"/></td>
                 <td><input type="text"/></td>
                 <td><input type="text"/></td>
            </tr>
             <tr>
             <td>4</td>
                            <td>Masters</td>
                            <td><input type="text"/></td>
                 <td><input type="text"/></td>
                 <td><input type="text"/></td>
            </tr>
        </table>
        COURSES <input type="radio" />BCA
             <input type="radio" />B.Com
            <input type="radio" />BSC
                    <input type="radio" />BA
                        <br/><p/>
       <center> <input type="button" value="SUBMIT"/>
                <input type="button" value="RESET"/></center>

    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);