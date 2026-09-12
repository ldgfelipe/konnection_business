<?php

namespace Database\Seeders;

use App\Models\Empresa;
use App\Models\Producto;
use Illuminate\Database\Seeder;

class ProductosExtrasSeeder extends Seeder
{
    public function run()
    {
        $productosPorEmpresa = [
            'Tech Solutions' => [
                ['Monitor LG 27 pulgadas', 'Monitor LED Full HD con puertos HDMI y DisplayPort.', 3200, 14, 'Tecnología', 'monitor,lg,27,pantalla,computadora'],
                ['Disco duro SSD 1TB', 'Almacenamiento sólido NVMe con alta velocidad de lectura.', 1800, 30, 'Tecnología', 'disco,ssd,almacenamiento,nvme,1tb'],
                ['Impresora multifuncional', 'Impresión, copiado y escaneo a color, conexión Wi-Fi.', 2400, 9, 'Tecnología', 'impresora,multifuncional,wifi,escaneo'],
                ['Cámara web HD', 'Webcam 1080p con micrófono integrado para videollamadas.', 950, 40, 'Tecnología', 'camara,web,hd,videollamada,1080p'],
                ['Audífonos Bluetooth', 'Audífonos inalámbricos con cancelación de ruido.', 1500, 25, 'Tecnología', 'audifonos,bluetooth,inalambricos,cancelacion'],
            ],
            'Restaurante Don Jose' => [
                ['Pozole rojo', 'Pozole de puerco servido con tostadas, lechuga y rábano.', 120, 40, 'Alimentos', 'pozole,rojo,comida,mexicana,puerco'],
                ['Chiles en nogada', 'Chiles poblanos rellenos con capeado y salsa de nuez.', 180, 15, 'Alimentos', 'chiles,nogada,poblano,platillo,mexicano'],
                ['Tamales oaxaqueños', 'Tamales de masa suave con diferentes guisados.', 25, 60, 'Alimentos', 'tamales,oaxaca,masa,guisado'],
                ['Agua de horchata 1L', 'Bebida refrescante de arroz con canela.', 45, 80, 'Alimentos', 'agua,horchata,arroz,bebida,canela'],
                ['Flan casero', 'Postre de flan con caramelo, porción individual.', 65, 30, 'Alimentos', 'flan,casero,postre,caramelo'],
            ],
            'Tienda de Ropa Moderna' => [
                ['Vestido floral verano', 'Vestido ligero con estampado floral para temporada cálida.', 520, 25, 'Ropa', 'vestido,floral,verano,ropa,mujer'],
                ['Suéter de lana', 'Suéter tejido de lana para clima frío.', 420, 18, 'Ropa', 'sweater,lana,abrigo,ropa,invierno'],
                ['Cinturón de piel', 'Cinturón de piel genuina con hebilla metálica.', 250, 45, 'Ropa', 'cinturon,piel,accesorio,hebilla'],
                ['Zapatos formales', 'Zapatos de vestir de piel para oficina.', 890, 12, 'Ropa', 'zapatos,formales,piel,oficina,vestir'],
                ['Gorra urbana', 'Gorra casual bordada de estilo urbano.', 180, 50, 'Ropa', 'gorra,urbana,casual,bordada'],
            ],
            'ElectroHogar MX' => [
                ['Lavadora automática 15 kg', 'Lavadora de carga frontal con 15 ciclos de lavado.', 13500, 6, 'Electrodomésticos', 'lavadora,automatica,carga frontal,15 kg,blanca'],
                ['Freidora de aire 5L', 'Air fryer con 8 modos de cocción y pantalla táctil.', 2200, 28, 'Electrodomésticos', 'freidora,aire,air fryer,cocina,salud'],
                ['Aspiradora robot', 'Robot aspirador con mapeo inteligente y control por app.', 4800, 10, 'Electrodomésticos', 'aspiradora,robot,mapeo,app,limpieza'],
                ['Cafetera espresso 15 bar', 'Cafetera de espresso con vaporizador de leche.', 3100, 16, 'Electrodomésticos', 'cafetera,espresso,15 bar,vapor,cafe'],
                ['Ventilador de torre', 'Ventilador oscilante de torre con control remoto.', 1300, 20, 'Electrodomésticos', 'ventilador,torre,oscilante,control remoto'],
            ],
            'Fitness Total' => [
                ['Mancuernas 20 kg ajustables', 'Par de mancuernas ajustables con barra y discos.', 3400, 15, 'Deportes', 'mancuernas,ajustables,pesas,gym,ejercicio'],
                ['Tapete yoga antideslizante', 'Tapete grueso de yoga con superficie antideslizante.', 350, 70, 'Deportes', 'tapete,yoga,antideslizante,ejercicio,colchoneta'],
                ['Cuerda para saltar', 'Cuerda de velocidad con rodamientos y mango ergonómico.', 180, 90, 'Deportes', 'cuerda,saltar,velocidad,cardio,gym'],
                ['Rodillos abdominales', 'Rueda abdominal para ejercicio de núcleo.', 250, 55, 'Deportes', 'rodillo,abdominales,rueda,core,gym'],
                ['Tenis para gimnasio talla 8', 'Calzado de entrenamiento con suela resistente.', 1900, 22, 'Deportes', 'tenis,gimnasio,entrenamiento,calzado,talla 8'],
            ],
            'Belleza Natural' => [
                ['Shampoo de coco 500ml', 'Shampoo nutritivo con aceite de coco y sin sulfatos.', 160, 75, 'Belleza', 'shampoo,coco,aceite,nutritivo,cabello'],
                ['Mascarilla facial carbón', 'Mascarilla purificante de carbón activado.', 120, 85, 'Belleza', 'mascarilla,facial,carbon,purificante,piel'],
                ['Perfume floral 50ml', 'Perfume floral para mujer de larga duración.', 650, 20, 'Belleza', 'perfume,floral,mujer,50ml,aroma'],
                ['Base de maquillaje', 'Base líquida de cobertura media para todo tipo de piel.', 280, 40, 'Belleza', 'base,maquillaje,liquida,cobertura,piel'],
                ['Exfoliante corporal azúcar', 'Exfoliante de azúcar morena con aceites naturales.', 140, 65, 'Belleza', 'exfoliante,azucar,corporal,natural,aceite'],
            ],
            'Cafetería El Aroma' => [
                ['Espresso doble', 'Café espresso doble preparado con granos de especialidad.', 55, 100, 'Alimentos', 'espresso,doble,cafe,especialidad'],
                ['Capuchino artesanal', 'Capuchino con espuma de leche cremosa y cacao.', 70, 90, 'Alimentos', 'capuchino,cafe,leche,artesanal,barista'],
                ['Té chai especiado', 'Infusión de té negro con especias y leche.', 60, 40, 'Alimentos', 'te,chai,especias,infusion'],
                ['Croissant de mantequilla', 'Croissant horneado de mantequilla, recién hecho.', 45, 50, 'Alimentos', 'croissant,mantequilla,pan,reposteria,desayuno'],
                ['Cheesecake de fresa', 'Rebanada de cheesecake con salsa de fresa.', 110, 20, 'Alimentos', 'cheesecake,fresa,postre,reposteria'],
            ],
            'Moda Urbana' => [
                ['Tenis urbanos blancos', 'Tenis casuales blancos de estilo urbano.', 980, 35, 'Ropa', 'tenis,urbanos,blancos,casual,calzado'],
                ['Pants deportivos', 'Pantalón de pants de algodón con cintura elástica.', 420, 28, 'Ropa', 'pants,deportivos,algodon,comodidad,ropa'],
                ['Camisa de cuadros', 'Camisa casual de franela con estampado de cuadros.', 380, 32, 'Ropa', 'camisa,cuadros,franela,casual,ropa'],
                ['Bolso crossbody', 'Bolso urbano con correa ajustable y bolsillos.', 550, 25, 'Ropa', 'bolso,crossbody,urbano,accesorio,correa'],
                ['Gorra trucker', 'Gorra trucker de malla con ajuste trasero.', 200, 60, 'Ropa', 'gorra,trucker,malla,ajuste,accesorio'],
            ],
        ];

        foreach ($productosPorEmpresa as $empresaNombre => $productos) {
            $empresa = Empresa::where('nombre', $empresaNombre)->first();
            if (!$empresa) {
                continue;
            }

            foreach ($productos as $p) {
                Producto::firstOrCreate(
                    ['id_empresa' => $empresa->id, 'nombre' => $p[0]],
                    [
                        'id_user' => $empresa->id_user,
                        'id_empresa' => $empresa->id,
                        'nombre' => $p[0],
                        'descripcion' => $p[1],
                        'precio' => $p[2],
                        'stock' => $p[3],
                        'categoria' => $p[4],
                        'palabras_clave' => $p[5],
                    ]
                );
            }
        }
    }
}
