"use client";
import { useEffect } from "react";

export default function GAProbe() {
  useEffect(() => {
    // This proves the NEXT_PUBLIC var exists on the client
    console.log("GA Probe:", process.env.NEXT_PUBLIC_GA_ID || "(missing)");
  }, []);
  return null;
}
