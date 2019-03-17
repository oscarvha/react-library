import React from 'react'
import {IoIosBook, IoLogoGameControllerB} from "react-icons/io";
import {MdMovie} from "react-icons/md";
import {WHITE_COLOR} from "../../constants/variables";


const IconTypeResource = ({typeResource, size = 1, color = WHITE_COLOR}) => {

  let icon = '';
  switch(typeResource)  {
    case 'games':
      icon = <IoLogoGameControllerB size={`${size}em`} color={`${color}`} className={`icon--left`}/>;
      break;
    case 'books':
      icon = <IoIosBook size={`${size}em`} color={`${color}`} className={`icon--left`}/>;
      break;
    case 'movies':
      icon = <MdMovie size={`${size}em`} color={`${color}`} className={`icon--left`}/>;
      break;
    default:
      break;
  }

 return(
   <React.Fragment>
     {icon}
  </React.Fragment>
 )
};

export default IconTypeResource;