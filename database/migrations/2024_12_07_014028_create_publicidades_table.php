<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublicidadesTable extends Migration
{
    public function up()
    {
        Schema::create('publicidades', function (Blueprint $table) {
            $table->id(); // Columna auto-incremental y clave primaria
            $table->foreignId('id_user')->constrained('users')->onDelete('cascade'); // Clave foránea relacionada con usuarios
            $table->string('titulo', 100);
            $table->text('contenido')->nullable();
            $table->enum('tipo', ['banner', 'popup', 'anuncio'])->default('banner');
            $table->string('imagen', 255)->nullable();
            $table->string('link', 255)->nullable();
            $table->date('fecha_inicio');
            $table->date('fecha_fin');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('publicidades');
    }
}
