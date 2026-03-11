import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  type IntensityLevel,
  type StyleMode,
  transformText,
} from "@/lib/transformer";
import {
  Briefcase,
  CheckCircle2,
  Copy,
  Download,
  FlameKindling,
  GraduationCap,
  Landmark,
  Sparkles,
  Telescope,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const SAMPLE_TEXTS: Record<StyleMode, string> = {
  academic:
    "The study shows that people who use technology often find it helps them get work done faster. We think this is important because it changes the way people think about their jobs. The idea is that small improvements can make a big difference in how we understand productivity.",
  corporate:
    "We need to improve our team's performance and find new ways to help our customers. The plan is to start using new tools that will change how we do meetings and make our work better. Good results will show that our ideas were the right solution to the problem.",
  political:
    "People need to change how they think about this important problem. The government must help find good solutions that work for everyone. We believe that our plan will make a big difference and show that we care about the future of this country.",
  philosophical:
    "The human mind exists in a state of uncertainty about reality. We think that what we know is true, but the idea of knowledge itself is a complex thing. To truly understand existence, we must change how we see the world and the self within it.",
};

const styleConfig: Record<
  StyleMode,
  { label: string; color: string; icon: React.ReactNode; description: string }
> = {
  academic: {
    label: "Academic",
    color: "oklch(0.65 0.15 240)",
    icon: <GraduationCap className="h-3.5 w-3.5" />,
    description: "Scholarly prose with empirical gravitas",
  },
  corporate: {
    label: "Corporate",
    color: "oklch(0.75 0.14 52)",
    icon: <Briefcase className="h-3.5 w-3.5" />,
    description: "Business-speak with synergistic leverage",
  },
  political: {
    label: "Political",
    color: "oklch(0.62 0.22 22)",
    icon: <Landmark className="h-3.5 w-3.5" />,
    description: "Civic rhetoric with passionate conviction",
  },
  philosophical: {
    label: "Philosophical",
    color: "oklch(0.65 0.15 300)",
    icon: <Telescope className="h-3.5 w-3.5" />,
    description: "Ontological depth with dialectical rigor",
  },
};

const intensityConfig: Record<
  IntensityLevel,
  { label: string; description: string }
> = {
  moderate: { label: "Moderate", description: "Subtle elevation" },
  elevated: { label: "Elevated", description: "Significant transformation" },
  surreal: {
    label: "Surreal",
    description: "Every word dissolved into incomprehensible glossary",
  },
};

function countWords(text: string): number {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

export default function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [style, setStyle] = useState<StyleMode>("academic");
  const [intensity, setIntensity] = useState<IntensityLevel>("elevated");
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [hasTransformed, setHasTransformed] = useState(false);

  const handleTransform = useCallback(async () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to transform.");
      return;
    }
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    const result = transformText(inputText, style, intensity);
    setOutputText(result);
    setHasTransformed(true);
    setIsProcessing(false);
  }, [inputText, style, intensity]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        handleTransform();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleTransform]);

  const handleCopy = useCallback(async () => {
    if (!outputText) return;
    await navigator.clipboard.writeText(outputText);
    setCopiedSuccess(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedSuccess(false), 2500);
  }, [outputText]);

  const handleDownload = useCallback(() => {
    if (!outputText) return;
    const blob = new Blob([outputText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `rhetoric-forge-${style}-${intensity}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded!");
  }, [outputText, style, intensity]);

  const handleClear = useCallback(() => {
    setInputText("");
    setOutputText("");
    setHasTransformed(false);
  }, []);

  const handleLoadSample = useCallback(() => {
    setInputText(SAMPLE_TEXTS[style]);
  }, [style]);

  const activeColor = styleConfig[style].color;
  const inputWordCount = countWords(inputText);
  const outputWordCount = countWords(outputText);

  return (
    <TooltipProvider>
      <div
        className="min-h-screen flex flex-col"
        style={{ colorScheme: "dark" }}
      >
        {/* Header */}
        <header className="relative border-b border-border/50 bg-card/60 backdrop-blur-sm">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: activeColor }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center forge-glow"
                style={{ backgroundColor: activeColor }}
              >
                <FlameKindling className="h-5 w-5 text-background" />
              </div>
              <div>
                <h1
                  className="font-display text-2xl font-bold tracking-tight"
                  style={{ color: activeColor }}
                >
                  RhetoricForge
                </h1>
                <p className="text-xs text-muted-foreground font-sans tracking-widest uppercase">
                  Elevate your prose
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI-free rhetorical transformation engine</span>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          {/* Controls bar */}
          <motion.section
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-xl border border-border/60 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
          >
            {/* Style tabs */}
            <div className="flex flex-col gap-2 flex-1">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Rhetorical Style
              </span>
              <Tabs
                value={style}
                onValueChange={(v) => setStyle(v as StyleMode)}
              >
                <TabsList className="bg-muted/50 h-auto p-1 gap-0.5">
                  {(
                    Object.entries(styleConfig) as [
                      StyleMode,
                      (typeof styleConfig)[StyleMode],
                    ][]
                  ).map(([key, cfg]) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      data-ocid={`transform.${key}_tab`}
                      className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 data-[state=active]:bg-foreground data-[state=active]:text-background transition-all"
                    >
                      <span
                        style={{
                          color:
                            style === key
                              ? "oklch(var(--background))"
                              : cfg.color,
                        }}
                      >
                        {cfg.icon}
                      </span>
                      {cfg.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Intensity */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Intensity
              </span>
              <ToggleGroup
                type="single"
                value={intensity}
                onValueChange={(v) =>
                  v && v && setIntensity(v as IntensityLevel)
                }
                className="bg-muted/50 rounded-lg p-1 gap-0.5"
              >
                {(
                  Object.entries(intensityConfig) as [
                    IntensityLevel,
                    (typeof intensityConfig)[IntensityLevel],
                  ][]
                ).map(([key, cfg]) => (
                  <Tooltip key={key}>
                    <TooltipTrigger asChild>
                      <ToggleGroupItem
                        value={key}
                        data-ocid={`transform.${key}_toggle`}
                        className="text-xs font-medium px-3 py-1.5 h-auto data-[state=on]:bg-foreground data-[state=on]:text-background rounded-md"
                      >
                        {cfg.label}
                      </ToggleGroupItem>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{cfg.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </ToggleGroup>
            </div>

            {/* Transform button */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground opacity-0 pointer-events-none">
                &nbsp;
              </span>
              <Button
                data-ocid="transform.primary_button"
                onClick={handleTransform}
                disabled={isProcessing || !inputText.trim()}
                className={`px-6 h-9 text-sm font-semibold font-heading tracking-wide transition-all ${
                  isProcessing ? "btn-processing" : ""
                }`}
                style={{
                  backgroundColor: isProcessing ? undefined : activeColor,
                  color: "oklch(0.13 0.008 260)",
                  border: "none",
                }}
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <FlameKindling className="h-4 w-4" />
                    </motion.span>
                    Forging...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Transform
                  </span>
                )}
              </Button>
            </div>
          </motion.section>

          {/* Style description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={style}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2"
            >
              <span
                className="h-2 w-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: activeColor }}
              />
              <span className="text-sm text-muted-foreground">
                <span className="font-medium" style={{ color: activeColor }}>
                  {styleConfig[style].label}:
                </span>{" "}
                {styleConfig[style].description}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Two-panel layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
            {/* Input Panel */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-heading font-semibold uppercase tracking-widest text-muted-foreground">
                  Source Text
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleLoadSample}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-muted/50"
                  >
                    Load sample
                  </button>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        data-ocid="input.clear_button"
                        variant="ghost"
                        size="sm"
                        onClick={handleClear}
                        className="h-7 w-7 p-0 hover:bg-destructive/20 hover:text-destructive"
                        disabled={!inputText && !outputText}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Clear all</TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <Textarea
                data-ocid="input.textarea"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste or type your text here..."
                className="min-h-[360px] lg:min-h-[480px] resize-none font-sans text-sm leading-relaxed bg-card border-border/60 transition-all placeholder:text-muted-foreground/50"
                onFocus={(e) => {
                  e.target.style.borderColor = activeColor;
                  e.target.style.boxShadow = `0 0 0 1px ${activeColor}40`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "";
                  e.target.style.boxShadow = "";
                }}
              />

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{inputWordCount} words</span>
                <span>{inputText.length} characters</span>
              </div>
            </motion.section>

            {/* Output Panel */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-heading font-semibold uppercase tracking-widest text-muted-foreground">
                  Transformed Output
                </h2>
                <div className="flex items-center gap-1.5">
                  <AnimatePresence>
                    {copiedSuccess && (
                      <motion.span
                        data-ocid="output.success_state"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1 text-xs text-green-400"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        data-ocid="output.copy_button"
                        variant="ghost"
                        size="sm"
                        onClick={handleCopy}
                        disabled={!outputText}
                        className="h-7 w-7 p-0 hover:bg-muted"
                      >
                        <Copy className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Copy to clipboard</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleDownload}
                        disabled={!outputText}
                        className="h-7 w-7 p-0 hover:bg-muted"
                      >
                        <Download className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Download as .txt</TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <div
                data-ocid="output.panel"
                className="parchment rounded-xl min-h-[360px] lg:min-h-[480px] p-6 overflow-y-auto shadow-parchment relative"
              >
                <AnimatePresence mode="wait">
                  {!hasTransformed ? (
                    <motion.div
                      key="empty"
                      data-ocid="output.empty_state"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-64 gap-4"
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: "oklch(0.88 0.03 70)" }}
                      >
                        <FlameKindling
                          className="h-8 w-8"
                          style={{ color: "oklch(0.60 0.06 55)" }}
                        />
                      </div>
                      <div className="text-center">
                        <p
                          className="font-display text-lg font-semibold italic"
                          style={{ color: "oklch(0.50 0.04 60)" }}
                        >
                          Awaiting your prose...
                        </p>
                        <p
                          className="text-sm mt-1"
                          style={{ color: "oklch(0.58 0.03 65)" }}
                        >
                          Enter text on the left and press Transform
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="output"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div
                        className="text-xs font-sans uppercase tracking-widest mb-4 pb-3 border-b flex items-center gap-2"
                        style={{
                          color: "oklch(0.55 0.04 60)",
                          borderColor: "oklch(0.85 0.04 70)",
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: activeColor }}
                        />
                        {styleConfig[style].label} &middot;{" "}
                        {intensityConfig[intensity].label} Intensity
                      </div>
                      <p
                        className="font-display text-base leading-8 whitespace-pre-wrap"
                        style={{ color: "oklch(0.22 0.02 60)" }}
                      >
                        {outputText}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{outputWordCount} words</span>
                {hasTransformed &&
                  outputWordCount > 0 &&
                  inputWordCount > 0 && (
                    <span
                      className="font-medium"
                      style={{ color: activeColor }}
                    >
                      +
                      {Math.round(
                        ((outputWordCount - inputWordCount) / inputWordCount) *
                          100,
                      )}
                      % verbosity
                    </span>
                  )}
              </div>
            </motion.section>
          </div>

          {/* Keyboard shortcut hint */}
          <p className="text-center text-xs text-muted-foreground/50">
            Pro tip: Press{" "}
            <kbd className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground text-xs font-mono">
              Ctrl+Enter
            </kbd>{" "}
            to transform
          </p>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/40 py-5 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} RhetoricForge. Transform your
              words with conviction.
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted-foreground transition-colors"
            >
              Built with &hearts; using caffeine.ai
            </a>
          </div>
        </footer>

        <Toaster />
      </div>
    </TooltipProvider>
  );
}
