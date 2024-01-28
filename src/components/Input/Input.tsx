import { useThemeContext } from "../../utilities/useModalContext";

interface InputProps {
  attribute: string;
  inputName: string;
  onInputChange: (value: number) => void;
  setIsShown: (value: boolean) => void;
}

function Input({
  attribute,
  inputName,
  onInputChange,
  setIsShown,
}: InputProps) {
  const onInputChangeFinal = (
    event: React.ChangeEvent<HTMLInputElement>,
    eventCallback: (value: number) => void
  ) => {
    eventCallback(Number(event.target.value));
    setIsShown(false);
  };

  const { lightTheme } = useThemeContext();
  let themeStyle: string = " bg-indigo-50";
  if (!lightTheme) {
    themeStyle = "bg-inputDark";
  }
  return (
    <label
      className="flex-row justify-between flex gap-10 items-center"
      htmlFor={attribute}
    >
      {inputName}
      <input
        data-test-id={attribute}
        onChange={(event) => onInputChangeFinal(event, onInputChange)}
        className={`${themeStyle} shadow-inner rounded-lg px-2 py-1 outline-sky-400`}
        type="text"
        name={attribute}
        id={attribute}
      />
    </label>
  );
}

export default Input;
