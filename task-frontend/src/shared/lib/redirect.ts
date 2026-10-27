export function getSafeRedirectPath(
  candidate: string | null,
  fallback = '/dashboard',
): string {
  if (!candidate) return fallback
  if (!candidate.startsWith('/')) return fallback
  if (candidate.startsWith('//')) return fallback
  return candidate
}
