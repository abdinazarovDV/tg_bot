create database group_channel;

create table chats (
    id serial not null primary key,
    chat_id varchar(16) not null unique ,
    chat_name varchar(64) not null
);