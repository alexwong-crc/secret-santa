import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const Container = (props: IProps) => {
  return (
    <div>
      Container
      {props.children}
    </div>
  );
};

export default Container;
