from fastapi import APIRouter

router = APIRouter(prefix="/admin", tags=["admin"])

@router.get("/dashboard")
def get_dashboard():
    return {"message": "Welcome to the admin dashboard!"}