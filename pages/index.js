import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default function Home() {
  let {title, people, seotitle, seometadescription} = attributes;
  return (
    <div className="container">
      <Head>
        <title>{seotitle}</title>
        <meta name="description" content={seometadescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={title} />
        <HomeContent />
          <ul>
            {people.map((person, k) => (
              <li key={k}>
                <h2>{person.name}</h2>
                <p>{person.description}</p>
              </li>
            ))}
          </ul>

      </main>

      <Footer />
    </div>
  )
}
