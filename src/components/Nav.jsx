import { Form, NavLink } from "react-router-dom";

import logomark from "../assets/logomark.svg";
import { TrashIcon } from "@heroicons/react/24/solid";

const Nav = ({ username }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Home">
        <img src={logomark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {username && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete the user and all the data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <TrashIcon width={20}/>
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
