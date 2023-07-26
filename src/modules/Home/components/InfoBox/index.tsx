import { ContainerBox } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant: "blue" | "red";
}

const InfoBox = ({ variant, ...props }: Props) => {
  return <ContainerBox variant={variant} {...props}></ContainerBox>;
};

export default InfoBox;
