import type { Config } from 'dompurify';

declare module '#app' {
  interface NuxtApp {
    $sanitizeHTML(_dirty: string, _config?: Config): string;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $sanitizeHTML(_dirty: string, _config?: Config): string;
  }
}
