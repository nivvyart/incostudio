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
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <title>{seotitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={title} />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
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
