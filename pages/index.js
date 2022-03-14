import Head from 'next/head'
import Image from 'next/image'

import {
  ButtonPrimaryCustom1,
  ButtonPrimaryCustom2,
  ButtonWhiteCustom,
  ButtonDarkCustom
} from '../components/buttons'

import Card from '../components/cards/card'
import Banner from '../components/banner/banner'
import Navbar from '../components/navbar/navbar'
import Notification from '../components/notification/notification'


export default function Home() {
  return (
    <>
      <Banner />
      <div className="custom-container">
        <Navbar />
        <Notification />

        
      </div>
    </>
  )
}
