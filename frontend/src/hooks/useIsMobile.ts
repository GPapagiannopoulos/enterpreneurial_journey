import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 767px)";

const subscribe = (cb: () => void): (() => void) => {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
};

const getSnapshot = (): boolean => window.matchMedia(QUERY).matches;
const getServerSnapshot = (): boolean => false;

export const useIsMobile = (): boolean =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
