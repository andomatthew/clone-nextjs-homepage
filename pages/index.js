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
import Hero from '../components/hero/hero'
import Tools from '../components/tools/tools'


export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Banner />
      <div className="custom-container bg-white">
        <Navbar />
        <Notification />
        <div className='container-fluid p-2'>
          <Hero />
          <Tools />
        </div>
      </div>
    </>
  )
}
