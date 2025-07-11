from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import schemas, crud, database

router = APIRouter(prefix="/orders", tags=["Orders"])

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
@router.post("/", response_model=schemas.OrderOut)
def create_new_order(order: schemas.OrderCreate, db:Session = Depends(get_db)):
    return crud.create_order(db, order)

@router.get("/", response_model=list[schemas.OrderOut])
def get_all_orders(db: Session = Depends(get_db)):
    return crud.get_orders(db)

@router.put("/{order_id}/{status}", response_model=schemas.OrderOut)
def change_status(order_id: int, status: str, db: Session = Depends(get_db)):
    return crud.update_status(db, order_id, status)
