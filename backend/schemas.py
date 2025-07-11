from pydantic import BaseModel

class OrderCreate(BaseModel):
    name: str
    phone: str
    items: str
    address: str
    
class OrderOut(OrderCreate):
    id: int
    status: str
    
    class Config:
        orm_mode = True