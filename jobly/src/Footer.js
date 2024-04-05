import "./Footer.scss";

/** Footer for ShareBnb.
 *
 * Props:
 * - none.
 * 
 * State:
 * - none.
 *
 * App -> Footer
 */

function Footer() {
  return (
    <footer className="Footer mt-auto">
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-between align-items-center py-4">
            <small className="">Background image from Vecteezy.</small>
            {/* <p className="mb-0">&#169; Carl Molina & Veronica Ni 2024.</p> */}
            <a href="https://github.com/veronicani/react-jobly">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;