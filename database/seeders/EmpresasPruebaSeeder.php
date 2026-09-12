<?php

namespace Database\Seeders;

use App\Models\Empresa;
use App\Models\Producto;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class EmpresasPruebaSeeder extends Seeder
{
    public function run()
    {
        $password = Hash::make('password123');

        $datos = [
            [
                'email' => 'demo.electrohogar@konnection.test',
                'name' => 'Laura Ramírez',
                'empresa' => [
                    'nombre' => 'ElectroHogar MX',
                    'descripcion' => 'Distribuidora de electrodomésticos y línea blanca para el hogar con envío a todo el país.',
                    'telefono' => '5512340101',
                    'direccion' => 'Av. Reforma 1200, CDMX',
                    'sitio_web' => 'https://electrohogar.mx',
                    'rfc' => 'ELM900101AAA',
                    'categorias' => 'Electrodomésticos',
                ],
                'productos' => [
                    ['nombre' => 'Refrigerador Samsung 18 pies', 'descripcion' => 'Refrigerador de dos puertas con tecnología inverter y No Frost.', 'precio' => 18500, 'stock' => 8, 'categoria' => 'Electrodomésticos', 'palabras_clave' => 'refrigerador,nevera,linea blanca,samsung'],
                    ['nombre' => 'Licuadora Oster 800W', 'descripcion' => 'Licuadora de alta potencia con vaso de vidrio y 7 velocidades.', 'precio' => 1299, 'stock' => 40, 'categoria' => 'Electrodomésticos', 'palabras_clave' => 'licuadora,oster,electrodomestico,cocina'],
                    ['nombre' => 'Microondas LG 1.7 pies', 'descripcion' => 'Horno de microondas con descongelado automático y sensor de cocción.', 'precio' => 2890, 'stock' => 22, 'categoria' => 'Electrodomésticos', 'palabras_clave' => 'microondas,lg,horno,cocina'],
                    ['nombre' => 'Plancha de vapor Rowenta', 'descripcion' => 'Plancha de vapor continua con suela cerámica antiadherente.', 'precio' => 1450, 'stock' => 15, 'categoria' => 'Electrodomésticos', 'palabras_clave' => 'plancha,vapor,rowenta,ropa'],
                ],
            ],
            [
                'email' => 'demo.fitnesstotal@konnection.test',
                'name' => 'Carlos Mendoza',
                'empresa' => [
                    'nombre' => 'Fitness Total',
                    'descripcion' => 'Tienda de artículos deportivos y suplementos para entrenamiento profesional y amateur.',
                    'telefono' => '4423450202',
                    'direccion' => 'Blvd. Bernardo Quintana 500, Querétaro',
                    'sitio_web' => 'https://fitnesstotal.com',
                    'rfc' => 'FTT920202BBB',
                    'categorias' => 'Deportes',
                ],
                'productos' => [
                    ['nombre' => 'Bicicleta de montaña 26"', 'descripcion' => 'Bicicleta MTB con cuadro de aluminio y suspensión delantera.', 'precio' => 6500, 'stock' => 12, 'categoria' => 'Deportes', 'palabras_clave' => 'bicicleta,mtb,montaña,deporte,rodado'],
                    ['nombre' => 'Pesa rusa 16 kg', 'descripcion' => 'Kettlebell de hierro fundido con agarre ergonómico.', 'precio' => 850, 'stock' => 30, 'categoria' => 'Deportes', 'palabras_clave' => 'pesa,rusa,kettlebell,gym,crossfit'],
                    ['nombre' => 'Proteína Whey 2kg', 'descripcion' => 'Suplemento de proteína de suero sabor chocolate.', 'precio' => 980, 'stock' => 45, 'categoria' => 'Deportes', 'palabras_clave' => 'proteina,whey,suplemento,gym,nutricion'],
                    ['nombre' => 'Tenis para correr talla 9', 'descripcion' => 'Calzado deportivo ligero con amortiguación para running.', 'precio' => 2100, 'stock' => 18, 'categoria' => 'Deportes', 'palabras_clave' => 'tenis,correr,running,calzado,deportivo'],
                ],
            ],
            [
                'email' => 'demo.bellezanatural@konnection.test',
                'name' => 'Mariana Torres',
                'empresa' => [
                    'nombre' => 'Belleza Natural',
                    'descripcion' => 'Productos de maquillaje y cuidado personal elaborados con ingredientes naturales.',
                    'telefono' => '3311110303',
                    'direccion' => 'Av. Chapultepec 300, Guadalajara',
                    'sitio_web' => 'https://bellezanatural.mx',
                    'rfc' => 'BNT850303CCC',
                    'categorias' => 'Belleza',
                ],
                'productos' => [
                    ['nombre' => 'Sérum facial vitamina C', 'descripcion' => 'Sérum antimanchas y antioxidante para todo tipo de piel.', 'precio' => 320, 'stock' => 60, 'categoria' => 'Belleza', 'palabras_clave' => 'serum,vitamina c,facial,piel,cuidado'],
                    ['nombre' => 'Labial hidratante rojo', 'descripcion' => 'Labial de larga duración con manteca de karité.', 'precio' => 180, 'stock' => 80, 'categoria' => 'Belleza', 'palabras_clave' => 'labial,rojo,maquillaje,hidratante'],
                    ['nombre' => 'Crema corporal de aloe', 'descripcion' => 'Hidratación profunda con aloe vera natural.', 'precio' => 150, 'stock' => 70, 'categoria' => 'Belleza', 'palabras_clave' => 'crema,aloe,corporal,hidratante,aloe vera'],
                    ['nombre' => 'Paleta de sombras 12 colores', 'descripcion' => 'Paleta de sombras mate y brillantes de alta pigmentación.', 'precio' => 420, 'stock' => 35, 'categoria' => 'Belleza', 'palabras_clave' => 'paleta,sombras,maquillaje,ojos'],
                ],
            ],
            [
                'email' => 'demo.elaroma@konnection.test',
                'name' => 'Jorge Salazar',
                'empresa' => [
                    'nombre' => 'Cafetería El Aroma',
                    'descripcion' => 'Café de especialidad, repostería artesanal y servicio de alimentos a domicilio.',
                    'telefono' => '8122220404',
                    'direccion' => 'Calle Morelos 45, Monterrey',
                    'sitio_web' => null,
                    'rfc' => 'CAF910404DDD',
                    'categorias' => 'Alimentos',
                ],
                'productos' => [
                    ['nombre' => 'Café de especialidad 1kg', 'descripcion' => 'Grano tostado medio origen Veracruz, molido o en grano.', 'precio' => 380, 'stock' => 50, 'categoria' => 'Alimentos', 'palabras_clave' => 'cafe,grano,especialidad,veracruz,aroma'],
                    ['nombre' => 'Pastel de chocolate artesanal', 'descripcion' => 'Pastel de chocolate con relleno de ganache, porción individual.', 'precio' => 95, 'stock' => 30, 'categoria' => 'Alimentos', 'palabras_clave' => 'pastel,chocolate,reposteria,postre,artesanal'],
                    ['nombre' => 'Sándwich de pavo integral', 'descripcion' => 'Sándwich preparado con pan integral, pavo y vegetales frescos.', 'precio' => 110, 'stock' => 25, 'categoria' => 'Alimentos', 'palabras_clave' => 'sandwich,pavo,integral,comida,desayuno'],
                ],
            ],
            [
                'email' => 'demo.modaurbana@konnection.test',
                'name' => 'Ana Gutiérrez',
                'empresa' => [
                    'nombre' => 'Moda Urbana',
                    'descripcion' => 'Ropa casual y urbana de última tendencia para hombre y mujer.',
                    'telefono' => '5567890505',
                    'direccion' => 'Plaza Centro 780, Puebla',
                    'sitio_web' => 'https://modaurbana.com',
                    'rfc' => 'MOU880505EEE',
                    'categorias' => 'Ropa',
                ],
                'productos' => [
                    ['nombre' => 'Playera oversize algodón', 'descripcion' => 'Playera casual corte oversize de algodón suave, varios colores.', 'precio' => 280, 'stock' => 100, 'categoria' => 'Ropa', 'palabras_clave' => 'playera,oversize,algodon,camisa,ropa'],
                    ['nombre' => 'Chamarra bomber', 'descripcion' => 'Chamarra bomber de invierno con cierre metálico.', 'precio' => 850, 'stock' => 20, 'categoria' => 'Ropa', 'palabras_clave' => 'chamarra,bomber,invierno,abrigo,ropa'],
                    ['nombre' => 'Jeans skinny mujer', 'descripcion' => 'Jeans elásticos ajustados, varios talles.', 'precio' => 550, 'stock' => 40, 'categoria' => 'Ropa', 'palabras_clave' => 'jeans,skinny,pantalon,mujer,mezclilla'],
                ],
            ],
        ];

        foreach ($datos as $dato) {
            $user = User::firstOrCreate(
                ['email' => $dato['email']],
                [
                    'name' => $dato['name'],
                    'password' => $password,
                ]
            );

            $empresa = Empresa::firstOrCreate(
                ['id_user' => $user->id],
                $dato['empresa']
            );

            foreach ($dato['productos'] as $producto) {
                Producto::firstOrCreate(
                    ['id_empresa' => $empresa->id, 'nombre' => $producto['nombre']],
                    array_merge($producto, [
                        'id_user' => $user->id,
                        'id_empresa' => $empresa->id,
                    ])
                );
            }
        }

        // Asigna categoría y palabras clave a los productos que no las tienen
        $sinCategoria = [
            ['Laptop HP Pavilion', 'Tecnología', 'laptop,computadora,hp,oficina,tecnologia'],
            ['Mouse Inalámbrico', 'Tecnología', 'mouse,inalambrico,periferico,computadora'],
            ['Teclado Mecánico', 'Tecnología', 'teclado,mecanico,gaming,rgb,periferico'],
            ['Tacos al Pastor', 'Alimentos', 'tacos,al pastor,comida,antojitos'],
            ['Enchiladas Verdes', 'Alimentos', 'enchiladas,verdes,comida,mexicana'],
            ['Camisa Casual', 'Ropa', 'camisa,casual,mezclilla,ropa'],
            ['Pantalón de Vestir', 'Ropa', 'pantalon,vestir,oficina,ropa'],
        ];

        foreach ($sinCategoria as $item) {
            Producto::where('nombre', $item[0])
                ->whereNull('categoria')
                ->update(['categoria' => $item[1], 'palabras_clave' => $item[2]]);
        }
    }
}
