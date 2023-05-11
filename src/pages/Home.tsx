import { useNavigate } from "react-router-dom";
import { Footer, Logo, UserForm } from "../components";
import { useUserContext } from "../contexts";
import "./home.scss";

export function Home() {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  function onValueChange(value: number) {
    setUser({
      ...user,
      salary: value,
    });
  }

  const greeting = (
    <div className="welcome-text">
      <p>
        Hello and welcome to{" "}
        <span className="rose" style={{ fontWeight: "bold" }}>
          Job COLumn
        </span>
        !
      </p>
    </div>
  );

  const description = (
    <div className="welcome-text">
      <p>
        <span className="rose" style={{ fontWeight: "bold" }}>
          Job COLumn
        </span>{" "}
        is a job board that considers the cost of living.
      </p>
      <p>It compares the minimum salary in a listed job with your current salary! Magic!</p>
    </div>
  );

  const filters = (
    <div className="welcome-text">
      <p>You'll be able to filter by:</p>
      <ul>
        <li>keywords</li>
        <li>location</li>
        <li>minimum salary</li>
      </ul>
      <p>You can also sort by any of:</p>
      <ul>
        <li>location name</li>
        <li>salary</li>
        <li>expiration date</li>
        <li>job title</li>
      </ul>
    </div>
  );

  const instructions = (
    <div className="welcome-text">
      To use this app, provide your current location and salary to compare the consumer price index (CPI) with that of
      the one in each job's location.
    </div>
  );

  return (
    <div className="welcome">
      <Logo />
      <main className="welcome-container">
        <section>
          {greeting}
          {description}
          {filters}
          {instructions}
        </section>
        <UserForm defaultValue={user.salary} onValueChange={onValueChange} buttonOnClick={() => navigate("/jobs")} />
      </main>
      <Footer />
    </div>
  );
}
