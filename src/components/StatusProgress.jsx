import React from 'react';
import { motion } from 'framer-motion';

const steps = ['Checked In', 'Loaded', 'In Transit', 'Delivered'];

const StatusProgress = ({ currentStatus }) => {
  const activeIndex = steps.indexOf(currentStatus);

  return (
    <div className="status-progress">
      {steps.map((step, index) => (
        <motion.div
          key={step}
          className={`step ${index <= activeIndex ? 'active' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <span className="circle">{index + 1}</span>
          <span className="label">{step}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default StatusProgress;