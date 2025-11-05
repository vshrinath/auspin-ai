from fastapi import APIRouter

router = APIRouter(prefix="/health", tags=["Health"])


@router.get("", summary="Health check endpoint")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
