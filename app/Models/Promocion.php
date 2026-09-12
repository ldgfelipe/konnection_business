<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promocion extends Model
{
    use HasFactory;

    protected $table = 'promociones';

    protected $fillable = [
        'id_user', 'titulo', 'descripcion', 'fecha_inicio', 'fecha_fin', 'descuento',
    ];

    // Relación con el producto
    public function producto()
    {
        return $this->belongsTo(Producto::class);
    }

    // Relación con la empresa (a través del usuario)
    public function empresa()
    {
        return $this->belongsTo(Empresa::class, 'id_user', 'id_user');
    }
}
