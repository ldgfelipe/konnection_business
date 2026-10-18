const APP_BASE = (import.meta.env.VITE_APP_URL || '').replace(/\/+$/, '');

// Where the public storage disk lives. Locally "/storage" (symlink), on shared
// hosting "/storage/app/public" because the project root is the web root.
let storageBase = '/storage';

export function setStorageBase(base) {
    if (typeof base === 'string' && base.trim() !== '') {
        storageBase = base.trim().replace(/\/+$/, '');
    }
}

export function assetUrl(path) {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('blob:') || path.startsWith('data:')) {
        return path;
    }
    // Uploaded files (public disk)
    if (path.startsWith('/storage/')) {
        return storageBase + path.slice('/storage'.length);
    }
    // Static public assets (starting with /) - use relative path
    if (path.startsWith('/')) {
        return path;
    }
    // Dynamic assets - prepend base URL
    return APP_BASE + '/' + path;
}
