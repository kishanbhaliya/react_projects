from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from .database import Base

class TiffinOrder(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    phone = Column(String)
    items = Column(String)
    address = Column(String)
    status = Column(String, default="Pending")
    timestamp = Column(DateTime, default=datetime.utcnow)
