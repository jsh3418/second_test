"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useDelayRedirect(
  redirectAddress: string,
  delay = 3000
) {
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(delay);

  useEffect(() => {
    const id = setTimeout(() => {
      router.push(redirectAddress);
    }, delay);

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectAddress, delay]);

  useEffect(() => {
    const id = setInterval(() => {
      setRemainingTime((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return remainingTime / 1000;
}
