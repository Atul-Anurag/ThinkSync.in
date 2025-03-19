import { useState } from "react";
import "./LoginPage.css";
import { motion } from "framer-motion";
// import BrainSVG from "./brain.svg"; // Add an SVG relevant to ThinkSync
// import NotesSVG from "./notes.svg";
import NoteBookSVG from "./notebook.svg"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="modal-container standing-rectangle brighter-theme"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h2 className="modal-title">Welcome Back</h2>
        
        {/* ThinkSync Animated Graphic */}
        <motion.div 
          className="login-graphic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: email ? 10 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src={NoteBookSVG} 
            alt="ThinkSync Brain Animation" 
            className="sync-icon" 
            animate={{ rotate: email ? 10 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="modal-input-wrapper"
          whileFocus={{ scale: 1.05 }}
        >
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="modal-input equal-size-button"
          />
        </motion.div>
        <motion.div 
          className="modal-password-wrapper password-container"
          whileFocus={{ scale: 1.05 }}
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="modal-input password-input equal-size-button"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="password-toggle"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </motion.div>
        <motion.button 
          className="modal-button equal-size-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
