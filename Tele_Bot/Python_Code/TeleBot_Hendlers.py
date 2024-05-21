import os
import asyncio
from aiogram import Bot, Dispatcher, F
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, LabeledPrice, PreCheckoutQuery, SuccessfulPayment
from aiogram.fsm.storage.memory import MemoryStorage
from keyboards import app_kb, buy_ikb
from dotenv import load_dotenv

load_dotenv()
PROVIDER_TOKEN = os.getenv('PROVIDER_TOKEN')
BOT_TOKEN = os.getenv("BOT_TOKEN")

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(storage=MemoryStorage())


@dp.message(CommandStart())
async def start(msg: Message):
    await msg.answer("Salom", reply_markup=app_kb)


@dp.pre_checkout_query()
async def pre_checkout_query(checkout_query: PreCheckoutQuery):
    await bot.answer_pre_checkout_query(checkout_query.id, ok=True)


@dp.message(F.func(lambda msg: msg.web_app_data.data))
async def get_btn(msg: Message):
    text = msg.web_app_data.data
    products = text.split("|")
    prices = []

    for product in products:
        if len(product.split("/")) >= 3:
            title, price, quantity = product.split('/')
            price = int(price)
            quantity = int(quantity)
            total_price = price * quantity * 100  # converting to smallest currency unit
            prices.append(LabeledPrice(label=f"{title} | {quantity}", amount=total_price))  # corrected this line

    if not prices:
        await msg.answer("Savatchangiz bo'sh!")
        return

    await bot.send_invoice(
        chat_id=msg.chat.id,
        title="Telegram bot orqali to'lov!",
        description="Telegram bot orqali to'lov qilishni o'rganayapmiz!",
        provider_token=PROVIDER_TOKEN,
        currency="UZS",
        payload="Ichki malumot",
        prices=prices
    )


@dp.message(F.successful_payment())
async def successful_payment(msg: Message):
    await msg.answer("To'lov muvaffaqiyatli amalga oshirildi! Rahmat!")
