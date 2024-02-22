import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modal = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: '200px',
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: '100vh',
  },
};

export default function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence mode='wait'>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <motion.div className='modal' variants={modal}>
            <p>Order pizza again</p>
            <Link to='/'>
              <button onClick={() => setShowModal(false)}>Order</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
