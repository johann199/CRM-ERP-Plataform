# CONFIGURACIÓN BACKEND
### INSTALACIÓN DEL ENTORNO VIRTUAL.

- python -m venv .venv (se puede cambiar el .venv por otro nombre, debe tenerlo en cuenta para la ejecución).
- python3 -m venv .venv (comando alternativo en caso que no funcione el anterior).
- Activación: 
    - .ven\Scripts\activate (para windows)
    - source .venv/bin/activate (para linux o macOS)
Nota: en caso de colocar otro nombre ejemplo: erp se debe activar así -> .erp\Scripts\activate.

### INSTALACIÓN DE LIBRERIAS

- Despues de activar el entorno virtual, se instala las librerias con el comando: 
    pip install requirements.txt.

Con esto de momento esta listo el backend, falta la configuración a la base de datos que estoy en ese tema el día de hoy.

### Archivo .env
- Crear un archivo .env en la carpeta del backend con la siguiente configuración
    DATABASE_URL = "postgresql://postgres:erp_1234@localhost:5433/erp_db"
    SECRET_KEY = ""


## Activar el docker

- docker compose up -d

### Iniciar la aplicación desde el backend
- dentro de la carpeta backend ejerucutar el comando:
    - fastapi dev
