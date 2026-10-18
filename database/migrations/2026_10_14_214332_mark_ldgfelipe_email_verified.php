<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Marcar el usuario específico como email verificado
        DB::table('users')
            ->where('email', 'ldgfelipe@konnectionbusiness.com')
            ->update([
                'email_verified_at' => now(),
                'profile_status' => 'active',
            ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revertir: quitar verificación
        DB::table('users')
            ->where('email', 'ldgfelipe@konnectionbusiness.com')
            ->update([
                'email_verified_at' => null,
                'profile_status' => 'pending_activation',
            ]);
    }
};