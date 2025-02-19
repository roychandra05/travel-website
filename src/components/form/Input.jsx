const Input = ({
  name,
  type,
  label,
  error,
  disabled,
  placeholder,
  defaultValue,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className={`${error ? "text-red-600" : "text-white"}`}
      >
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        autoComplete={name === "subject" ? "off" : name}
        id={name}
        disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className={`${
          error ? "border-red-600 focus:border-red-600" : "border-white"
        } border-2 text-black px-1 rounded-lg h-8 focus:outline-none transition-all duration-200`}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};
export default Input;
