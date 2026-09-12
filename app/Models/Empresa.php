<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;

    protected $table = 'empresas';

    protected $fillable = [
        'id_user', 'nombre', 'descripcion', 'telefono', 'direccion', 'logo', 'sitio_web', 'rfc', 'categorias',
    ];

    // Relación con el modelo Usuario
    public function usuario()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    // Relación con los productos
    public function productos()
    {
        return $this->hasMany(Producto::class, 'id_empresa');
    }

    // Relación con las publicidades
    public function publicidades()
    {
        return $this->hasMany(Publicidad::class, 'id_user', 'id_user');
    }
}
