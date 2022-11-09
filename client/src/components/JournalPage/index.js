import React from "react";

const Page = React.forwardRef((props, ref) => {
  return (
      <div className="page" ref={ref}>
          <div className="page-content">
            <h2 className="page-header">Sea Stories - {props.number}</h2>
            <img src={require(`../../assets/journal/${props.number}.jpg`)} alt={props.number}/>
            <div className="page-text">{props.children}</div>
            <p>Page number: {props.number}</p>
          </div>
      </div>
  );
});

export default Page;