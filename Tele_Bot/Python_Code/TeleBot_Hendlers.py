from aiogram import Dispatcher, types, F
from aiogram.filters import CommandStart

from Tele_Bot.Python_Code.keyboards import app_kb

dp = Dispatcher()


@dp.message(CommandStart())
async def start(message: types.Message):
    await message.answer("hello", reply_markup=app_kb)


@dp.message(F.data)
async def get_btn(message: types.Message):
    await message.answer(message.text)
    