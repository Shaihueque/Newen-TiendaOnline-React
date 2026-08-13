# 🛒 ReactPreEntrega - E-commerce

Aplicación e-commerce desarrollada con **React** como proyecto de entrega.  
La aplicación permite visualizar productos, filtrarlos por categoría, consultar el detalle de cada producto y realizar una orden de compra mediante un carrito.

---

## 🚀 Funcionalidades

La aplicación cuenta con las siguientes funcionalidades:

- 📦 Listado de productos.
- 🔎 Filtrado de productos por categoría.
- 👕 Visualización del detalle de cada producto.
- 🛒 Agregar productos al carrito.
- 🔔 Notificaciones dinámicas e interactivas al agregar productos (mediante React Toastify).
- 🔢 Modificar las cantidades de los productos.
- 🗑️ Eliminar productos del carrito.
- 💰 Visualizar el contenido del carrito y resumen de compra.
- 💳 Formulario de Checkout para finalizar la orden.
- 🎉 Confirmación de compra mediante modales personalizados (mediante SweetAlert2).
- ✅ Generación y guardado automático de órdenes en Firestore.
- 🧭 Navegación entre las diferentes vistas mediante React Router.
- 🔥 Gestión de datos mediante Firebase / Firestore.

---

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/) - Biblioteca para construir interfaces de usuario.
- [React DOM](https://react.dev/reference/react-dom) - Integración de React con el DOM del navegador.
- [React Router DOM](https://reactrouter.com/) - Manejo de rutas y navegación de la aplicación.
- [Firebase](https://firebase.google.com/docs) - Backend y base de datos (Firestore) para gestionar la información y las órdenes.
- [SweetAlert2](https://sweetalert2.github.io/) - Popups y modales atractivos para confirmación de compras.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) - Notificaciones de aviso al agregar ítems al carrito.
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje utilizado para la lógica de la aplicación.
- [CSS Modules](https://github.com/css-modules/css-modules) - Estilos encapsulados por componente.
- [Vite](https://vite.dev/) - Herramienta de desarrollo y build del proyecto.

---

## 💻 Instalación y Ejecución

Si querés clonar y ejecutar este proyecto de forma local:

1. Cloná el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)

## La estructura principal del proyecto se encuentra organizada de la siguiente manera:

src/
│
├── components/
│   │
│   ├── carrito/
│   │   ├── Cart.jsx
│   │   ├── ContenedorCart.jsx
│   │   └── ItemsCart.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── detailProduct/
│   │   ├── DetailProduct.jsx
│   │   ├── ItemDetailProduct.jsx
│   │   └── ItemDP.jsx
│   │
│   ├── footerComps/
│   │   ├── ContainerCompsFooter.jsx
│   │   ├── DerechosReservados.jsx
│   │   └── RedesContact.jsx
│   │
│   ├── modulesCSS/
│   │   ├── Carrito/
│   │   │   └── ItemsCart.module.css
│   │   ├── DetailProduct/
│   │   │   └── ItemDP.module.css
│   │   ├── FooterModules/
│   │   │   ├── containerCompsFooter.module.css
│   │   │   ├── DerechosReservados.module.css
│   │   │   └── RedesContact.module.css
│   │   ├── HeaderModules/
│   │   │   ├── Buscador.module.css
│   │   │   ├── ContainerCompHeader.module.css
│   │   │   ├── Logo.module.css
│   │   │   ├── Menu.module.css
│   │   │   └── UserIcons.module.css
│   │   ├── button.module.css
│   │   ├── CheckOut.module.css
│   │   ├── ItemList.module.css
│   │   ├── ItemListContainer.module.css
│   │   └── Items.module.css
│   │
│   └── navbarComps/
│       ├── Buscador.jsx
│       ├── ContenedorCompsHeader.jsx
│       ├── Logo.jsx
│       ├── Menu.jsx
│       └── UserIcons.jsx
│
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── firebase/
    ├── config.js
    └── db.js

## 📸 Vista paso a paso de la aplicación

### 1. Menú de Navegación y Encabezado

![Menú de Navegación](https://i.postimg.cc/T2BBnfM9/Menu.png)

Al ingresar a la e-commerce, el cliente se encuentra con la barra principal de navegación y encabezado:

* **Logo de la Marca (Newen):** Permite regresar al inicio desde cualquier punto del sitio.
* **Buscador:** Campo de texto interactivo para ubicar productos por nombre.
* **Menú de Categorías:** Enlaces de navegación rápida (*Inicio, Remeras, Buzos, Hombres, Mujeres, Unisex*). Al seleccionar cualquiera de ellos, la tienda filtra automáticamente la lista de productos mostrando únicamente los pertenecientes a esa categoría.
* **CartWidget (Icono del Carrito):** Muestra el acceso al carrito de compras. Incluye un badge contador dinámico que refleja la cantidad de unidades seleccionadas en tiempo real (permaneciendo oculto o en 0 cuando está vacío).

### 2. Catálogo y Tarjetas de Productos (Cards)

![Catálogo de Productos](https://i.postimg.cc/dVjXMC7G/Products-Inicio-YCategory.png)

En el cuerpo principal del catálogo (tanto en la vista de Inicio como al seleccionar una Categoría) los productos se presentan mediante un grid de tarjetas interactivas:

* **Información Visual y Detalle:** Cada tarjeta incluye una imagen en alta calidad del producto, su título (*ej. Remera Verde*), el precio actualizado y las etiquetas de sus categorías relacionadas (*hombres, remeras, oversize, unisex*).
* **Acceso al Detalle:** Al hacer clic sobre cualquier parte de la tarjeta o imagen, la aplicación navega hacia la vista individual del producto (`/item/:id`) para consultar la descripción completa y seleccionar unidades específicas.
* **Compra Rápida:** Cuenta con un botón **"Agregar al carrito"** en la base de la tarjeta que permite sumar directamente 1 unidad del artículo al carrito de compras sin necesidad de salir del catálogo.

Markdown
### 3. Vista de Detalle del Producto (ItemDetail)

![Detalle del Producto](https://i.postimg.cc/44jjpsk8/detail-Product.png)

Al ingresar a la vista detallada de un artículo, el cliente accede a una ficha técnica ampliada y personalizada:

* **Información Detallada:** Muestra la imagen principal en tamaño ampliado, título, precio unitario y una descripción detallada sobre las características de la prenda (*ej. estilo, calce y tipo de tela*).
* **Control de Cantidad (ItemCount):** Permite incrementar (`+`) o decrementar (`-`) el número de unidades a adquirir de forma intuitiva, asegurando que no se puedan seleccionar valores menores a 1.
* **Agregar al Carrito:** Al presionar el botón **"Agregar al carrito"**, se envía la cantidad exacta seleccionada al `CartContext`, actualizando de manera automática el total de ítems y el monto total en la aplicación.

### 4. Vista del Carrito de Compras (Cart)

![Carrito de Compras](https://i.postimg.cc/T15qTzCN/carrito.png)

Al ingresar a la sección de **"Mi Carrito"**, el usuario puede visualizar el desglose detallado de todos los artículos seleccionados antes de confirmar la orden:

* **Gestión de Cantidades por Ítem:** Cada ítem guardado permite modificar la cantidad deseada mediante los botones `+` y `-`, recalculando el costo en tiempo real.
* **Eliminación Individual:** Cuenta con un botón **"Eliminar"** destacado para remover por completo un producto específico de la lista.
* **Resumen de Compra Dinámico:** Muestra la cantidad total de unidades seleccionadas, el Sub Total y el Total a pagar, calculados dinámicamente multiplicando las unidades por sus respectivos precios unitarios.
* **Iniciar Checkout:** Al presionar el botón **"COMPRAR"**, la aplicación redirige a la vista de confirmación y formulario para completar los datos de contacto y envío del cliente.

### 5. Formularios de Checkout y Generación de Orden (Checkout)

![Confirmación de Compra](https://i.postimg.cc/Hn84TqBS/confirm-Compra.png)

En el último paso del proceso de compra, el usuario completa sus datos personales para procesar el pedido:

* **Formulario de Contacto:** Se solicitan los campos obligatorios (*Nombre completo, Email, Número de celular y Dirección de entrega*).
* **Confirmación del Importe:** Muestra el precio final total acumulado a abonar antes de enviar el pedido.
* **Integración con Base de Datos (Firebase / Firestore):** Al hacer clic en **"Finalizar Compra"**, se genera automáticamente un nuevo documento dentro de la colección de órdenes en la base de datos, almacenando los datos del comprador, los productos seleccionados, cantidades y fecha.
* **Confirmación y Agradecimiento:** Al completarse la transacción con éxito, el sistema dispara una alerta interactiva de agradecimiento (mediante SweetAlert2) indicando la confirmación del pedido y ofreciendo un botón para redirigir directamente a la página de inicio.

### 🔔 Feedback Visual y Notificaciones al Usuario

La aplicación cuenta con respuestas visuales en tiempo real para mantener al usuario informado sobre cada acción realizada:

####  Notificaciones Flotantes (React Toastify)
![Notificación de Agregado al Carrito](https://i.postimg.cc/XqBcnRQH/Agregamos-acarrito.png)

* **Confirmación Inmediata:** Cada vez que se agrega un producto (desde el catálogo o desde el detalle), se despliega una alerta flotante en la esquina inferior.
* **Detalle Personalizado:** La notificación indica de forma clara la cantidad y el nombre exacto del artículo ingresado (*ej. "Agregaste 1 Buzo Negro al carrito"*).

####  Modal de Confirmación de Orden (SweetAlert2)
![Modal de Compra Realizada](https://i.postimg.cc/MZgg1q2b/Fin-Compra.png)

* **Feedback Final de Compra:** Al procesar la orden en el Checkout, se abre un cuadro modal que confirma el éxito de la transacción.
* **Resumen de Pedido:** Informa al cliente el código/ID de seguimiento asignado en Firebase y el monto total abonado.
* **Navegación Rápida:** Ofrece el botón **"Volver al Inicio"** para reiniciar el flujo de la tienda de forma simple y amigable.

---

## 👨‍💻 Autor

**Julian Jara Aguirre** 

Frontend Developer apasionado por el desarrollo web y la creación de interfaces modernas y funcionales.

### Contacto y enlaces

- 📧 **Email:** [shaihueque@gmail.com](mailto:tu-email@gmail.com)
- 💼 **Portfolio:** [Proximamente](Proximamente)
- 🐙 **GitHub:** [Ver GitHub](https://github.com/Shaihueque/Newen-TiendaOnline-React.git)
- 🚀 **Demo:** [Ver aplicación en Vercel](https://tu-proyecto.vercel.app/)