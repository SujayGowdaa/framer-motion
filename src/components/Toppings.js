import React from 'react';
import { Link } from 'react-router-dom';
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
      delay: 0.2,
    },
  },
  exit: {
    x: '-100vw',
    transition: 'easeInOut',
  },
};

const nextVariant = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const btnVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      repeat: Infinity,
      repeatDelay: 0.2,
      ease: 'easeInOut',
    },
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  return (
    <motion.div
      className='toppings container'
      variants={divVariant}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.2,
                color: '#f8e122',
                originX: 0,
                transition: { type: 'spring', stiffness: 1000 },
              }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to='/order'>
        <motion.div variants={nextVariant}>
          <motion.button variants={btnVariants} whileHover='hover'>
            Order
          </motion.button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Toppings;
