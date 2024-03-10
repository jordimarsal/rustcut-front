import React from 'react'

const Logo = './logo192.png'

const FirstComponent: React.FC<{}> = () => {
  return (
    <div>
      <h3>A Simple React Component Example with Typescript</h3>
      <div>
        <img height='250' src={Logo} alt='Logo' />
      </div>
      <p>This component shows the Logrocket logo.</p>
      <p>For more info on Logrocket, please visit <a href='https://logrocket.com'>https://logrocket.com</a></p>
    </div>
  )
}

export default FirstComponent
