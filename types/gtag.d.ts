export {}; // ← 必须是模块，不能是脚本

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "set" | "js",
      targetIdOrEventName: string,
      config?: Record<string, unknown>
    ) => void;
  }
}