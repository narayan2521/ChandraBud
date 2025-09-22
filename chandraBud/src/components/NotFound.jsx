import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Notfound from '../assets/404-giphy-.gif'

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
          
        <motion.div>
            <img src={Notfound} alt="404-gif"   />
        </motion.div>
      
      {/* Animated 404 text */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-xl sm:text-2xl text-gray-300 text-center"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
      >
        Go Back Home
      </motion.button>

      {/* Floating animation effect */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 text-sm text-gray-500"
      >
        Lost in the void...
      </motion.div>
    </div>
  );
}
