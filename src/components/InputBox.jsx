const InputBox = ({
  text,
  type,
  name,
  placeholder,
  required,
  value,
  onChange,
}) => {
  return (
    <fieldset className="border border-gray-300 rounded-md px-3 py-1 focus-within:border-purple-600">
      <legend className="text-xs text-primary px-2">
        {text} {required && <span className="text-red">*</span>}
      </legend>
      <input
        className="w-full outline-none border-0 placeholder-gray"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default InputBox;
