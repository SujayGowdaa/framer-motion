import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const divVariant = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      when: 'beforeChildren',
      damping: 8,
      mass: 0.8,
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: '-100vw',
    transition: 'easeInOut',
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, [setShowModal]);

  return (
    <motion.div
      className='container order'
      variants={divVariant}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={childVariants}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
