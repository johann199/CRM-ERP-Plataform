from fastapi import FastAPI
from app.db.database import engine, Base
from contextlib import asynccontextmanager

## Aqui van las rutas de la API. 


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Aquí puedes realizar tareas de inicialización, como crear tablas en la base de datos
    Base.metadata.create_all(bind=engine)
    yield
    # Aquí puedes realizar tareas de limpieza, si es necesario

app = FastAPI(lifespan=lifespan)