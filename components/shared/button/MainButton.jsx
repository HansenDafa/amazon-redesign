import { motion } from "framer-motion";

export default function MainButton({ children, className }) {
  return (
    <motion.button
      transition={1}
      className={`bg-dark-yellow text-white text-xl ease-in-out font-bold px-4 py-2 rounded-lg drop-shadow-xl hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </motion.button>
  );
}
