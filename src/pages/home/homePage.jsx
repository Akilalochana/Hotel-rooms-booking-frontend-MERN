import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import ContactPage from "./contactPage";
import GalleryPage from "./galleryPage";
import RoomsPage from "./roomsPage";
import ErrorPage from "./errorPage";
import Home from "./home";
import RoomOverview from "./roomOverview";
import BookingPage from "./booking";
import RoomHome from "./roomHome";

import ContactUsPage from "./contactUsPage";
import MainReviewPage from "./mainReviewPage";

export default function HomePage() {
  return (
    <>
      <Header/>
    

    <div className="w-full h-[calc(100vh-80px)] ">
      <Routes path="/*">
        <Route path="/contact" element={<ContactUsPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/rooms" element={<RoomsPage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='/roomHome' element={<RoomHome/>}/>
        <Route path="/reviews" element={<MainReviewPage/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='/product/:key' element={<RoomOverview/>}/>

        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>


    </div>
    </>
  )
}