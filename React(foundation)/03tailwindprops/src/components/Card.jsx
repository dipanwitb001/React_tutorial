import React from 'react'

// props are object , hence its eleements can be  accessed using .(dot) function

// function Card (props)  {
//     console.log(props.username);


// de-structuring of props
function Card ({username,btnText="visit me"}) {
    console.log(username);

    // providing default value to props(btnText), in case, it is not passed then the default value will be used

  return (
    <div>
       <div class="relative h-[400px] w-[300px] rounded-md mb-4">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{
username}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
        {btnText }
      </button>
    </div>
        </div>
    </div>
  )
}

export default Card
