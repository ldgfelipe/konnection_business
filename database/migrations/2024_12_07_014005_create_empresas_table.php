<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpresasTable extends Migration
{
    public function up()
    {
        Schema::create('empresas', function (Blueprint $table) {
            $table->id(); // Este será el único campo auto-incremental y clave primaria.
            $table->foreignId('id_user')->constrained('users')->onDelete('cascade'); // Referencia a la tabla de usuarios.
            $table->string('nombre', 100);
            $table->text('descripcion')->nullable();
            $table->string('telefono', 15)->nullable();
            $table->text('direccion')->nullable();
            $table->string('logo', 255)->nullable();
            $table->string('sitio_web', 255)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('empresas');
    }
}
