import React from 'react'
import Banner from '../Banner/Banner'
import './Home.css'
import Card from '../Card/Card';
function Home() {
  return (
    <div className="home">
      <Banner/>
      <div className="card-container">
        <Card title="Card 1" description="This is card 1" />
        <Card title="Card 2" description="This is card 2" />
        <Card title="Card 3" description="This is card 3" />
      </div>
    </div>
  )
}

export default Home