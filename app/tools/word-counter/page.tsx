"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charCount = text.length;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Word & Character Counter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        rows={5}
        placeholder="Type or paste your text here..."
      />
      <p>Words: {wordCount}</p>
      <p>Characters: {charCount}</p>
      <AdSlot />
    </div>
  );
}
