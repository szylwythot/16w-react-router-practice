import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Layout({children}) {
  return (
    <main>
        <Header />
        <section>
            {children}
        </section>
        <Footer />
    </main>
  )
}
