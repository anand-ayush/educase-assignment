import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Phone,
  User,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In your actual project, replace this with:
    // navigate("/dashboard", { state: { fullname: formData.fullname, email: formData.email } });
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

  const InputField = ({
    icon: Icon,
    label,
    type,
    name,
    placeholder,
    required,
  }) => (
    <motion.div variants={itemVariants} className="relative group">
      <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-2 block">
        {label} {required && <span className="text-pink-400">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 z-10" />
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          className="w-full py-3 pl-12 pr-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-black py-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-80" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-15"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-15"
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
          className="w-full max-w-2xl"
        >
          {!isSubmitted ? (
            <motion.div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10">
                {/* Header */}
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-10"
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

                  <h1 className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 tracking-tight mb-3">
                    Join PopX
                  </h1>
                  <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                    Create your account and unlock incredible opportunities to
                    connect, learn, and grow with our thriving developer
                    community.
                  </p>
                </motion.div>

                {/* Form */}
                <div onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      icon={User}
                      label="Full Name"
                      type="text"
                      name="fullname"
                      placeholder="John Doe"
                      required
                    />
                    <InputField
                      icon={Phone}
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  {/* Email and Password Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      icon={Mail}
                      label="Email Address"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                    />
                    <InputField
                      icon={Lock}
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  {/* Company Name */}
                  <InputField
                    icon={Building2}
                    label="Company Name"
                    type="text"
                    name="companyName"
                    placeholder="Your Company"
                    required={false}
                  />

                  {/* Agency Radio Buttons */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
                  >
                    <label className="text-sm font-semibold text-white mb-4 block">
                      Are you an Agency?{" "}
                      <span className="text-pink-400">*</span>
                    </label>
                    <div className="flex gap-6">
                      {["Yes", "No"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <div className="relative">
                            <input
                              type="radio"
                              name="agency"
                              value={option}
                              checked={formData.agency === option}
                              onChange={handleChange}
                              className="w-5 h-5 appearance-none border-2 border-white/30 rounded-full cursor-pointer checked:border-purple-500 checked:bg-purple-500 transition-all duration-300"
                            />
                            {formData.agency === option && (
                              <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white pointer-events-none" />
                            )}
                          </div>
                          <span className="text-white font-medium group-hover:text-purple-300 transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full py-4 mt-8 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Create My Account
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </div>

                {/* Footer */}
                <motion.p
                  variants={itemVariants}
                  className="text-center text-gray-400 text-sm mt-8"
                >
                  Already have an account?{" "}
                  <span
                    className="text-purple-400 font-semibold hover:text-pink-400 cursor-pointer transition-colors"
                    onClick={() => navigate("/login")}
                  >
                    Sign in
                  </span>
                </motion.p>

                {/* Trust Badge */}
                <motion.div
                  variants={itemVariants}
                  className="text-center text-xs text-gray-500 mt-6 pt-6 border-t border-white/10"
                >
                  🔒 Your data is safe and secure. Powered by{" "}
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
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                >
                  <Check className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl font-bold text-white mb-3"
                >
                  Welcome to PopX! 🎉
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-lg mb-8 leading-relaxed"
                >
                  Your account has been created successfully,{" "}
                  <span className="font-bold text-purple-400">
                    {formData.fullname}
                  </span>
                  !
                  <br />A verification link has been sent to{" "}
                  <span className="font-semibold text-pink-400">
                    {formData.email}
                  </span>
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullname: "",
                      phone: "",
                      email: "",
                      password: "",
                      companyName: "",
                      agency: "",
                    });
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Create Another Account
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-400 text-sm mt-6"
                >
                  Redirecting to dashboard in{" "}
                  <span className="font-bold text-purple-400">5</span>{" "}
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

export default Signup;
