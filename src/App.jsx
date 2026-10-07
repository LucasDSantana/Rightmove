import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import PropertyListingPage from './pages/PropertyListingPage';
import ContentPage from './pages/ContentPage';
import DemoBanner from './components/DemoBanner';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <DemoBanner />
        <Header />
        <main className="main-content">
          <Routes>
            {/* Core */}
            <Route path="/" element={<Home />} />
            
            {/* Property Listings */}
            <Route path="/buy" element={<PropertyListingPage title="Properties for Sale" listingType="buy" />} />
            <Route path="/rent" element={<PropertyListingPage title="Properties to Rent" listingType="rent" />} />
            
            {/* Learn More & Information Pages from Cards */}
            <Route path="/valuation" element={<ContentPage title="Free Home Valuation" subtitle="Find out how much your home is worth from an expert." content="Getting a home valuation is the first step in understanding your financial position. Our experts combine automated data with real-world knowledge to give you the most accurate price." />} />
            <Route path="/news" element={<ContentPage title="Property News" subtitle="Could the new first-time buyer scheme help you get on the ladder?" content="In our latest insights, we break down the government's new scheme for first-time buyers. Discover how you can save on your deposit and reduce your monthly payments." />} />
            <Route path="/overseas" element={<ContentPage title="Overseas Property" subtitle="Find your dream home abroad." content="Whether you're looking for a holiday home or a permanent relocation, our overseas network has thousands of listings. Explore the most popular destinations below." />} />

            {/* Overseas Countries from Footer & Dropdown */}
            <Route path="/overseas/spain" element={<ContentPage title="Properties in Spain" subtitle="Villas, Apartments, and Fincas" content="Explore beautiful coastal properties and rural escapes across Spain's most popular regions." />} />
            <Route path="/overseas/france" element={<ContentPage title="Properties in France" subtitle="Chateaus, Cottages, and City Apartments" content="From the French Riviera to the Alps, discover your perfect French property." />} />
            <Route path="/overseas/portugal" element={<ContentPage title="Properties in Portugal" subtitle="Algarve to Porto" content="Sun, sea, and golf. Browse our exclusive listings in Portugal." />} />
            <Route path="/overseas/italy" element={<ContentPage title="Properties in Italy" subtitle="Tuscan Villas and City Escapes" content="Experience La Dolce Vita with our hand-picked Italian properties." />} />
            <Route path="/overseas/greece" element={<ContentPage title="Properties in Greece" subtitle="Island living at its finest" content="Find a white-washed villa or a city apartment in historical Greece." />} />

            {/* Other Generic Routes to prevent 404s */}
            <Route path="/buy/new-homes" element={<PropertyListingPage title="New Homes for Sale" listingType="buy" />} />
            <Route path="/rent/student" element={<PropertyListingPage title="Student Property to Rent" listingType="rent" />} />
            <Route path="/prices" element={<GenericPage title="House Prices" type="info" />} />
            <Route path="/prices/sold" element={<GenericPage title="Sold House Prices" type="info" />} />
            <Route path="/mortgages" element={<GenericPage title="Mortgages" type="info" />} />
            <Route path="/agents" element={<GenericPage title="Find Estate Agents" type="info" />} />
            <Route path="/commercial" element={<GenericPage title="Commercial Properties" type="search" />} />
            <Route path="/investors" element={<GenericPage title="Investor Relations" type="info" />} />

            {/* Fallback */}
            <Route path="*" element={<ContentPage title="Page Not Found" content="The page you are looking for does not exist in this demonstration." />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
