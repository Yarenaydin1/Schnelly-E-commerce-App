import React from 'react'
import { ScrollView } from 'react-native'
import HeaderMain from '../../components/HeaderMain'
import Banner from '../../components/Banner'

import MainCategories from '../../components/MainCategories'

function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:'#f7f7f7'}}>

      <HeaderMain/>
      <Banner/>
      <MainCategories/>

    </ScrollView>
  )
}

export default index