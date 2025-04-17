import React from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label><br/><p/>
         <label>Enter your Age:
        <input type="text" />
      </label>
        <br/><p/>
         <label>Hobbies :
        <input type="checkbox" />Movies
             <input type="checkbox" />Song
            <input type="checkbox" />Banking
      </label>
        <br/><p/>

         <label>Gender :
        <input type="radio" />Male 
             <input type="radio" />Female
           
      </label>
        <br/><p/>
        <input type="button" value="SUBMIT"/>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);