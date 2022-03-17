interface MyButtonProps {
  text: string;
  type: string;
  onClick: any;
}

const MyButton = ({ text, type, onClick }: MyButtonProps) => {
  const btnType = [`postive`, `negative`].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
