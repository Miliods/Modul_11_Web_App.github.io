from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo, InlineKeyboardMarkup, InlineKeyboardButton

web_app = WebAppInfo(url="https://miliods.github.io/Modul_11_Web_App.github.io/")
app_kb = ReplyKeyboardMarkup(keyboard=[
    [KeyboardButton(text="Mini app", web_app=web_app)]
], resize_keyboard=True)
buy_ikb = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text="Tolov", callback_data='buy')],
])
