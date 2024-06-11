const comidas = [
    {
        id: 'ffprod-202402',
        name: 'Hamburguesa Completa',
        price: 8700,
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar',
        description: 'Una jugosa hamburguesa de res con queso derretido, lechuga, tomate y pepinillos en un pan tostado.'
    },
    {
        id: 'ffprod-202403',
        name: 'Nuggets de Pollo ',
        price: 5700,
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcX2hh1W/200/200/original?country=ar',
        description: 'Doce crujientes nuggets de pollo dorados, servidos con la salsa de tu elección.'
    },
    {
        id: 'ffprod-202404',
        name: 'Hamburguesa Vegana',
        price: 9000,
        img: 'https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/WhopperVegetal_2604.png',
        description: 'Una deliciosa hamburguesa de lentejas con vegetales frescos y una salsa picante.'
    },
    {
        id: 'ffprod-202405',
        name: 'Ensalada César',
        price: 6200,
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kEXXe08B/200/200/original?country=ar',
        description: 'Lechuga romana fresca, crutones, queso parmesano y aderezo César.'
    },
    {
        id: 'ffprod-202407',
        name: 'Sandwich de Pollo',
        price: 7800,
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$ktXfGUzp/200/200/original?country=ar',
        description: 'Pechuga de pollo a la parrilla con lechuga, tomate y mayonesa en un pan tostado.'
    },
    {
        id: 'ffprod-202413',
        name: 'Hamburguesa BBQ con Tocino',
        price: 9200,
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kQX3BMhy/200/200/original?country=ar',
        description: 'Una hamburguesa de res con salsa BBQ, tocino, queso y aros de cebolla en un pan tostado.'
    },
    {
        id: 'ffprod-202408',
        name: 'Wrap de Pollo César',
        price: 7500,
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$ktX156kS/200/200/original?country=pr',
        description: 'Pollo a la parrilla, lechuga romana, queso parmesano y aderezo César envueltos en una tortilla.'
    },
    {
        id: 'ffprod-202406',
        name: 'Sándwich de Pollo Picante',
        price: 8400,
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$krXaagSr/200/200/original?country=ar',
        description: 'Un filete de pollo picante a la plancha con salsa BBQ en pan de campo.'
    },
];

const bebidas = [
    {
        id: 'ffprod-12301',
        name: 'Coca-Cola',
        price: 2700,
        img: 'https://ams3.digitaloceanspaces.com/graffica/2023/02/la-ola-de-cocacola.png',
        description: 'Una bebida de cola clásica y refrescante.'
    },
    {
        id: 'ffprod-12302',
        name: 'Pepsi',
        price: 2700,
        img: 'https://fullstop360.com/blog/wp-content/uploads/2020/09/Chapter-five-reversing-colors.jpg',
        description: 'Una popular soda con sabor a cola.'
    },
    {
        id: 'ffprod-12303',
        name: 'Sprite',
        price: 2700,
        img: 'https://brandemia.org/contenido/subidas/2022/05/nueva-identidad-visual-de-sprite-2022.png',
        description: 'Una soda crujiente y refrescante con sabor a limón-lima.'
    },
    {
        id: 'ffprod-12304',
        name: 'Fanta Naranja',
        price: 2700,
        img: 'https://static.vecteezy.com/system/resources/previews/007/978/621/non_2x/fanta-popular-drink-brand-logo-vinnytsia-ukraine-may-16-202-free-vector.jpg',
        description: 'Una soda afrutada y burbujeante con sabor a naranja.'
    },
    {
        id: 'ffprod-12305',
        name: 'Jugo de Naranja',
        price: 2500,
        img: 'https://img.europapress.es/fotoweb/fotonoticia_20171106083335_1200.jpg',
        description: 'Un jugo de naranja exprimido, fresco y ácido.'
    },
    {
        id: 'ffprod-12306',
        name: 'Limonada',
        price: 3000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vTVWFDF7yg8r4ouOdEnwYGQSZHj9qVJYrA&s',
        description: 'Una limonada clásica hecha con limones frescos.'
    },
    {
        id: 'ffprod-12307',
        name: 'Dr Pepper',
        price: 2700,
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8IBL20hmuQ0XaKwfmfkbim5gaUg_2b7p4NODMaWqdGOziHbsv',
        description: 'Una mezcla única de 23 sabores en una soda refrescante.'
    },
    {
        id: 'ffprod-12308',
        name: 'Agua',
        price: 2200,
        img: 'https://i.pinimg.com/originals/88/df/c0/88dfc0553c52065716ad616804d83bae.jpg',
        description: 'Una botella de agua refrescante para saciar tu sed.'
    }
];

// juntamos los elementos de los dos array en uno (usando spread operator)
const menu = [...comidas, ...bebidas]

// funciones que corren al iniciar
cargarSeccionMenu(comidas, "#comidas") //llena la seccion del menu comidas con las opciones
cargarSeccionMenu(bebidas, "#bebidas") //llena la seccion del menu bebidas con las opciones
buttonAddEventListener()               //asigna a botones el avento de agregar al carro
mostrarCarrito()                       //muestra el carrito si ya existe el dato en el localStorage

// para no repetir codigo, creamos una fx que recibe un array y la seccion donde se mostrará ese array
function cargarSeccionMenu(array, section){
    // traemos la seccion que se va a llenar
    let sectionMenu = document.querySelector(section)
    // le quitamos el hash para luego utilizar el nombre del array como variable
    let nombreArray = section.slice(1)

    // creo el div del titulo y la search-bar de la seccion
    let sectionTitleBar = document.createElement("div")
    sectionTitleBar.setAttribute("id",`${nombreArray}-title-bar`)
    // creamos el titulo
    let sectionTitle = document.createElement("h1")
    sectionTitle.classList.add("title")
    sectionTitle.textContent = `Elegi tus ${nombreArray}`
    // creamos la searchbar
    let inputSearchBar = document.createElement("input")
    inputSearchBar.setAttribute("id",`${nombreArray}-search-bar`)
    inputSearchBar.setAttribute("placeholder",`Search`)
    inputSearchBar.classList.add("search-bar")

    // apendeamos ambos a la barra y apendeamos la barra a la seccion
    sectionTitleBar.append(sectionTitle,inputSearchBar)
    sectionMenu.append(sectionTitleBar)

    // creamos el div donde iran las opciones de los menú
    let menuOptions = document.createElement("div")
    menuOptions.setAttribute("id",`menu-${nombreArray}`)
    menuOptions.classList.add("menu-options")

    // llamamos a la fx para mostrar las opciones del menu (inicialmente se muestran todas)
    mostrarMenu(array, menuOptions)

    // asignamos un eventlistener al input de busqueda
    inputSearchBar.addEventListener("input", (event) => {
        let userInput = event.target.value.toLowerCase()

        const filterItems = (menuOptions) => {
            return menuOptions.filter(option => option.name.toLowerCase().includes(userInput));
        };

        // filtramos el array que llega por parametro, con lo que indique el usuario
        newArray = filterItems(array)
        // llamamos a la fx mostrarMenu para actualizar el dom con el nuevo array filtrado
        mostrarMenu(newArray, menuOptions)
    })
    
    // por ultimo agregamos el container a la seccion
    sectionMenu.append(menuOptions)
}

// funcion que actualiza el DOM con los elementos del array que pasemos por parametro en el div que pasemos por parametro
function mostrarMenu(array, container){
   
    let sectionHTML = ""

    // iteramos el array de comidas o bebidas que llega por parametro y creamos el html para cada opcion del menu
    for (let option of array) {
        // += para que no se reescriba el contenido del html, sino que se sume
        sectionHTML += `
        <div class="menu-card" id=${option.id}>
          <img src=${option.img} alt=${option.description}>
          <div class="menu-card-info">
            <h3>${option.name}</h3>
            <p>${option.description}</p>
            <div class="price-button">
                <b>$${option.price.toFixed(2)}</b>
                <button class="add-to-cart" data-id=${option.id}>Agregar</button>
            </div>
          </div>
        </div>
        `
    }
    // añadimos los objetos a la seccion
    container.innerHTML = sectionHTML

    // reasignamos event listeners una vez actualizado el DOM
    buttonAddEventListener();
}

// funcion que le da a los botones el evento on-click para añadirlos al pedido.
function buttonAddEventListener() {
    // traemos todos los botones creados en la fx anterior
    let botonesAdd = document.querySelectorAll(".add-to-cart")

    // por cada boton del array
    botonesAdd.forEach(boton => {
        // añadimos un EventListener cuando el usuario haga click
        boton.addEventListener("click", () => {
            // que recupere el id de la opcion a la que pertenezca el boton
            const optionMenuID = boton.getAttribute("data-id")
            // lo añadimos al carrito
            addToCart(optionMenuID)
        })
    })
}

// para añadir productos al carrito, necesitamos almacenarlo en el localStorage
function addToCart(menuID) {
    // creamos un carrito que contendra lo guardado en localStorage o si no, un array vacio
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []

    // usamos HOF .find para traer el objeto de nuestro array que coincida con el id que tenemos 
    let optionMenu = menu.find(option => option.id === menuID)

    // y buscamos si ese elemento tambien ya esta en nuestro carrito
    let ordenesEnCarrito = carrito.find(orden => orden.id === menuID)

    // si ya existe
    if (ordenesEnCarrito) {
        // le sumamos 1 a la cantidad y calculamos el precio total
        ordenesEnCarrito.quantity += 1
        ordenesEnCarrito.totalPrice = ordenesEnCarrito.quantity * ordenesEnCarrito.price
    } else {
        // sino pusheamos el objeto optionMenu que trajimos antes al carrito (le agregamos prop cantidad, y $ total)
        carrito.push({
            ...optionMenu,
            quantity: 1,
            totalPrice: optionMenu.price
        })
    }
    // guardamos en el localstorage el objeto carrito con los cambios
    localStorage.setItem('carrito', JSON.stringify(carrito));
    // mostramos el carrito
    mostrarCarrito();
}

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []

    // traemos el contenedor donde iran las ordenes
    let pedidosSeccion = document.querySelector("#contenedor-pedidos")
    // inicializamos el contenido del contenedor vacio
    pedidoHTML = ""
    // cada pedido agragado al carrito
    for (let pedido of carrito) {

        // le damos la estructura html
        pedidoHTML += `
        <div class="lista-pedido" id=${pedido.id}>
            <div class="item-pedido" id=${pedido.id}>
                <p>${pedido.name}</p>
                <p>(${pedido.quantity})</p>
                <p>$${pedido.price}</p>
                <div class="price-button">
                    <b>$${pedido.totalPrice.toFixed(2)}</b>
                    <button class="eliminar-orden" data-id=${pedido.id}>
                    <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        </div>

        `
    }

    // agregamos la estructura creada a la seccion contenedora
    pedidosSeccion.innerHTML = pedidoHTML

    // agregar funcionalidad para eliminar del carrito
    document.querySelectorAll('.eliminar-orden').forEach(boton => {
        boton.addEventListener('click', () => {
            let menuID = boton.getAttribute('data-id')
            eliminarDelCarrito(menuID) //llamamos a la fx elimiar declarada abajo
        });
    });

    // HOF .reduce para sumar los totales de cada pedido
    let totalCarrito = carrito.reduce((acc, pedido) => acc + pedido.totalPrice, 0);
    // traemos la seccion donde se muestra el carrito
    let seccionCarrito = document.querySelector("#seccion-carrito")
    // traemos el contenedor donde mostraremos el total
    let carritoTotalPrice = document.querySelector(".contenedor-importe-total")

    // si el carrito tiene ordenes, mostramos el total del pedido.
    if (totalCarrito > 0) {
        seccionCarrito.classList.remove("hidden-box") //removemos la clase para que se vea la seccion en pantalla
        cartButtonPopper()
        carritoTotalPrice.innerHTML = `
            <p>El total de su pedido es de: <b>$${totalCarrito.toFixed(2)}</b></p>
            <a><button class="btn btn-outline-warning btn-sm m-2">Realizar pedido <i class="fa-brands fa-whatsapp"></i></button></a>`
        let boton = carritoTotalPrice.lastElementChild
        boton.setAttribute("href", "https://wa.me/FastFeedOrderBot")

    } else {
        // sino esta vacio, entonces escondemos la seccion
        seccionCarrito.classList.add("hidden-box")
    }

}

function eliminarDelCarrito(menuID) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoEditado
    let menuOptionToDelete = carrito.find(orden => orden.id === menuID)
    
    // si del objeto a eliminar, la cantidad es mayor a uno, restamos 1 del carrito y actualizamos el precioTotal de la orden
    if (menuOptionToDelete.quantity > 1) {
        menuOptionToDelete.quantity -= 1
        menuOptionToDelete.totalPrice = menuOptionToDelete.quantity * menuOptionToDelete.price
        carritoEditado = carrito
    } else {
        // sino HOF .filter() para mantener los elementos que NO coincidan con el ID que le pasamos
        carritoEditado = carrito.filter(orden => orden.id !== menuID)
    }

    localStorage.setItem('carrito', JSON.stringify(carritoEditado))
    mostrarCarrito()
}

// funcion que crea el boton para ir al carrito en el div del html correspondiente
function cartButtonPopper() {
    let containerCarrito = document.querySelector("#cart-button")
    containerCarrito.classList.add("cart-button-container")

    let carritoButton = document.createElement("button")
    carritoButton.innerHTML = '<i class="fa-solid fa-cart-shopping"> </i>'

    carritoButton.addEventListener("click", () => {
        let carritoSection = document.querySelector("#seccion-carrito")
        carritoSection.scrollIntoView()
    })

    containerCarrito.replaceChildren(carritoButton)
}

/////////// dark mode ////////////////

// elementos que van a cambiar con el toggler
let btnColorMode = document.querySelector("#color-mode")
let btnColorIcon = document.querySelector("#color-mode-icon")
let nav = document.querySelector(".navbar")

// funcion que evalua el tema al activar el boton toggler
function setColorMode() {
    let colorMode = localStorage.getItem('theme')
    colorMode == 'light' ? setDarkmode() : setLightmode()
}

// setea el local storage en "dark" y hace los cambios del modo al html 
function setDarkmode() {
    localStorage.setItem('theme', 'dark')
    document.body.classList.add("dark-mode")
    btnColorIcon.classList.replace("fa-lightbulb", "fa-moon")
    nav.classList.replace("navbar-light", "navbar-dark")
    nav.classList.replace("bg-light", "bg-dark")
}

// setea el local storage en "light" y hace los cambios del modo al html 
function setLightmode() {
    document.body.classList.remove("dark-mode")
    localStorage.setItem('theme', 'light')
    btnColorIcon.classList.replace("fa-moon", "fa-lightbulb")
    nav.classList.replace("navbar-dark", "navbar-light")
    nav.classList.replace("bg-dark", "bg-light")
}

// dark mode toggler event listener
btnColorMode.addEventListener("click", () => {
    setColorMode()
})

// evalua si hay un tema guardado en el localstorage para que la pag recargue en el tema que estaba
let colorMode = localStorage.getItem('theme')
!colorMode ? setLightmode() : colorMode == "dark" ? setDarkmode() : "";
