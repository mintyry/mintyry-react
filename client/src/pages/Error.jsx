import { useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <motion.div
      id="error-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{duration: 1, ease: 'easeOut'}}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </motion.div>
  );
}
