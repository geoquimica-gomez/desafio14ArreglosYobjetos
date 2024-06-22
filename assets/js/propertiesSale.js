const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false,
        banos: 3
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true,
        banos: 2
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true,
        banos: 3
    },
    {
        nombre: 'Casa familiar con amplio jardín',
        src: 'https://previews.123rf.com/images/niserin/niserin1607/niserin160700025/59423019-patio-trasero-de-una-casa-de-familia-jard%C3%ADn-con-amplia-zona-verde-de-hierba-segada-plantas-y.jpg',
        descripcion: 'Una hermosa casa familiar con un amplio jardín y piscina',
        ubicacion: '234 Family Lane, Suburbia, TX 78901',
        habitaciones: 4,
        costo: 3500,
        smoke: false,
        pets: true,
        banos: 2
    },
    {
        nombre: 'Villa moderna con vistas al lago',
        src: 'https://trepievi.com/wp-content/uploads/2019/08/Render-MC056D-Mezzegra-Villa-moderna-1-1200x720.jpg',
        descripcion: 'Villa moderna con impresionantes vistas al lago y un diseño contemporáneo',
        ubicacion: '567 Lakeview Road, Lakeside, CA 12345',
        habitaciones: 5,
        costo: 6500,
        smoke: false,
        pets: true,
        banos: 3
    },
    {
        nombre: 'Cabaña rústica en el bosque',
        src: 'https://a0.muscache.com/im/pictures/f38eac39-e562-4d93-a63b-e0f7554abc6d.jpg?im_w=1440',
        descripcion: 'Encantadora cabaña rústica ubicada en medio del bosque, ideal para escapadas',
        ubicacion: '789 Forest Path, Woodland, OR 34567',
        habitaciones: 3,
        costo: 3000,
        smoke: true,
        pets: true,
        banos: 1
    }
];

const saleCards = document.getElementById('saleCards');

let html = '';

for (let propiedad of propiedades_venta) {
    html += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${propiedad.src}" class="card-img-top" alt="departamento" />
                        <div class="card-body">
                            <h5 class="card-title">
                                ${propiedad.nombre}
                            </h5>
                            <p class="card-text">
                                ${propiedad.descripcion}
                            </p>
                            <p>
                                <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                            </p>
                            <p>
                                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                                <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                            </p>
                            <p>
                                <i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                            ${propiedad.smoke ?
                                `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` :
                                `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                            }
                            ${propiedad.pets ?
                                `<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>` :
                                `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
                            }
                        </div>
                    </div>
                </div>
            `
}
saleCards.innerHTML = html;