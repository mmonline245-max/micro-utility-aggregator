"use client";
import { useState } from "react";
import AdSlot from "@/components/AdSlot";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generate = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < 12; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Random Password Generator</h2>
      <button onClick={generate} className="px-4 py-2 bg-purple-600 text-white rounded mb-4">
        Generate
      </button>
      <p className="font-mono break-all">{password}</p>
      <AdSlot />
    </div>
  );
}