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
            $table->boolean('profetit_verified')->default(false)->after('email_verified_at');
            $table->enum('profetit_certificate_type', ['titulo_oficial', 'testimonio_estudios'])->nullable()->after('profetit_verified');
            $table->string('profetit_code')->unique()->nullable()->after('profetit_certificate_type');
            $table->enum('profile_status', ['pending_activation', 'active', 'suspended'])->default('pending_activation')->after('profetit_code');
            $table->string('activation_token')->unique()->nullable()->after('profile_status');
            $table->timestamp('activation_token_expires_at')->nullable()->after('activation_token');
            $table->string('role')->default('user')->after('activation_token_expires_at'); // user, admin
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'profetit_verified',
                'profetit_certificate_type',
                'profetit_code',
                'profile_status',
                'activation_token',
                'activation_token_expires_at',
                'role',
            ]);
        });
    }
};