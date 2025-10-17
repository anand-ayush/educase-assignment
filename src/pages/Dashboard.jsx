import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Edit2,
  Save,
  X,
  Mail,
  User,
  FileText,
  Badge,
  Shield,
  LogOut,
  Settings,
  Share2,
  Heart,
} from "lucide-react";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    fullname: "Marry Doe",
    email: "marry@gmail.com",
    bio: "Full-stack developer passionate about building amazing products. Coffee enthusiast and open-source contributor.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState(userData);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value });
  };

  const handleSave = () => {
    setUserData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(userData);
    setIsEditing(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black py-8 px-4 sm:px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-80" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-15"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-15"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />

      {/* Main Content */}
      <div className="relative z-10 flex justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 tracking-tight">
                Dashboard
              </h1>
              <p className="text-gray-400 text-lg mt-2">
                Manage your PopX profile
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/10 border border-white/20 hover:border-purple-500/50 hover:bg-purple-500/10 rounded-xl text-white transition-all duration-300"
            >
              <Settings className="w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* Main Card */}
          <motion.div variants={itemVariants} className="relative group mb-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500" />

            <div className="relative bg-black/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10">
              {/* Profile Header Section */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pb-8 border-b border-white/10">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group/image flex-shrink-0"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-50 group-hover/image:opacity-100 transition duration-300" />
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg"
                    alt="profile"
                    className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover border-2 border-white/20 shadow-2xl"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all"
                  >
                    <Camera className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>

                {/* Profile Info */}
                <div className="flex-1 flex flex-col justify-center">
                  {isEditing ? (
                    <motion.div variants={itemVariants} className="space-y-4">
                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-2 block">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 z-10" />
                          <input
                            type="text"
                            name="fullname"
                            value={tempData.fullname}
                            onChange={handleChange}
                            className="w-full py-3 pl-12 pr-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                          />
                        </div>
                      </div>

                      <div className="relative group">
                        <label className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-2 block">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 z-10" />
                          <input
                            type="email"
                            name="email"
                            value={tempData.email}
                            onChange={handleChange}
                            className="w-full py-3 pl-12 pr-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div variants={itemVariants}>
                      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        {userData.fullname}
                      </h2>
                      <div className="flex items-center gap-2 text-gray-300 mb-4">
                        <Mail className="w-4 h-4 text-purple-400" />
                        <p className="text-lg">{userData.email}</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 border border-green-500/50 text-green-400">
                          ✓ Active
                        </span>
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-400">
                          Premium Member
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Bio Section */}
              <motion.div
                variants={itemVariants}
                className="mt-8 pb-8 border-b border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    Bio
                  </label>
                </div>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={tempData.bio}
                    onChange={handleChange}
                    rows="4"
                    className="w-full py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm resize-none"
                  />
                ) : (
                  <p className="text-gray-300 leading-relaxed">
                    {userData.bio}
                  </p>
                )}
              </motion.div>

              {/* Stats Section */}
              <motion.div
                variants={itemVariants}
                className="mt-8 pb-8 border-b border-white/10"
              >
                <h3 className="text-sm font-semibold text-white mb-4">
                  Account Overview
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    {
                      icon: Badge,
                      label: "Membership",
                      value: "Premium",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: Shield,
                      label: "Status",
                      value: "Active",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: Heart,
                      label: "Followers",
                      value: "1.2K",
                      color: "from-pink-500 to-rose-500",
                    },
                    {
                      icon: Share2,
                      label: "Posts",
                      value: "42",
                      color: "from-blue-500 to-cyan-500",
                    },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="p-4 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 rounded-2xl backdrop-blur-sm transition-all"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} p-2 mb-3`}
                      >
                        <stat.icon className="w-full h-full text-white" />
                      </div>
                      <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-white">
                        {stat.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                {isEditing ? (
                  <>
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSave}
                      className="flex-1 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Save className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Save Changes
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCancel}
                      className="flex-1 py-3 bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <X className="w-5 h-5" />
                      Cancel
                    </motion.button>
                  </>
                ) : (
                  <>
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setTempData(userData);
                        setIsEditing(true);
                      }}
                      className="flex-1 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <Edit2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Edit Profile
                    </motion.button>

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3 bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <LogOut className="w-5 h-5" />
                      Sign Out
                    </motion.button>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "🔒 Security",
                description: "Manage your password and security settings",
                icon: Shield,
              },
              {
                title: "⚙️ Preferences",
                description: "Customize your notification and privacy settings",
                icon: Settings,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 via-pink-500/50 to-orange-500/50 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500" />

                <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">
                      {card.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="p-2 bg-purple-500/20 rounded-lg"
                    >
                      <card.icon className="w-5 h-5 text-purple-400" />
                    </motion.div>
                  </div>
                  <p className="text-gray-400 text-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
