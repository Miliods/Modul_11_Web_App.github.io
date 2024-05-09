from aiogram import Dispatcher, types, F
from aiogram.filters import CommandStart

from Tele_Bot.Python_Code.keyboards import app_kb

dp = Dispatcher()


@dp.message(CommandStart())
async def start(message: types.Message):
    await message.answer("hello", reply_markup=app_kb)


@dp.message(F.func(lambda message: message.web_app_data.data == "TestMessage"))
async def get_btn(message: types.Message):
    await message.answer(message.web_app_data.data)
    