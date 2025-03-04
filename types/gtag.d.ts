interface Window {
  dataLayer: unknown[];
  gtag: (
    command: 'js' | 'config' | 'event',
    timestamp?: Date | string,
    options?: { [key: string]: string }
  ) => void;
} 