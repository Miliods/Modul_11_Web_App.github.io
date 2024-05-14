from aiogram import Dispatcher, types, F
from aiogram.filters import CommandStart

from Tele_Bot.Python_Code.keyboards import app_kb

dp = Dispatcher()


@dp.message(CommandStart())
async def start(message: types.Message):
    await message.answer("hello", reply_markup=app_kb)


@dp.message(F.func(lambda msg: msg.web_app_data.data))
async def get_btn(msg: types.Message):
    text = msg.web_app_data.data
    title = text.split('/')[0]
    price = int(text.split('/')[1])
    quantity = int(text.split('/')[2])
    await msg.answer(text=f"{title}\n"
                          f"{quantity} pcs \n"
                          f"total cost : {quantity * price}$")


    