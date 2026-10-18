<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

/**
 * Simple key/value store for settings editable from the admin panel.
 *
 * Values stored here take precedence over the ones coming from .env so the
 * administrator can rotate secrets without touching the server files.
 */
class AppSetting extends Model
{
    protected $table = 'app_settings';

    protected $primaryKey = 'setting_key';

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = ['setting_key', 'value'];

    /**
     * Read a setting, falling back to the given default when it does not exist.
     */
    public static function get(string $key, mixed $default = null): mixed
    {
        try {
            if (! Schema::hasTable((new static)->getTable())) {
                return $default;
            }

            $setting = static::query()->find($key);
        } catch (\Throwable) {
            return $default;
        }

        return $setting?->value ?? $default;
    }

    /**
     * Create or update a setting.
     */
    public static function set(string $key, ?string $value): void
    {
        static::query()->updateOrCreate(['setting_key' => $key], ['value' => $value]);
    }

    /**
     * Read a setting falling back to a config value.
     */
    public static function getOrConfig(string $key, string $configKey): mixed
    {
        $value = static::get($key);

        return ($value !== null && $value !== '') ? $value : config($configKey);
    }
}
