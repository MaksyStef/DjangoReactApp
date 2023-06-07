from rest_framework import routers
from todo import views

router = routers.DefaultRouter()
router.register(r'', views.TodoView, 'todo')

urlpatterns = router.urls