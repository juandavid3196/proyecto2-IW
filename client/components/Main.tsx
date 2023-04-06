import React from 'react'
import {Slider} from '@components/Slider';
import {Paying} from '@components/Paying';
import {Offer} from '@components/Offer';
import {Subs} from '@components/Subs';
import {Market} from '@components/Market';
import {Discover} from '@components/Discover';
import {Store} from '@components/Store';
import {Supermarket} from '@components/Supermarket';
import {Category} from '@components/Category';
import {Suggestion} from '@components/Suggestion';


const Main = () => {
  return (
    <main>
      <Slider />
      <Paying />
      <Offer />
      <Subs />
      <Market />
      <Discover />
      <Store />
      <Supermarket />
      <Category />
      <Suggestion />
    </main>
  )
}

export {Main}