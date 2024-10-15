interface CustomButtonProp
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: string;
}

const CustomButton = ({ text, icon, className }: CustomButtonProp) => {
  return (
    <button className={`bg-[#4C7F00] flex justify-center items-center p-4 rounded-[50px] ${className}`}>
      <span>
        <img src={icon} alt="" />{" "}
      </span>
      <span className="ml-4 text-white text-sm leading-[15px] font-bold">{text}</span>
    </button>
  );
};

export default CustomButton;
