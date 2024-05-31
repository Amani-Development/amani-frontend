import { FC } from "react";
import "./index.css";

interface Props {
    selected?: boolean;
    label: string;
    onClick?: any;
    style?: React.CSSProperties | undefined;
}

const CustomRadio: FC<Props> = ({
    selected,
    label,
    onClick,
    style,
}): JSX.Element => {
    return (
        <div className={`cursor-pointer w-fit`} onClick={onClick} style={style}>
            <div className="flex items-center">
                {selected ? (
                    <svg
                        width="24" // Increased width for larger circles
                        height="24" // Increased height for larger circles
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="11"
                            fill="#fff"
                            stroke="black"
                        />{" "}
                        {/* Changed size, fill, and added stroke */}
                        <circle cx="12" cy="12" r="6" fill="black" />
                    </svg>
                ) : (
                    <svg
                        width="24" // Increased width for larger circles
                        height="24" // Increased height for larger circles
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="10.5" stroke="black" />{" "}
                        {/* Changed size and added stroke */}
                    </svg>
                )}
                <p className={`text-[#222436] font-light text-sm ml-2`}>
                    {label}
                </p>
            </div>
        </div>
    );
};

export default CustomRadio;
