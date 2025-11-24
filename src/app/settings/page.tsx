"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Globe,
  Bell,
  Link as LinkIcon,
  Shield,
  Settings as SettingsIcon,
  CreditCard,
  HelpCircle,
  LogOut,
  Phone,
  RefreshCw,
  Eye,
  Trash2,
  FileText,
  Download,
  Mail,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const [language, setLanguage] = useState("English");
  const [textSize, setTextSize] = useState("Medium");
  const [voiceGuidance, setVoiceGuidance] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [emailReceipts, setEmailReceipts] = useState(true);
  const [monthlySummary, setMonthlySummary] = useState(false);
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);
  const [autoShowReceipts, setAutoShowReceipts] = useState(true);
  const [skipSplash, setSkipSplash] = useState(false);
  const [touchSensitivity, setTouchSensitivity] = useState("Normal");
  const [cameraBrightness, setCameraBrightness] = useState("Auto");
  const [autoLogout, setAutoLogout] = useState("60s");

  function handleLogout() {
    if (confirm("Are you sure you want to log out?")) {
      alert("Logged out successfully");
      // Navigate to home or auth page
      window.location.href = "/";
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="orbital-gradient" aria-hidden />
      <div className="grid-overlay" aria-hidden />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/dashboard"
            className="mb-4 inline-flex items-center gap-2 text-slate-300 transition hover:text-cyan-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Manage Your Profile & Preferences
            </h1>
            <p className="text-lg text-slate-300">
              Customize your experience, update your info, and control how the Health Assistance
              Machine interacts with you.
            </p>
          </div>
        </motion.header>

        {/* Profile Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                <User className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">👤 Your Profile</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-sm text-slate-400">Name</div>
                <div className="text-lg font-semibold text-white">Student Name</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-sm text-slate-400">Student ID</div>
                <div className="text-lg font-semibold text-white">Masked ID ••••7821</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-sm text-slate-400">Registered Number</div>
                <div className="text-lg font-semibold text-white">+91 •••• 7821</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-sm text-slate-400">Verified On</div>
                <div className="text-lg font-semibold text-white">22 Nov 2025, 3:42 PM</div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 font-medium text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="h-4 w-4" />
                  Update Phone Number
                </motion.button>
                <motion.button
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 font-medium text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh Student Info
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Language & Accessibility */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">🌐 Language & Accessibility</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Preferred Language
                </label>
                <div className="flex flex-wrap gap-2">
                  {["English", "Hindi", "Regional"].map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        language === lang
                          ? "bg-cyan-400 text-slate-900"
                          : "bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {lang}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Text Size</label>
                <div className="flex flex-wrap gap-2">
                  {["Small", "Medium", "Large"].map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setTextSize(size)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        textSize === size
                          ? "bg-cyan-400 text-slate-900"
                          : "bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">Voice Guidance</span>
                  <button
                    onClick={() => setVoiceGuidance(!voiceGuidance)}
                    className={`relative h-6 w-11 rounded-full transition ${
                      voiceGuidance ? "bg-cyan-400" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition ${
                        voiceGuidance ? "translate-x-5" : ""
                      }`}
                    />
                  </button>
                </label>

                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">High-Contrast Mode</span>
                  <button
                    onClick={() => setHighContrast(!highContrast)}
                    className={`relative h-6 w-11 rounded-full transition ${
                      highContrast ? "bg-cyan-400" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition ${
                        highContrast ? "translate-x-5" : ""
                      }`}
                    />
                  </button>
                </label>

                <label className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">
                    Reduced Motion Mode (for accessibility)
                  </span>
                  <button
                    onClick={() => setReducedMotion(!reducedMotion)}
                    className={`relative h-6 w-11 rounded-full transition ${
                      reducedMotion ? "bg-cyan-400" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition ${
                        reducedMotion ? "translate-x-5" : ""
                      }`}
                    />
                  </button>
                </label>
              </div>

              <motion.button
                className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Changes
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Notifications & Alerts */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">🔔 Notifications & Alerts</h2>
                <p className="text-sm text-slate-400">
                  Based on your previous usage, we can notify you about:
                </p>
              </div>
            </div>

            <div className="mb-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3">
              <ul className="space-y-1 text-sm text-amber-200">
                <li>• Receipt deliveries</li>
                <li>• Low-stock alerts for frequently purchased items</li>
                <li>• Health tips based on seasonal changes</li>
                <li>• High-fever or severe-symptom safety warnings</li>
              </ul>
            </div>

            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-300">SMS Alerts</span>
                </div>
                <button
                  onClick={() => setSmsAlerts(!smsAlerts)}
                  className={`relative h-6 w-11 rounded-full transition ${
                    smsAlerts ? "bg-cyan-400" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition ${
                      smsAlerts ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </label>

              <label className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-300">Email Receipts</span>
                </div>
                <button
                  onClick={() => setEmailReceipts(!emailReceipts)}
                  className={`relative h-6 w-11 rounded-full transition ${
                    emailReceipts ? "bg-cyan-400" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition ${
                      emailReceipts ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </label>

              <label className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-300">Monthly Usage Summary</span>
                </div>
                <button
                  onClick={() => setMonthlySummary(!monthlySummary)}
                  className={`relative h-6 w-11 rounded-full transition ${
                    monthlySummary ? "bg-cyan-400" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition ${
                      monthlySummary ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </label>

              <label className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-300">Emergency Alerts</span>
                </div>
                <button
                  onClick={() => setEmergencyAlerts(!emergencyAlerts)}
                  className={`relative h-6 w-11 rounded-full transition ${
                    emergencyAlerts ? "bg-cyan-400" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition ${
                      emergencyAlerts ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </label>
            </div>
          </div>
        </motion.section>

        {/* Connected Accounts */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">🧩 Connected Accounts</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <div>
                  <div className="font-medium text-white">Linked Student Database</div>
                  <div className="text-sm text-green-400">Active</div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <div>
                  <div className="font-medium text-white">Hostel/Residential System</div>
                  <div className="text-sm text-slate-400">Not Linked</div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <div>
                  <div className="font-medium text-white">Library Card Sync</div>
                  <div className="text-sm text-slate-400">Optional</div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4">
                <div>
                  <div className="font-medium text-white">Health Center Portal</div>
                  <div className="text-sm text-cyan-300">
                    (Recommended for AI analysis users)
                  </div>
                </div>
              </div>

              <motion.button
                className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Manage Connections
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Privacy & Security */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-400 to-rose-500">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">🔐 Privacy & Security</h2>
            </div>

            <div className="mb-4 space-y-2 text-sm text-slate-300">
              <p>• We protect your identity using secure student tokens.</p>
              <p>• No personal medical records are stored</p>
              <p>• Only masked identity logs are kept for audit safety</p>
              <p>• You can delete your usage logs anytime</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.button
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 font-medium text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="h-4 w-4" />
                View My Data
              </motion.button>
              <motion.button
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-3 font-medium text-red-300 transition hover:border-red-500 hover:bg-red-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Trash2 className="h-4 w-4" />
                Delete My Logs
              </motion.button>
              <motion.button
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 font-medium text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="h-4 w-4" />
                Privacy Policy
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Machine Preferences */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500">
                <SettingsIcon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">🛠 Machine Preferences</h2>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Auto-show Receipts</span>
                <button
                  onClick={() => setAutoShowReceipts(!autoShowReceipts)}
                  className={`relative h-6 w-11 rounded-full transition ${
                    autoShowReceipts ? "bg-cyan-400" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition ${
                      autoShowReceipts ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </label>

              <label className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Skip Splash Screen</span>
                <button
                  onClick={() => setSkipSplash(!skipSplash)}
                  className={`relative h-6 w-11 rounded-full transition ${
                    skipSplash ? "bg-cyan-400" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition ${
                      skipSplash ? "translate-x-5" : ""
                    }`}
                  />
                </button>
              </label>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Touch Sensitivity
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Normal", "High"].map((sensitivity) => (
                    <motion.button
                      key={sensitivity}
                      onClick={() => setTouchSensitivity(sensitivity)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        touchSensitivity === sensitivity
                          ? "bg-cyan-400 text-slate-900"
                          : "bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {sensitivity}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Camera Brightness Boost
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Auto", "Manual"].map((brightness) => (
                    <motion.button
                      key={brightness}
                      onClick={() => setCameraBrightness(brightness)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        cameraBrightness === brightness
                          ? "bg-cyan-400 text-slate-900"
                          : "bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {brightness}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Auto-Logout Timer
                </label>
                <div className="flex flex-wrap gap-2">
                  {["30s", "60s", "90s"].map((timer) => (
                    <motion.button
                      key={timer}
                      onClick={() => setAutoLogout(timer)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        autoLogout === timer
                          ? "bg-cyan-400 text-slate-900"
                          : "bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {timer}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Billing & Payments */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">🧾 Billing & Payments</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 text-sm text-slate-400">Saved UPI Handles</div>
                <div className="text-sm text-white">••••@paytm</div>
                <div className="text-sm text-white">••••@phonepe</div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.button
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 font-medium text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="h-4 w-4" />
                  Transaction History
                </motion.button>
                <motion.button
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 font-medium text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="h-4 w-4" />
                  Download Payment Summary
                </motion.button>
                <motion.button
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 font-medium text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CreditCard className="h-4 w-4" />
                  Manage Payment Options
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Support & Helpdesk */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">💬 Support & Helpdesk</h2>
            </div>

            <div className="space-y-3">
              {[
                "Contact Campus Admin",
                "Report a Machine Issue",
                "Frequently Asked Questions",
                "Emergency Medical Contact",
              ].map((item) => (
                <motion.button
                  key={item}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left font-medium text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.button>
              ))}

              <motion.button
                className="w-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 font-semibold text-white shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Help Now
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Logout Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-400 to-rose-500">
                <LogOut className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">🔄 Logout Section</h2>
                <p className="text-sm text-slate-400">
                  For security, you&apos;re automatically logged out after inactivity.
                </p>
              </div>
            </div>

            <motion.button
              onClick={handleLogout}
              className="w-full rounded-full border-2 border-red-500/50 bg-red-500/10 px-6 py-4 font-semibold text-red-300 transition hover:border-red-500 hover:bg-red-500/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2">
                <LogOut className="h-5 w-5" />
                Log Out Securely
              </div>
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}


