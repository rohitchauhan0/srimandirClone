import React from "react";
import "./App.css";
import Navbar from "./component/common/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import MyProfile from "./component/core/Dashboard/Profile/MyProfile";
import Dashboard from "./Pages/Dashboard";
import CreatePooja from "./component/core/Dashboard/Puja/CreatePooja";
import CreateBenefits from "./component/core/Dashboard/Benefits/CreateBenefits";
import MyPuja from "./component/core/Dashboard/MyPuja/MyPuja";
import CreatePackage from "./component/core/Dashboard/Package/CreatePackage";
import MyPackage from "./component/core/Dashboard/Package/MyPackage";
import CreateItem from "./component/core/Dashboard/Items/CreateItem";
import MyItems from "./component/core/Dashboard/Items/MyItems";
import MyBenefits from "./component/core/Dashboard/Benefits/MyBenefits";
import Setting from "./component/core/Dashboard/Settings/Setting";
import PujaPage from "./Pages/PujaPage";
import PoojaById from "./component/core/PujaSection/PoojaById";
import PaymentPage from "./component/core/PaymentSection/PaymentPage";
import BookedPooja from "./component/core/Dashboard/BookedPooja/BookedPooja";
import EnrolledUser from "./component/core/Dashboard/EnrolledUser/EnrolledUser";
import { PrivateRoute } from "./PrivateRoute";
import CreateLibrary from "./component/core/Dashboard/Library/CreateLibrary";
import LibraryDetailsByName from "./component/core/LibrarySection/LibraryDetailsByName";
import LibraryDetailById from "./component/core/LibrarySection/LibraryDetailById";
import AllLibraryContent from "./component/core/Dashboard/LibraryContent/AllLibraryContent";
import AllArticles from "./component/core/LibrarySection/AllArticles";
import CreateSection from "./component/core/Dashboard/Section/CreateSection";
import Footer from "./component/common/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/puja" element={<PujaPage />} />
        <Route path="/puja/:poojaId" element={<PoojaById />} />
        <Route path="/puja/:poojaId/:packageId" element={<PaymentPage />} />
        <Route path="/articles/:sectionName" element={<LibraryDetailsByName />} />
        <Route path="/articles/:sectionName/:subsectionId" element={<LibraryDetailById />} />
        <Route path="/articles" element={<AllArticles />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/my-profile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />

          <Route path="/dashboard/create-puja" element={<PrivateRoute><CreatePooja /></PrivateRoute>} />
          <Route
            path="/dashboard/create-benifits"
            element={<PrivateRoute><CreateBenefits /></PrivateRoute>}
          />
          <Route path="/dashboard/my-pooja" element={<PrivateRoute><MyPuja /></PrivateRoute>} />
          <Route path="/dashboard/create-package" element={<PrivateRoute><CreatePackage /></PrivateRoute>} />
          <Route path="/dashboard/my-package" element={<PrivateRoute><MyPackage /></PrivateRoute>} />
          <Route path="/dashboard/offering-items" element={<PrivateRoute><CreateItem /></PrivateRoute>} />
          <Route path="/dashboard/my-items" element={<PrivateRoute><MyItems /></PrivateRoute>} />
          <Route path="/dashboard/my-benifits" element={<PrivateRoute><MyBenefits /></PrivateRoute>} />
          <Route path="/dashboard/settings" element={<PrivateRoute><Setting /></PrivateRoute>} />
          <Route path="/dashboard/booked-pooja" element={<PrivateRoute><BookedPooja /></PrivateRoute>} />
          <Route path="/dashboard/Enrolled-user" element={<PrivateRoute><EnrolledUser /></PrivateRoute>} />
          <Route path="/dashboard/create-library" element={<PrivateRoute><CreateLibrary /></PrivateRoute>} />
          <Route path="/dashboard/library-content" element={<PrivateRoute><AllLibraryContent /></PrivateRoute>} />
          <Route path="/dashboard/create-section" element={<PrivateRoute><CreateSection /></PrivateRoute>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
