import { useEffect } from "react";
import {  Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth/pages/LoginPages";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { BlogComponet } from "../calendar/components/BlogComponet";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { useAuthStore } from "../hooks";
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

  // const authStatus = 'auth';    // 'checking' | 'auth' | 'not-auth'
   const {status,checkToken}=useAuthStore();

    useEffect(() => {
      checkToken();
    }, [])


   if (status==='checking') {
    return (
      <>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 login-form-1">
            <h3>Cargando...</h3>
          </div>
        </div>
      </div>

      </>
    )
   }
  
  return (
   <>      
    <NavBar1/> 
  
    <Routes>
      {
        status === 'authenticated' ?
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
