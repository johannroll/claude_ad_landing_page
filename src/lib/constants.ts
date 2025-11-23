/**
 * Base path configuration for deployment
 * Set to repository name for GitHub Pages, empty string for root domain
 */
export const BASE_PATH = process.env.NODE_ENV === 'production'
  ? '/claude_ad_landing_page'
  : '';

/**
 * Get the full path for a public asset
 * @param path - Path relative to the public directory (e.g., '/images/logo.png')
 * @returns Full path with basePath prepended
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_PATH}/${cleanPath}`;
}
