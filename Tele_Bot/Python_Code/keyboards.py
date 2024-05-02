from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

web_app = WebAppInfo(url="https://www.google.com/search?q=google+game+x+o&sca_esv=8f14c8c94b33adc6&ei=-HczZpLUK-KA1fIPo8STkAE&udm=&ved=0ahUKEwiSsPvK7e6FAxViQFUIHSPiBBIQ4dUDCBA&uact=5&oq=google+game+x+o&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2dvb2dsZSBnYW1lIHggbzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYRzIEEAAYR0i9DlDuBljuBnADeAKQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQGYAgSgAg3CAgoQABiwAxjWBBhHmAMA4gMFEgExIECIBgGQBgiSBwE0oAcA&sclient=gws-wiz-serp")

app_kb = ReplyKeyboardMarkup(keyboard=[
    [KeyboardButton(text="Mini app", web_app=web_app)]
], resize_keyboard=True)