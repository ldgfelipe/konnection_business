<?php

namespace Database\Seeders;

use App\Models\Empresa;
use App\Models\Producto;
use App\Models\Promocion;
use App\Models\Publicidad;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        $user = User::firstOrCreate(
            ['email' => 'ldgfelipecarrera@gmail.com'],
            [
                'name' => 'Felipe Carrera',
                'password' => Hash::make('password123'),
            ]
        );

        if (Empresa::count() > 0) {
            return;
        }

        $emp1 = Empresa::create([
            'id_user' => $user->id,
            'nombre' => 'Tech Solutions',
            'descripcion' => 'Empresa de tecnología especializada en soluciones informáticas',
            'telefono' => '1234567890',
            'categorias' => 'Tecnología',
        ]);

        $emp2 = Empresa::create([
            'id_user' => $user->id,
            'nombre' => 'Restaurante Don Jose',
            'descripcion' => 'Comida mexicana tradicional',
            'telefono' => '9876543210',
            'categorias' => 'Restaurante',
        ]);

        $emp3 = Empresa::create([
            'id_user' => $user->id,
            'nombre' => 'Tienda de Ropa Moderna',
            'descripcion' => 'Moda y tendencias para toda la familia',
            'telefono' => '5551234567',
            'categorias' => 'Ropa',
        ]);

        Producto::create(['id_user' => $user->id, 'id_empresa' => $emp1->id, 'nombre' => 'Laptop HP Pavilion', 'descripcion' => 'Laptop profesional con procesador Intel i7', 'precio' => 15000, 'stock' => 10]);
        Producto::create(['id_user' => $user->id, 'id_empresa' => $emp1->id, 'nombre' => 'Mouse Inalámbrico', 'descripcion' => 'Mouse moderno ergonómico', 'precio' => 350, 'stock' => 50]);
        Producto::create(['id_user' => $user->id, 'id_empresa' => $emp1->id, 'nombre' => 'Teclado Mecánico', 'descripcion' => 'Teclado gaming RGB', 'precio' => 1200, 'stock' => 25]);
        Producto::create(['id_user' => $user->id, 'id_empresa' => $emp2->id, 'nombre' => 'Tacos al Pastor', 'descripcion' => 'Deliciosos tacos con tortillas de maíz', 'precio' => 50, 'stock' => 100]);
        Producto::create(['id_user' => $user->id, 'id_empresa' => $emp2->id, 'nombre' => 'Enchiladas Verdes', 'descripcion' => 'Enchiladas con salsa verde y queso', 'precio' => 85, 'stock' => 50]);
        Producto::create(['id_user' => $user->id, 'id_empresa' => $emp3->id, 'nombre' => 'Camisa Casual', 'descripcion' => 'Camisa de mezclilla moderna', 'precio' => 450, 'stock' => 30]);
        Producto::create(['id_user' => $user->id, 'id_empresa' => $emp3->id, 'nombre' => 'Pantalón de Vestir', 'descripcion' => 'Pantalón elegante para oficina', 'precio' => 680, 'stock' => 20]);

        Publicidad::create([
            'id_user' => $user->id,
            'titulo' => '¡Gran Sale de Tecnología!',
            'contenido' => '50% de descuento en laptops y periféricos',
            'tipo' => 'banner',
            'imagen' => 'https://picsum.photos/800/300',
            'link' => 'https://google.com',
            'fecha_inicio' => '2026-04-01',
            'fecha_fin' => '2026-04-30',
        ]);

        Publicidad::create([
            'id_user' => $user->id,
            'titulo' => 'Nueva Temporada - Restaurant',
            'contenido' => 'Checa nuestras ofertas de temporada',
            'tipo' => 'banner',
            'imagen' => 'https://picsum.photos/800/301',
            'link' => null,
            'fecha_inicio' => '2026-04-01',
            'fecha_fin' => '2026-04-30',
        ]);

        Promocion::create([
            'id_user' => $user->id,
            'titulo' => 'Descuento en Laptops',
            'descripcion' => '20% de descuento en laptops HP',
            'descuento' => 20,
            'fecha_inicio' => '2026-04-01',
            'fecha_fin' => '2026-04-30',
        ]);

        Promocion::create([
            'id_user' => $user->id,
            'titulo' => 'Combo Familiar',
            'descripcion' => '2x1 en enchiladas los fines de semana',
            'descuento' => 50,
            'fecha_inicio' => '2026-04-01',
            'fecha_fin' => '2026-04-30',
        ]);
    }
}
