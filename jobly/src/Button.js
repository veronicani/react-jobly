import "./Button.scss";

/** Button. 
 * 
 * Props:
 * - classes: additional classes outside of Bootstrap.
 * - label: text to display on the button.
 * 
 * State:
 * none.
 * 
 * { SearchBar } -> Button
*/
function Button({ classes, label }) {
  return (
    <button 
      className={`${classes} btn btn-secondary`}>
        {label}
    </button>
  )
}

export default Button;