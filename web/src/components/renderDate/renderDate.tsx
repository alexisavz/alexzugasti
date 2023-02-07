import * as React from "react";
import './renderDate.scss'

interface DateProps {
    data: string;
    until: string;
    text: string;
  }

const RenderDate = (props: DateProps) => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const date = props.data.split('-')
  var retString=""

  switch(props.until) {
    case 'year':
         retString = " " + date[0]
        break;
    case 'month':
        retString = " " + months[parseInt(date[1])] + " " + date[0]
        break;
    case 'day':
        retString = " " + months[parseInt(date[1])] + " " + date[2] + ", " + date[0]
        break;
  }

  return(
    <p className="dateCont-text"> <span>{props.text}</span> {retString}</p>
  );
};

export default RenderDate;