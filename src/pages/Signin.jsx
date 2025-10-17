import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      // In your actual project, replace with:
      // navigate("/dashboard", { state: { email: formData.email } });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black py-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-80" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-20 left-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          {!isLoggedIn ? (
            <motion.div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10">
                {/* Header */}
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-8"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative mb-6 inline-block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-50" />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
                      alt="PopX Logo"
                      className="relative w-20 h-20 drop-shadow-2xl"
                    />
                  </motion.div>

                  <h1 className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 tracking-tight mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Sign in to your PopX account and continue your journey
                  </p>
                </motion.div>

                {/* Form */}
                <div className="space-y-5">
                  {/* Email Input */}
                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-2 block">
                      Email Address <span className="text-pink-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 z-10" />
                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full py-3 pl-12 pr-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Password Input */}
                  <motion.div
                    variants={itemVariants}
                    className="relative group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                        Password <span className="text-pink-400">*</span>
                      </label>
                      <span className="text-xs text-purple-400 hover:text-pink-400 cursor-pointer transition-colors">
                        Forgot?
                      </span>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 z-10" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full py-3 pl-12 pr-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors z-10"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none" />
                    </div>
                  </motion.div>

                  {/* Remember Me & Forgot Password */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-between text-sm"
                  >
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 appearance-none border border-white/30 rounded checked:bg-purple-500 checked:border-purple-500 cursor-pointer transition-all"
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        Remember me
                      </span>
                    </label>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={itemVariants}
                    whileHover={
                      formData.email && formData.password
                        ? {
                            scale: 1.02,
                            boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
                          }
                        : {}
                    }
                    whileTap={
                      formData.email && formData.password ? { scale: 0.98 } : {}
                    }
                    onClick={handleSubmit}
                    disabled={
                      !formData.email || !formData.password || isLoading
                    }
                    className={`w-full py-4 mt-8 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group ${
                      formData.email && formData.password
                        ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-lg hover:shadow-2xl"
                        : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10 flex items-center gap-2">
                          Sign In
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Divider */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4 my-8"
                >
                  <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                  <span className="text-xs text-gray-500">OR</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-white/10 to-transparent" />
                </motion.div>

                {/* Social Sign In */}
                <motion.div variants={itemVariants} className="flex gap-3">
                  {["Google", "GitHub"].map((social) => (
                    <button
                      key={social}
                      className="flex-1 py-3 bg-white/5 border border-white/20 hover:border-purple-500/50 hover:bg-purple-500/10 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4" />
                      <span className="hidden sm:inline text-sm">{social}</span>
                    </button>
                  ))}
                </motion.div>

                {/* Footer */}
                <motion.p
                  variants={itemVariants}
                  className="text-center text-gray-400 text-sm mt-8"
                >
                  Don't have an account?{" "}
                  <span
                    className="text-purple-400 font-semibold hover:text-pink-400 cursor-pointer transition-colors"
                    onClick={() => navigate("/signup")}
                  >
                    Create one
                  </span>
                </motion.p>

                {/* Trust Badge */}
                <motion.div
                  variants={itemVariants}
                  className="text-center text-xs text-gray-500 mt-6 pt-6 border-t border-white/10"
                >
                  🔒 Secure login. Powered by{" "}
                  <span className="font-semibold text-purple-400">PopX</span>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            // Success State
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 rounded-3xl blur opacity-75" />

              <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl font-bold text-white mb-3"
                >
                  Welcome Back! 🚀
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-lg mb-8 leading-relaxed"
                >
                  You're logged in successfully to{" "}
                  <span className="font-bold text-purple-400">
                    {formData.email}
                  </span>
                  <br />
                  Get ready to unlock amazing opportunities!
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsLoggedIn(false);
                    setFormData({ email: "", password: "" });
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Sign In Again
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-400 text-sm mt-6"
                >
                  Redirecting to dashboard in{" "}
                  <span className="font-bold text-purple-400">3</span>{" "}
                  seconds...
                </motion.p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Signin;
