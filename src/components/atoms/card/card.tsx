import React, { ReactNode } from "react";
import "./card.css";

interface IProps {
  children: ReactNode;
  customClass?: string;
  title?: string;
}

const Card = ({ children, customClass, title }: IProps): React.ReactElement => {
  return (
    <div className="card">
      <div className="title">{title}</div>
      <div className="card-container">{children}</div>
    </div>
  );
};

export default Card;
