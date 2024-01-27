// // type InputChangeCallback = (event: React.ChangeEvent<HTMLInputElement>) => void;
// type InputChangeCallback = (value: number) => void;

// type OnInputChangeProp = (
//   event: React.ChangeEvent<HTMLInputElement>,
//   callback: InputChangeCallback
// ) => void;

// export interface InputProps {
//   attribute: string;
//   inputName: string;
//   //   onInputChange: OnInputChangeProp;
//   onInputChange: (
//     event: React.ChangeEvent<HTMLInputElement>,
//     callback: InputChangeCallback
//   ) => void;
// }

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
    callback: (value: number) => void
  ) => {
    callback(Number(event.target.value));
    setIsShown(false);
  };
  return (
    <label
      className="flex-row justify-between flex gap-10 items-center"
      htmlFor={attribute}
    >
      {inputName}
      <input
        data-test-id={attribute}
        onChange={(event) => onInputChangeFinal(event, onInputChange)}
        className="bg-indigo-50 rounded-lg px-2 py-1 outline-sky-400 "
        type="text"
        name={attribute}
        id={attribute}
      />
    </label>
  );
}

export default Input;
