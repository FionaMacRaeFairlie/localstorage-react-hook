import { useLocalStorage } from "./useLocalStorage";

const Form = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [checked, setChecked] = useLocalStorage("checked", false);

  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          aria-label="fullname"
        />
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          Not a robot?
        </label>
      </form>
      <div className="container-fluid">
        Hi {name}, you have said that it is {checked.toString()} that you are a
        robot.
      </div>
    </>
  );
};

export default Form;
