import React, { ReactNode } from "react";
import "./card.css";

interface IProps {
  children: ReactNode;
  customClass?: string;
}

const Card = ({ children, customClass }: IProps): React.ReactElement => {
  return (
    <div className="card">
      <div className="card-container">{children}</div>
    </div>
  );
};

export default Card;
