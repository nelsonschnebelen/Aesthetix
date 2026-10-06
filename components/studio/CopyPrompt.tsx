"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyPromptProps {
  label: string;
  prompt: string;
  note?: string;
}

export function CopyPrompt({ label, prompt, note }: CopyPromptProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS); the text stays selectable.
    }
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#D4DCD6] bg-white/70 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <p className="text-technical text-[#1A3C34]/70">{label}</p>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy prompt: ${label}`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#D4DCD6] px-3 py-1.5 text-xs font-medium text-[#1A3C34] transition-colors hover:bg-[#D4DCD6]/40"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="mt-3 flex-1 select-all whitespace-pre-line font-mono text-[13px] leading-relaxed text-[#0f281e]/90">
        {prompt}
      </p>
      {note && (
        <p className="mt-4 border-t border-[#D4DCD6] pt-3 text-xs leading-relaxed text-[#0f281e]/60">
          {note}
        </p>
      )}
    </div>
  );
}
