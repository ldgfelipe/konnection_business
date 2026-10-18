<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Campos extendidos de Profetit
            $table->string('profetit_folio')->nullable()->after('profetit_code');
            $table->string('profetit_license')->nullable()->after('profetit_folio');
            $table->string('profetit_institution')->nullable()->after('profetit_license');
            $table->string('profetit_category')->nullable()->after('profetit_institution');
            $table->string('profetit_level')->nullable()->after('profetit_category');
            $table->string('profetit_career')->nullable()->after('profetit_level');
            $table->json('profetit_specialties')->nullable()->after('profetit_career');
            $table->string('profetit_country')->nullable()->after('profetit_specialties');
            $table->string('profetit_photo')->nullable()->after('profetit_country');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'profetit_folio',
                'profetit_license',
                'profetit_institution',
                'profetit_category',
                'profetit_level',
                'profetit_career',
                'profetit_specialties',
                'profetit_country',
                'profetit_photo',
            ]);
        });
    }
};