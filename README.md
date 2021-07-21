<h1> Tutorial No es un blog. Es una App de apuntes. </h1>

<p> La mejor forma de aprender contenido nuevo, al menos me funciona a mi, es intentar duplicar el contenido como si de una clase o explicación se  tratase. Es muy probable, que mucho del contenido que aquí expongo, tenga errores conceptuales, pero los códigos funcionan y son duplicables. Eso significa que con la práctica, los problemas conceptuales desaparecerán con el tiempo.</p>

<br/>

<blockquote>" Intentar explicar es una de las mejores formas de aprender"</blockquote> 

<br/>

<p>Esta APP ya está deployada y activa. Puedes ver la página <a href="https://tutorials-vert.vercel.app/" target="_blank">aquí</a></p>

<p><b>Quiero invitarte a que tomes apuntes en esta APP y me solicites un PULL REQUETS</b></p>

<p>Intentaré guiarte cómo trabajar con esta APP</p>

<h2>Instalación</h2>

<p>Esta es la típica app creada con <i>npx create-react-app my-app</i> por tanto, hay que seguir las instrucciones básicas de instalación.</p>

<h3>Requisitos: <small>NODE JS y conocimientos básicos, MUY básicos de REACT y GIT</small></h3>

<br/>

<ol>
    <li>Clonas el proyecto</li>
    <li>Abres la consola en la root del proyecto</li>
    <li><i>npm i</i> // Para instalar las dependencias</li>
    <li><i>npm start</i> // Para ejecutar la App en modo desarrollo</li>
    <li>Ahora abre el navegador, y tu editor de texto y ya puedes aportar a este proyecto.</li>
</ol>

<h2>¿Cómo agregar nuevos menús y/o submenús?</h2>

<p>Mejor ilustramos los componentes que debes tocar para añadirlos.</p>
<ol>Los componentes que están en la carpeta componentes.
    <li>Añadir en el componente un nuevo Menu ó Submenú. <img alt="fotoMenu" src="https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2F1.jpg?alt=media&token=cdc00f44-bf86-49ae-95ca-d6dac1dce618"/></li>
    <li>Si deseas crear un tutorial nuevo, revisa la carpeta pages y si sigue su formato, y estudia a fondo el index.js de cualquier página. Crea tu carpeta nueva, y tu index nuevo. Si solo deseas añadir un submenú (un tema que encaje bien en algún tema principal descrito en el menú) entonces, asegurate de colocarlo dentro de la función Child dentro del index.js de la carpeta asociada al menú. <img alt="foto-submenu" src="https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2F2.jpg?alt=media&token=b6f78711-6a40-4ade-8dc7-6eecded0140e" /></li>
    <li>Añade en App.js la nueva ruta.  Si has añadido un nuevo temario o menú completo.</li>
    <li>Para crear el contenido de cada subtema, estudia el componente DetallesSubtema.js y sigue su formato para que no se rompan los estilos. Deberás crear un archivo de la siguiente forma. <img alt="foto-subtema" src="https://firebasestorage.googleapis.com/v0/b/twitter-clone-d82aa.appspot.com/o/images%2F3.jpg?alt=media&token=84a703f0-840c-4dca-8884-c7490c79e465" /></li>
    <li>Solicita PR cuando quieras. ¿Qué sacas de todo esto? El proyecto está deployado y podrás consultar tus apuntes desde el móvil o PC.</li>
    <li>Gracias de antemano si decides colaborar.</li>
</ol>