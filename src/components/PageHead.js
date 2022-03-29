import React from 'react';
import './PageHead.scss';
const PageHead = ({ title }) => {
  return (
    <>
      <h1 className="pagehead">{title}</h1>
      <h1 className="pagehead-outline">{title}</h1>
    </>
  );
};

export default PageHead;
