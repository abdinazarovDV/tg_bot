module.exports.chat = {
    addChat: `
        insert into chats (chat_id, chat_name)
        values ($1, $2)
        returning * 
    `,

    find: `
        select * from chats as c
        where 
            case
                when length($1) > 0 then $1 = c.chat_id
                else true
            end
    `,

    deleteChat: `
        delete from chats
        where chat_id = $1
        returning *
    `
}