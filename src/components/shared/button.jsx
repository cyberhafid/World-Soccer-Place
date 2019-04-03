// import React from 'react';
import { Button } from 'reactstrap' ;

// export default class MyButton extends React.Component {
//   render() {
//     return (
//       <div>
//         <Button color="primary">primary</Button>{' '}
//       </div>
//     );
//   }
// }
import React from "react";

const MyButton = ({ colorButton, nameButton, btnNavClass}) => (
  <Button color={colorButton} className={btnNavClass}>{nameButton}</Button>
);

export default MyButton;