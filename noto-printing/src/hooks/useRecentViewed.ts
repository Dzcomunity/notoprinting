"use client";

import { useEffect, useCallback } from "react";

const STORAGE_KEY = "noto-printing-recent-viewed";
const MAX_ITEMS = 10;

export function useRecentViewed() {
  const addProduct = useCallback((productId: string) => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const recent: string[] = stored ? JSON.parse(stored) : [];

      // Remove if already exists
      const filtered = recent.filter((id) => id !== productId);

      // Add to beginning
      const updated = [productId, ...filtered].slice(0, MAX_ITEMS);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error("Error saving recent viewed:", error);
    }
  }, []);

  const getRecentProducts = useCallback((): string[] => {
    if (typeof window === "undefined") return [];

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error getting recent viewed:", error);
      return [];
    }
  }, []);

  const clearRecent = useCallback(() => {
    if (typeof window === "undefined") return;

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing recent viewed:", error);
    }
  }, []);

  return {
    addProduct,
    getRecentProducts,
    clearRecent,
  };
}
