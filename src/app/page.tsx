import React from 'react'
import { retrieveLaunchParams } from '@telegram-apps/sdk';
function page() {
  const { initDataRaw, initData } = retrieveLaunchParams();
  console.log(initDataRaw)
  return (
    <div>
      <h1>heloo</h1>
    </div>
  )
}

export default page
