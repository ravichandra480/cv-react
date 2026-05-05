declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export type AnalyticsEventParams = {
  category?: string;
  label?: string;
  value?: string | number;
  [key: string]: unknown;
};

export const gtagEvent = (action: string, params: AnalyticsEventParams = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', action, {
    event_category: params.category,
    event_label: params.label,
    value: params.value,
    ...params,
  });
};
