import React from "react";

const Page = React.forwardRef((props, ref) => {
  return (
      <div className="page" ref={ref} data-density="soft">
          <div className="page-content">
            <img className="w-100" src={require(`../../assets/journal/${props.number}.jpg`)} alt={props.number}/>
            <p className="vh-25 p-5 text">{props.children}</p>
          </div>
      </div>
  );
});

export default Page;