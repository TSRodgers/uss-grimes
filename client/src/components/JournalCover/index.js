import React from 'react'

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page flex" ref={ref} data-density="soft">
      <div className="text-center align-items-center justify-content-center mt-5 pt-5">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

export default PageCover;