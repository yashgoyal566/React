import React from 'react'

import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const Page1Content = (props) => {
  return (
    <div className="pb-16 pt-6 flex-1 items-center flex gap-10 px-14">
      <LeftContent/>
      <RightContent users={props.users}/>

    </div>
  )
}

export default Page1Content
