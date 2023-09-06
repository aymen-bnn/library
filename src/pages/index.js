import Image from 'next/image'
import Layout from '../../layouts/Layout'
import HomeSection from '../../components/HomeSection'
import MostSellingBooks from '../../components/MostSellingBooks'
import NewsSection from '../../components/NewsSection'
import SeparatorOne from '../../components/separatorOne'
import BrowseGenders from '../../components/BrowseGenders'
export default function Home() {
  return (
    <Layout>
      <main>
      <HomeSection/>
      <MostSellingBooks/>
      <NewsSection/>
      <SeparatorOne/>
      <BrowseGenders/>
      <SeparatorOne/>
      
      </main>
    </Layout>
  )
}
