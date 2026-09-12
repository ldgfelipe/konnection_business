<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publicidad extends Model
{
    use HasFactory;

    protected $table = 'publicidades';

    protected $fillable = [
        'id_user', 'titulo', 'contenido', 'tipo', 'imagen', 'link', 'fecha_inicio', 'fecha_fin',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
