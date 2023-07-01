import { Form } from "react-router-dom";

import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal Budgetting App for your Financial Freedom. Start Your Journey Here.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <UserPlusIcon width={20} />
            <span>Create Account</span>
          </button>
        </Form>
      </div>
          <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
};

export default Intro;
