from sqlalchemy.orm import Session
from . import models, schemas

def create_order(db: Session, order: schemas.OrderCreate):
    db_order = models.TiffinOrder(**order.dict())
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    return db_order

def get_orders(db: Session):
    return db.query(models.TiffinOrder).all()

def update_status(db: Session, order_id: int, new_status: str):
    order = db.query(models.TiffinOrder).filter(models.TiffinOrder.id == order_id).first()
    if order:
        order.status = new_status
        db.commit()
    return order