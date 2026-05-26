from django.urls import path
from . import views

urlpatterns = [

    path('add/', views.add_candidate),

    path('all/', views.get_candidates),

    path('delete/<int:id>/', views.delete_candidate),

    path('status/<int:id>/',views.update_status),
]