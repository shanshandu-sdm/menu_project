from django.urls import path
from .views import get_menu_items, add_menu_item

urlpatterns = [
    path('menu/', get_menu_items, name='get_menu_items'),
    path('menu/add/', add_menu_item, name='add_menu_item'),
]
