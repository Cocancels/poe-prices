interface SelectProps {
  options: string[];
  value: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = (props: SelectProps) => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className={props.className ?? props.className}
    >
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
