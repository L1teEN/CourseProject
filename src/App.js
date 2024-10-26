import React from "react";
import './App.css';
import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';
import HistoryBlock from './components/HistoryBlock/HistoryBlock';
import ImageCardBlock from './components/ImagesBlock/ImageCardBlock';
import CardBlock from './components/CardBlock/CardBlock';
import OurClients from './components/OurClients/OurClients';
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer';


function App() {
    return (
        <>
            <style>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </style>

            <div className="App">
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')
                </style>
                <Header />
                <MainBlock />
                <HistoryBlock />
                <ImageCardBlock />
                <CardBlock />
                <OurClients />
                <ContactForm />
                <Footer />
            </div>
        </>
    );
}

export default App;
