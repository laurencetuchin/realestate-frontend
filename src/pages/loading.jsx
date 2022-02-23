import React from 'react'

const Loading = () => {
  return (
<div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-50 flex flex-col items-center justify-center">
<div className="
    ease-linear
    spinner-border
    animate-spin
    w-32
    h-32
    border-32
    rounded-full
    text-purple-500
  ">
  </div>
	<h3 className="text-center text-white text-xl font-semibold">Loading...</h3>
	<p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
</div>
  )
}

export default Loading