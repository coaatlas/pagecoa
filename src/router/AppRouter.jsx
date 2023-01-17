import {  Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth/pages/LoginPages";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { BlogComponet } from "../calendar/components/BlogComponet";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { Baradero,
         CoaVideos,
         Contact,
         Home,
         HospitalAleman,
         HospitalLagunaBlanca,
         HospitalVarela,
         IntaCastelar,
         JesusMariaCdba,
         LabChacarita,
         Laboratorio9DeJulio,
         MontesDeOca,
         NotFound,
         Portfolio,
         RadiologiaFormosa } from "../pages"
import {Copirrigth, Footer, NavBar1 } from "../ui"


export const AppRouter = () => {

  const authStatus = 'not-auth';    
  
  return (
   <>      
    <NavBar1/> 
  
    <Routes>
      {
        authStatus === 'auth' ?
        <>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/blog" element={<BlogComponet />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/radiologoaformosa" element={<RadiologiaFormosa />} />
        <Route path="/laboratorio9dejulio" element={<Laboratorio9DeJulio />} />
        <Route path="/baradero" element={<Baradero/>} />
        <Route path="/laboratoriochacarita" element={<LabChacarita/>} />
        <Route path="/hospitalaleman" element={<HospitalAleman/>} />
        <Route path="/hospital-laguna-blanca" element={<HospitalLagunaBlanca/>} />
        <Route path="/jesusmariacdba" element={<JesusMariaCdba/>} />
        <Route path="/inta-castelar" element={<IntaCastelar/>} />
        <Route path="/montesdeoca" element={<MontesDeOca />} />
        <Route path="/hospitalvarela" element={<HospitalVarela />} />
        <Route path="/videoscoa" element={<CoaVideos />} />   
        <Route path="/contact" element={<Contact />} />        
        <Route path="*" element={<NotFound />} />
        </>
        :
        <>
           <Route path="/home" element={<Home />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/radiologoaformosa" element={<RadiologiaFormosa />} />
           <Route path="/laboratorio9dejulio" element={<Laboratorio9DeJulio />} />
           <Route path="/baradero" element={<Baradero/>} />
           <Route path="/laboratoriochacarita" element={<LabChacarita/>} />
           <Route path="/hospitalaleman" element={<HospitalAleman/>} />
           <Route path="/hospital-laguna-blanca" element={<HospitalLagunaBlanca/>} />
           <Route path="/jesusmariacdba" element={<JesusMariaCdba/>} />
           <Route path="/inta-castelar" element={<IntaCastelar/>} />
           <Route path="/montesdeoca" element={<MontesDeOca />} />
           <Route path="/hospitalvarela" element={<HospitalVarela />} />
           <Route path="/videoscoa" element={<CoaVideos />} />   
           <Route path="/contact" element={<Contact />} /> 
           <Route path="/login" element={<LoginPages />} />
           <Route path="*" element={<NotFound />} />
        </>
        
      }

        
    </Routes>   

    <Footer />
    
    <Copirrigth  />
   
   </>
  )
}
