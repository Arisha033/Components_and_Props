import React from 'react'

export const MyList = () => {
    const myNumbers = [1,2,3,4,5,6,7]

  return (
    <>
    {myNumbers.map((number) => (
        <ul key={Math.random() * 10}>
            <li>{number}</li>
        </ul>
    ))}
    </>
  )
}
