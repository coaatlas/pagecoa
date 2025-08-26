import { useEffect } from "react";
import {  Route, Routes } from "react-router-dom"
import { LoginPages } from "../auth/pages/LoginPages";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { BlogComponet } from "../calendar/components/BlogComponet";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { PresupuestoPage } from "../calendar/pages/PresupuestoPage";
import { useAuthStore } from "../hooks";
import { Baradero,
         Bariloche,
         BlogPage,
         Clientes,
         CoaVideos,
         Contact,
         Home,
         HospitalAleman,
         HospitalLagunaBlanca,
         HospitalMercedes,
         HospitalVarela,
         IntaCastelar,
         Ituzaingo,
         JesusMariaCdba,
         LabChacarita,
         Laboratorio9DeJulio,
         LaboratorioTortuguitas,
         LabVillaMartelli,
         LavCelnova,
         MendozaInvap,
         MontesDeOca,
         NotFound,
         Portfolio,      
         PresupuestoPdfGenerar,
         Productos,
         RadiologiaFormosa,
         UnileverTortuguitas,
         ClinicaInvap,
         LaboratorioWiizur,
         OllerSolano,
         CentroRadiologicoFormosa,
         HospitalNavarro, 
       
      
         } from "../pages"
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
            <h3>Cargando</h3>
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
        <Route path="/presupuesto" element={<PresupuestoPage />} />
        <Route path="/presupuestopdf/:id" element={<PresupuestoPdfGenerar />} />
     
     
       
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/productos" element={<Productos />} />
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
        <Route path="/bariloche" element={<Bariloche/>} />
        <Route path="/ituzaingo" element={<Ituzaingo/>} />
        <Route path="/laboratoriotortuguitas" element={<LaboratorioTortuguitas/>} />
        <Route path="/mendoza-invap" element={<MendozaInvap />} />
        <Route path="/labvillamartelli" element={<LabVillaMartelli />} />
        <Route path="/unilever" element={<UnileverTortuguitas />} />
        <Route path="/mercedes" element={<HospitalMercedes />} />
        <Route path="/celnova" element={<LavCelnova />} />
        <Route path="/clinicainvap" element={<ClinicaInvap />} />
        <Route path="/laboratoriowiizur" element={<LaboratorioWiizur/>} />
        <Route path="/ollersolano" element={<OllerSolano/>} />
        <Route path="/centro-radiologico-formosa" element={<CentroRadiologicoFormosa />} />
        <Route path="/hospital-navarro" element={<HospitalNavarro />} />
        <Route path="/videoscoa" element={<CoaVideos />} />   
        <Route path="/blog" element={<BlogPage />} />   
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
           <Route path="/bariloche" element={<Bariloche/>} />
           <Route path="/ituzaingo" element={<Ituzaingo/>} />
           <Route path="/laboratoriotortuguitas" element={<LaboratorioTortuguitas/>} />
           <Route path="/mendoza-invap" element={<MendozaInvap />} />
           <Route path="/labvillamartelli" element={<LabVillaMartelli />} />
           <Route path="/unilever" element={<UnileverTortuguitas />} />
           <Route path="/mercedes" element={<HospitalMercedes />} />
           <Route path="/celnova" element={<LavCelnova />} />
           <Route path="/clinicainvap" element={<ClinicaInvap />} />
           <Route path="/laboratoriowiizur" element={<LaboratorioWiizur/>} />
           <Route path="/ollersolano" element={<OllerSolano/>} />
           <Route path="/centro-radiologico-formosa" element={<CentroRadiologicoFormosa />} />
           <Route path="/hospital-navarro" element={<HospitalNavarro />} />
           <Route path="/videoscoa" element={<CoaVideos />} />   
           <Route path="/contact" element={<Contact />} /> 
           <Route path="/login" element={<LoginPages />} />
           <Route path="/register" element={<RegisterPage />} />
           <Route path="*" element={<NotFound />} />
        </>        
      }
        
    </Routes>   
    <Footer />    
    <Copirrigth  />   
   </>
  )
}
