import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className='base container'
      variants={divVariant}
      initial={'hidden'}
      animate={'visible'}
      exit='exit'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.2,
                color: '#f8e122',
                originX: 0,
                transition: { type: 'spring', stiffness: 1000 },
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className='next' variants={nextVariant}>
          <Link to='/toppings'>
            <motion.button variants={btnVariants} whileHover='hover'>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
