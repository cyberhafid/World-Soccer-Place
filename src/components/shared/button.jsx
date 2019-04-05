import { Button } from 'reactstrap' ;
import React from "react";

const MyButton = ({ colorButton, nameButton, btnNavClass, onClick}) => (
  <Button onClick={onClick} color={colorButton} className={btnNavClass}>{nameButton}</Button>
);

export default MyButton;