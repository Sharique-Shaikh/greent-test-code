"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from '../../public/assets/images/FooterLogo.svg';

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
        <Image src={Logo} height={200} width={200} alt="logo" />
      </div>
    );
  }

  return children;
}