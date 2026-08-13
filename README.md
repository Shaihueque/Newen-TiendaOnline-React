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

## 👨‍💻 Autor

**Julian Jara Aguirre** 

Frontend Developer apasionado por el desarrollo web y la creación de interfaces modernas y funcionales.

### Contacto y enlaces

- 📧 **Email:** [shaihueque@gmail.com](mailto:tu-email@gmail.com)
- 💼 **Portfolio:** [Proximamente](https://tu-portfolio.vercel.app/)
- 🐙 **GitHub:** [Ver GitHub](https://github.com/tu-usuario)
- 🚀 **Demo:** [Ver aplicación en Vercel](https://tu-proyecto.vercel.app/)