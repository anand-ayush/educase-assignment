import { motion } from "framer-motion";
import { Zap, Users, Rocket, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-orange-900 opacity-80" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-15"
        animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl"
        >
          {/* Main Card */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10">
              {/* Header Section */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  animate={floatingVariants.animate}
                  className="relative mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-50" />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
                    alt="Welcome"
                    className="relative w-28 h-28 drop-shadow-2xl"
                  />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 tracking-tighter leading-tight"
                >
                  Welcome to <br /> <span className="text-white">PopX</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-gray-300 text-base sm:text-lg mt-6 max-w-sm leading-relaxed"
                >
                  The easiest way to connect, learn, and grow with a thriving
                  developer community. Build your future, one interaction at a
                  time.
                </motion.p>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 my-10"
              >
                {[
                  { icon: Zap, label: "Fast" },
                  { icon: Users, label: "Social" },
                  { icon: Rocket, label: "Launch" },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 hover:border-pink-400/60 transition-all duration-300 backdrop-blur"
                  >
                    <feature.icon className="w-6 h-6 text-pink-400 mb-2" />
                    <span className="text-xs font-semibold text-gray-200">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons Section */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4 mt-8"
              >
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/signup")}
                  className="group w-full py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Create Account
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/login")}
                  className="group w-full py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-xl flex items-center justify-center gap-2"
                >
                  <span className="flex items-center gap-2">
                    Already Registered? Login
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </motion.div>

              {/* Footer Text */}
              <motion.p
                variants={itemVariants}
                className="text-center text-gray-500 text-xs mt-8"
              >
                Join thousands of developers building amazing things
              </motion.p>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-2 mt-8"
          >
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
