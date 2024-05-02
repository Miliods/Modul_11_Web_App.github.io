from aiogram import Dispatcher, types
from aiogram.filters import CommandStart

dp = Dispatcher()


@dp.message(CommandStart())
async def start(message: types.Message):
    await message.answer("hello")