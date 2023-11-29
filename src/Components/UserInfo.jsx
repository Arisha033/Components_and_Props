import React from 'react'

export const UserInfo = () => {
    const userData = [
        {
            userName: "John",
            email: "john@gmail.com",
            location: "UK"
        },
        {
            userName: "Smith",
            email: "smith@gmail.com",
            location: "USA"
        },
        {
            userName: "Alex",
            email: "alex@gmail.com",
            location: "Canada"
        }
    ]
  return (
    <>
    {userData.map((data)=> {
        return (
            <p key={data.userName}>Email of {data.userName} is {data.email} and his location is {data.location}</p>
        )
    })}
    </>
  )
}
