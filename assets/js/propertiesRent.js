const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_825967-MLV74673627539_022024-O.webp',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true,
        banos: 1
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRcfP66YBgC5rYKHSLY5Wb6q1su25kxwlwg&shttps://cf.bstatic.com/xdata/images/hotel/max1024x768/403324465.jpg?k=6a6777ebb635a3c3409f7107167d7f0f9b82234d3a802e0ac710c6a7d28b16ad&o=&hp=1',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true,
        banos: 2
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZdi5luu-FagdeDoHaMpLx435FSnMwYufQw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMeoE0_3nBS4gTsFvJjBmUo-aENPClIkdSA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHe9cLNiw8r0HpIV5GcxqrqCrZiYsHJA6PbA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAUqAZ7aYhprZX8SBRXsf1z_vipqFlCLTYw&shttps://cf.bstatic.com/xdata/images/hotel/max1024x768/520292767.jpg?k=c0f74c81152c08b903f45963e3919f60d8670cae256c19e057fcb270dbde90df&o=&hp=1',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false,
        banos: 2
    },
    {
        nombre: 'Loft urbano con diseño industrial',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmm0KbSkl_2rcqGXMcxlb7n9mhH0A5Gpemw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXupRYLaaDfjZtg-lR_9pvKe-t7GxoOom8dg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJA86ejbf-17v_q_vqTbGbdiHh29-qv7bRwg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdmHwbFMC01YKdE1USRWzzEVP2qp-fwTlqQ&shttps://images.homify.com/v1439804096/p/photo/image/531821/IMG_5064.jpghttps://images.adsttc.com/media/images/5e8f/cda6/b357/65ca/ec00/0464/newsletter/_fi.jpg?1586482557',
        descripcion: 'Este loft urbano cuenta con un diseño industrial moderno en el centro de la ciudad',
        ubicacion: '456 Urban Avenue, Cityscape, NY 11223',
        habitaciones: 1,
        costo: 1800,
        smoke: true,
        pets: true,
        banos: 1
    },
    {
        nombre: 'Apartamento espacioso con jardín',
        src: 'https://facilityvenezuela.com/wp-content/uploads/2020/12/remodelacion-de-apartamentos-en-venezuela-%E2%80%93-facility-venezuela-9.jpg',
        descripcion: 'Un apartamento espacioso con un jardín privado y muchas áreas verdes',
        ubicacion: '789 Green Lane, Garden City, TX 78901',
        habitaciones: 3,
        costo: 2400,
        smoke: false,
        pets: true,
        banos: 2
    },
    {
        nombre: 'Estudio moderno en zona céntrica',
        src: 'https://a0.muscache.com/im/pictures/d8d71dab-fbc8-4a71-a307-952415db36b9.jpg?im_w=720',
        descripcion: 'Estudio moderno completamente amueblado en el centro de la ciudad',
        ubicacion: '123 Studio Blvd, Downtown, FL 45678',
        habitaciones: 1,
        costo: 1500,
        smoke: true,
        pets: false,
        banos: 1
    }
];


const rentCards = document.getElementById('rentCards');

let html = '';

for (let propiedad of propiedades_alquiler) {
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
rentCards.innerHTML = html;