"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Upload,
  X,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Shield,
  ArrowLeft,
  Loader2,
  Stethoscope,
  Bandage,
  Pill,
  Activity,
} from "lucide-react";
import Link from "next/link";

type SeverityLevel = "Low" | "Moderate" | "High";
type Category = "Cut" | "Rash" | "Burn" | "Swelling" | "Skin Irritation" | "Fever" | "Sprain" | "Other";

interface AISuggestion {
  category: Category;
  confidence: number;
  severity: SeverityLevel;
  needsDoctor: boolean;
  suggestedItems: string[];
}

const exampleDescriptions = [
  "Fever since morning, slight headache",
  "Small cut on finger while using cutter",
  "Red patches after touching chemicals",
  "Mild ankle sprain during sports",
];

export default function HealthAnalysisPage() {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<AISuggestion | null>(null);
  const [showUrgentAlert, setShowUrgentAlert] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  function analyzeInput() {
    // Simulate AI analysis
    const hasImage = !!image;
    const desc = description.toLowerCase();

    // Detect category
    let category: Category = "Other";
    if (desc.includes("cut") || desc.includes("wound")) category = "Cut";
    else if (desc.includes("rash") || desc.includes("red patches")) category = "Rash";
    else if (desc.includes("burn")) category = "Burn";
    else if (desc.includes("swelling") || desc.includes("swollen")) category = "Swelling";
    else if (desc.includes("sprain")) category = "Sprain";
    else if (desc.includes("fever")) category = "Fever";
    else if (hasImage) category = "Cut"; // Default for images

    // Detect severity and urgency
    const urgentKeywords = ["severe", "excessive", "deep", "fracture", "broken", "unconscious"];
    const isUrgent = urgentKeywords.some((keyword) => desc.includes(keyword)) || category === "Burn";

    const severity: SeverityLevel = isUrgent ? "High" : desc.includes("mild") ? "Low" : "Moderate";

    // Suggested items
    const suggestedItems: string[] = [];
    if (category === "Cut") {
      suggestedItems.push("Bandage", "Antiseptic", "Cotton");
    } else if (category === "Burn") {
      suggestedItems.push("Burn Gel", "Bandage", "Pain Relief");
    } else if (category === "Fever") {
      suggestedItems.push("Fever Tablet", "ORS", "Thermometer");
    } else if (category === "Sprain") {
      suggestedItems.push("Cold Pack", "Bandage", "Pain Relief");
    } else {
      suggestedItems.push("Antiseptic", "Bandage");
    }

    const suggestion: AISuggestion = {
      category,
      confidence: hasImage ? 85 : 65,
      severity,
      needsDoctor: isUrgent || severity === "High",
      suggestedItems,
    };

    setSuggestions(suggestion);
    setShowUrgentAlert(isUrgent || severity === "High");
  }

  useEffect(() => {
    // Simulate AI analysis when image or description changes
    if (image || description.length > 10) {
      analyzeInput();
    } else {
      setSuggestions(null);
      setShowUrgentAlert(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image, description]);

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleCaptureClick() {
    setShowCamera(true);
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((err) => {
        console.error("Camera error:", err);
        alert("Camera access denied. Please use upload instead.");
        setShowCamera(false);
      });
  }

  function capturePhoto() {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const dataUrl = canvas.toDataURL("image/jpeg");
        setImage(dataUrl);
        setImagePreview(dataUrl);
        closeCamera();
      }
    }
  }

  function closeCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }
    setShowCamera(false);
  }

  function removeImage() {
    setImage(null);
    setImagePreview(null);
  }

  function handleAnalyze() {
    if (!image && description.length < 10) {
      alert("Please add an image or description before analyzing.");
      return;
    }

    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      // Navigate to results page or show results
      console.log("Analysis complete", suggestions);
    }, 3000);
  }

  function insertExample(example: string) {
    setDescription(example);
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
              Get AI Health Assistance
            </h1>
            <p className="text-lg text-slate-300">
              Tell us what&apos;s bothering you, we&apos;ll guide you safely.
            </p>
            <p className="text-sm text-slate-400">
              Our AI will analyze your symptoms and recommend safe first-aid steps.
            </p>
          </div>
        </motion.header>

        {/* Urgent Alert */}
        <AnimatePresence>
          {showUrgentAlert && suggestions && (
            <motion.div
              className="mb-6 rounded-2xl border-2 border-red-500/50 bg-red-500/10 p-6 backdrop-blur"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 shrink-0 text-red-400" />
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-red-300">
                    Urgent attention recommended
                  </h3>
                  <p className="mb-4 text-slate-200">
                    Please seek medical help nearby. This appears to be a serious condition that
                    requires professional medical attention.
                  </p>
                  <div className="flex gap-3">
                    <motion.button
                      className="rounded-full bg-red-500 px-6 py-2 font-semibold text-white shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Call Nearby Doctor
                    </motion.button>
                    <motion.button
                      className="rounded-full border border-red-500/50 bg-red-500/20 px-6 py-2 font-semibold text-red-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Show Hospital List
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Upload Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Upload or Capture the Affected Area
                </h2>
                <p className="text-sm text-slate-400">
                  Take a clear photo using the machine camera or upload from your phone
                </p>
              </div>
            </div>

            {imagePreview ? (
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePreview}
                  alt="Uploaded"
                  className="w-full rounded-2xl border border-white/20"
                />
                <button
                  onClick={removeImage}
                  className="absolute right-4 top-4 rounded-full bg-red-500/90 p-2 text-white backdrop-blur transition hover:bg-red-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.button
                  onClick={handleCaptureClick}
                  className="flex flex-1 items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-cyan-400/50 bg-cyan-400/10 px-6 py-12 transition hover:border-cyan-400 hover:bg-cyan-400/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Camera className="h-8 w-8 text-cyan-400" />
                  <div className="text-left">
                    <div className="font-semibold text-white">Capture Image</div>
                    <div className="text-sm text-slate-400">Use machine camera</div>
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex flex-1 items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-purple-400/50 bg-purple-400/10 px-6 py-12 transition hover:border-purple-400 hover:bg-purple-400/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Upload className="h-8 w-8 text-purple-400" />
                  <div className="text-left">
                    <div className="font-semibold text-white">Upload Image</div>
                    <div className="text-sm text-slate-400">From your device</div>
                  </div>
                </motion.button>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            <p className="mt-4 text-sm text-slate-400">
              <span className="font-medium text-cyan-300">Tip:</span> If it&apos;s a cut, rash,
              burn, swelling, or skin irritation — this helps the AI understand it better.
            </p>
          </div>
        </motion.section>

        {/* Description Section */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Add an Optional Description
                </h2>
                <p className="text-sm text-slate-400">
                  Describe your issue in your own words (optional but helpful)
                </p>
              </div>
            </div>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your symptoms… (Optional)"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              rows={4}
            />

            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-slate-300">Examples you can use:</p>
              <div className="flex flex-wrap gap-2">
                {exampleDescriptions.map((example) => (
                  <motion.button
                    key={example}
                    onClick={() => insertExample(example)}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {example}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* AI Suggestions */}
        <AnimatePresence>
          {suggestions && (
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="frosted-card rounded-3xl border border-white/10 p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      Smart Suggestions Based on Your Input
                    </h2>
                    <p className="text-sm text-slate-400">AI analysis results</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 text-sm text-slate-400">Category Detected</div>
                    <div className="text-lg font-semibold text-white">{suggestions.category}</div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 text-sm text-slate-400">Confidence</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${suggestions.confidence}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <span className="text-lg font-semibold text-white">
                        {suggestions.confidence}%
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 text-sm text-slate-400">Severity Level</div>
                    <div className="flex items-center gap-2">
                      {suggestions.severity === "High" && (
                        <Activity className="h-5 w-5 text-red-400" />
                      )}
                      {suggestions.severity === "Moderate" && (
                        <Activity className="h-5 w-5 text-yellow-400" />
                      )}
                      {suggestions.severity === "Low" && (
                        <Activity className="h-5 w-5 text-green-400" />
                      )}
                      <span
                        className={`text-lg font-semibold ${
                          suggestions.severity === "High"
                            ? "text-red-400"
                            : suggestions.severity === "Moderate"
                              ? "text-yellow-400"
                              : "text-green-400"
                        }`}
                      >
                        {suggestions.severity}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 text-sm text-slate-400">Doctor Consultation</div>
                    <div className="flex items-center gap-2">
                      {suggestions.needsDoctor ? (
                        <>
                          <AlertTriangle className="h-5 w-5 text-red-400" />
                          <span className="text-lg font-semibold text-red-400">Recommended</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-5 w-5 text-green-400" />
                          <span className="text-lg font-semibold text-green-400">Not Required</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 text-sm font-medium text-slate-300">Suggested Items:</div>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.suggestedItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                      >
                        {item === "Bandage" && <Bandage className="h-4 w-4" />}
                        {item === "Antiseptic" && <Pill className="h-4 w-4" />}
                        {item === "Pain Relief" && <Pill className="h-4 w-4" />}
                        {item === "Fever Tablet" && <Pill className="h-4 w-4" />}
                        {item === "ORS" && <Pill className="h-4 w-4" />}
                        {item === "Cold Pack" && <Bandage className="h-4 w-4" />}
                        {item === "Burn Gel" && <Pill className="h-4 w-4" />}
                        {item === "Cotton" && <Bandage className="h-4 w-4" />}
                        {item === "Thermometer" && <Activity className="h-4 w-4" />}
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Analyze Button */}
        {(image || description.length > 0) && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-sky-500/40 transition disabled:opacity-50"
              whileHover={!isAnalyzing ? { scale: 1.02 } : {}}
              whileTap={!isAnalyzing ? { scale: 0.98 } : {}}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze My Issue
                    <Sparkles className="h-5 w-5" />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
            </motion.button>
            <p className="mt-2 text-center text-sm text-slate-400">
              Takes ~3 seconds. Your data stays private.
            </p>
          </motion.div>
        )}

        {/* Privacy Note */}
        <motion.footer
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 shrink-0 text-cyan-400" />
            <div>
              <p className="font-medium text-slate-300">Privacy Note</p>
              <p className="mt-1">
                We don&apos;t store your photo. It&apos;s analyzed once and deleted immediately. Only
                a brief summary is kept for your receipt.
              </p>
            </div>
          </div>
        </motion.footer>
      </div>

      {/* Camera Modal */}
      <AnimatePresence>
        {showCamera && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCamera}
            />
            <motion.div
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/20 bg-slate-900 p-6 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Capture Photo</h3>
                <button
                  onClick={closeCamera}
                  className="text-slate-400 transition hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="relative mb-4 overflow-hidden rounded-2xl bg-black">
                <video
                  ref={videoRef}
                  className="w-full"
                  autoPlay
                  playsInline
                  muted
                />
              </div>
              <div className="flex gap-3">
                <motion.button
                  onClick={closeCamera}
                  className="flex-1 rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-slate-300 transition hover:bg-white/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={capturePhoto}
                  className="flex-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Capture
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

