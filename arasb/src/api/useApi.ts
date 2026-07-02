import { useState, useEffect } from 'react';
import type { Locale } from '../i18n/types';

// Types
export interface ApiProduct {
  id: number;
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface ApiSettings {
  company_name: string;
  email: string;
  phone: string;
  site_title: string;
  primary_domain: string;
  default_language: string;
  font_family: string;
  [key: string]: string;
}

export interface ApiHomeSection {
  id: number;
  page_key: string;
  section_key: string;
  section_type: string;
  is_active: number;
  sort_order: number;
  translation: {
    title?: string;
    subtitle?: string;
    badge?: string;
    description?: string;
    [key: string]: string | undefined;
  };
}

// Cache for API responses
const cache: Record<string, { data: unknown; timestamp: number }> = {};
const CACHE_TTL = 30000; // 30 seconds

// Generic fetch with cache
function useFetch<T>(url: string, defaultValue: T): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(() => {
    const cached = cache[url];
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.data as T;
    }
    return defaultValue;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = cache[url];
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      setData(cached.data as T);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    fetch(url)
      .then(r => r.json())
      .then(json => {
        if (!cancelled && json.success) {
          setData(json.data);
          cache[url] = { data: json.data, timestamp: Date.now() };
        }
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading };
}

// Products hook
export function useProducts(locale: Locale) {
  return useFetch<ApiProduct[]>(`/api/products?locale=${locale}`, []);
}

// Settings hook
export function useSettings() {
  return useFetch<ApiSettings>('/api/settings', {
    company_name: 'ARASB Trading',
    email: 'info@arasbtrading.com',
    phone: '+98 21 8888 8888',
    site_title: 'ARASB Trading',
    primary_domain: 'arasbtrading.com',
    default_language: 'en',
    font_family: 'default',
  });
}

// Home sections hook
export function useHomeSections(locale: Locale) {
  return useFetch<ApiHomeSection[]>(`/api/home-sections?locale=${locale}`, []);
}

// Helper: find a section by key
export function findSection(sections: ApiHomeSection[], key: string): ApiHomeSection | null {
  return sections.find(s => s.section_key === key && s.is_active === 1) || null;
}
