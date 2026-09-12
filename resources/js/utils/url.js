const APP_BASE = (import.meta.env.VITE_APP_URL || '').replace(/\/+$/, '');

export function assetUrl(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('blob:') || path.startsWith('data:')) {
        return path;
    }
    return APP_BASE + path;
}
