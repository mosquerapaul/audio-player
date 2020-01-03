# audio-player
Reproductor de audio desarrollado con Node.js y Angular 8. 

Aplicación demo para afianzar conocimientos en Angular y Node.

Tecnologías utilizadas:
Backend: Node.js y espress
Frontend: Angular8, Material Design y módulos rxjs, 

# Demo Live
https://aplayerf.herokuapp.com/

## Estado del desarrollo
Actualmente el reproductor es funcional, permite utilizar los botones de reproducción inferiores para:
- Play
- Pausa
- Next
- Previous

Actualmente está pendiente de algunas funcionalidades para una correcta experiencia de usuario:
- Iniciar siguiente audio cuando termina el actual
- Al pulsar siguiente o anterior sin haber pulsado play previamente no permite iniciar la reproducción
- Implementar botones de play, pausa, editar y eliminar audio
- Implementar subida de nuevos audios

## Instalación Local
```bash
git clone https://github.com/mosquerapaul/audio-player.git
cd audio-player
npm install
npm start
```

## Organización de archivos:
- app.js //servidor express
- angular-player //carpeta angular
  - audio-player.module
    - componentes
    - services
  - shared //módulos compartidos
    - material-design
  - assets //Ficheros de audio y otros ficheros estáticos
- public //Carpeta donde se construlle la aplicación de angular en producción montada como carpeta raiz del servidor express
