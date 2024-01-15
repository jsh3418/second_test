"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useDelayRedirect(
  redirectAddress: string,
  delay = 3000
) {
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => {
      router.push(redirectAddress);
    }, delay);

    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectAddress, delay]);
}
