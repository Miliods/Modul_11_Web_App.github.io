import asyncio

from aiogram import Bot
from dotenv import load_dotenv
import os

load_dotenv()
BOT_TOKEN = os.getenv('BOT_TOKEN')
bot = Bot(token=BOT_TOKEN)


async def main() -> None:
    print("Bot started")
    from TeleBot_Hendlers import dp
    await dp.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())
