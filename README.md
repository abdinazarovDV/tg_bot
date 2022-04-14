# tg_bot

Default holatdagi bot tokeni @udevs_task_bot ga tegishli.
Bot tokenini config.js dan o'zgartirishingiz mumkin. Token o'zgartirsangiz database parametrlarini ham o'zgartiring sababi database faqatgina 
@udevs_task_bot ma'lumotlarini saqlab turadi.

Bot guruhlarga guruhlar ochilgandan so'ng qo'shiladi (guruh ochilish jarayonida qo'shilishi xatoliklarga olib keladi).

1-qadam.
  npm i

2-qadam.
  npm run dev

3-qadam.
  Telegram guruhingizga @udevs_task_bot ni qo'shing !
  (Bot tokeni o'zgargan bo'lsa database parametrlarini ham yangilang)
  
4-qadam.
  localhost:4001/sendMessages ga post so'rov jo'nating (Body >> {"messages": "...matn..."})
