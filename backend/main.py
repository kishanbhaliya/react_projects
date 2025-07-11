from fastapi import FastAPI
from . import models, database
from .routers import orders
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

#Allow Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=database.engine)

app.include_router(orders.router)