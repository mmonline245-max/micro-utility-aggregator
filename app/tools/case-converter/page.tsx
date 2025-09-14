"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function CaseConverter() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Case Converter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        rows={5}
        placeholder="Type or paste your text here..."
      />
      <div className="flex gap-2 mb-4">
        <button onClick={() => setText(text.toUpperCase())} className="px-4 py-2 bg-blue-600 text-white rounded">
          UPPERCASE
        </button>
        <button onClick={() => setText(text.toLowerCase())} className="px-4 py-2 bg-green-600 text-white rounded">
          lowercase
        </button>
      </div>
      <AdSlot />
    </div>
  );
}
