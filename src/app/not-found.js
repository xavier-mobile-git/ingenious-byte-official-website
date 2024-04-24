import React from 'react'

function Custom404() {
  return (
    <div className='flex h-screen w-screen justify-center pt-[23rem]'>
      <div className='h-fit w-fit flex flex-col justify-center'>
      <img src='/404.png' />
      <span className='text-center text-3xl font-semibold mt-8'>未找到页面</span>
      <span className='text-center text-lg mt-8'>您要查找的页面可能已被删除、更名或暂时不可用。</span>
      <div className='flex justify-center'>
      <a href='/' className='mt-10 w-fit p-3 bg-indigo-500 text-white rounded-lg border border-indigo-500 hover:bg-white hover:text-indigo-500 hover:border-indigo-500 transition-all duration-500'>返回首页</a>
      </div>
      
      </div>
    </div>
  )
}

export default Custom404