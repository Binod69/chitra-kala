'use client';
import { Button } from '@nextui-org/react';
import React from 'react';

const Btn = ({ title, variant, className, icons }) => {
  return (
    <>
      <Button className={className} variant={variant}>
        {title} {icons}
      </Button>
    </>
  );
};

export default Btn;
