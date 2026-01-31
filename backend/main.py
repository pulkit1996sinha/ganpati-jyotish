from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import SessionLocal, engine
from models import Base, Contact
from schemas import ContactCreate

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Ganpati Jyotish API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root():
    return {"status": "Ganpati Jyotish Backend Running"}

@app.post("/contact")
def submit_contact(data: ContactCreate, db: Session = Depends(get_db)):
    contact = Contact(
        name=data.name,
        phone=data.phone,
        message=data.message
    )
    db.add(contact)
    db.commit()
    return {"message": "Consultation request received"}
