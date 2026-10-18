<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configurePublicPaths();
    }

    /**
     * Work out where the "public" folder is reachable from the browser.
     *
     * Laravel always reads the Vite manifest from "public/build" and stores the
     * public disk inside "storage/app/public", but the URL it generates assumes
     * the web root IS the "public" folder. That is true locally, but on shared
     * hosting (GoDaddy) the project root is exposed instead, so the browser
     * needs "/public/build/..." and "/storage/app/public/...".
     *
     * @return void
     */
    private function configurePublicPaths(): void
    {
        $prefix = config('app.build_asset_prefix');

        if ($prefix === null) {
            $prefix = $this->detectBuildAssetPrefix();
        }

        $prefix = is_string($prefix) ? trim($prefix, '/') : '';

        // '' when the web root is "public", 'public' when the project root is exposed.
        config(['app.public_web_prefix' => $prefix]);

        // Where the public storage disk can be reached from the browser.
        config([
            'app.public_storage_base' => $prefix === '' ? '/storage' : '/'.$prefix.'/storage/app/public',
        ]);

        if ($prefix === '') {
            return;
        }

        Vite::createAssetPathsUsing(
            fn (string $path, $secure = null) => asset($prefix.'/'.$path, $secure)
        );
    }

    /**
     * Compare the web server document root against the public folder.
     *
     * @return string "public/" when the project root is exposed, "" otherwise.
     */
    private function detectBuildAssetPrefix(): string
    {
        $publicPath = $this->normalizePath(public_path());

        $candidates = [
            $_SERVER['DOCUMENT_ROOT'] ?? null,
            isset($_SERVER['SCRIPT_FILENAME']) ? dirname($_SERVER['SCRIPT_FILENAME']) : null,
        ];

        foreach ($candidates as $webRoot) {
            if (! $webRoot) {
                continue;
            }

            return $this->normalizePath($webRoot) === $publicPath ? '' : 'public/';
        }

        return app()->environment('production') ? 'public/' : '';
    }

    /**
     * Normalize a filesystem path for comparison.
     */
    private function normalizePath(string $path): string
    {
        $real = realpath($path);

        return rtrim(str_replace('\\', '/', $real ?: $path), '/');
    }
}
