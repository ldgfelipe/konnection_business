<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasColumn('productos', 'categoria')) {
            Schema::table('productos', function (Blueprint $table) {
                $table->string('categoria', 100)->nullable()->after('stock');
            });
        }

        if (!Schema::hasColumn('productos', 'palabras_clave')) {
            Schema::table('productos', function (Blueprint $table) {
                $table->text('palabras_clave')->nullable()->after('categoria');
            });
        }
    }

    public function down(): void
    {
        Schema::table('productos', function (Blueprint $table) {
            if (Schema::hasColumn('productos', 'palabras_clave')) {
                $table->dropColumn('palabras_clave');
            }
            if (Schema::hasColumn('productos', 'categoria')) {
                $table->dropColumn('categoria');
            }
        });
    }
};
