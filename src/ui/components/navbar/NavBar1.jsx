
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthStore } from '../../../hooks';

export const NavBar1 = () => {

    const {
        startLogout,
        user,
        status,

    } = useAuthStore();

  return (
    <>
    <header>   

    <div className="container-fluid bg-dark px-0">
        <div className="row g-0 d-none d-lg-flex">
            <div className="col-lg-6 ps-5 text-start">
                <div className="h-100 d-inline-flex align-items-center text-white">
                    <span>Contáctanos:</span>
                    <span className="btn btn-link text-light" href=""><i className="fa fa-envelope"> cubas_beto@hotmail.com</i></span>
                    <a className="btn btn-link text-light" href="https://instagram.com/coa_revestimiento?igshid=MzRlODBiNWFlZA==" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-link text-light" href="https://www.facebook.com/coa.revestimiento" target="_blank"><i className="fab fa-facebook"></i></a>                  
                </div>
            </div>
            <div className="col-lg-6 text-end">
                <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                    <span className="fs-5 fw-bold me-2"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
                    <span className="fs-5 fw-bold">11-3313-8900  / 11-3324-9832 </span>
                </div>
            </div>
        </div>
    </div>
   

     <nav className="navbar navbar-expand-lg bg-white navbar-light  py-0 pe-5">
        <Link to="/home"  className="navbar-brand ps-5 me-0">
            <h1 className=""
            style={{
                color: "white !important",
                fontFamily: "Roboto",
                fontSize: "90px",
                fontWeight: "bold",
                textAlign: "left",
                textShadow: "4px 2px 6px #ffffff",
                textTransform: "uppercase",               
                textDecorationColor: "white",
                textDecorationStyle: "double",
                textDecorationThickness: "5px",
                textUnderlineOffset: "50px",
                textRendering: "optimizeLegibility",
                textOrientation: "upright",
                textOverflow: "clip",
                textIndent: "0px",
                textJustify: "auto",
                textKashida: "auto",
                textKashidaSpace: "0px",
            }}
            >C</h1><br />
            <h2 className="text-white"
             style={{
                color: "white !important",              
                fontSize: "60px",
                fontWeight: "bold",
                textAlign: "left",
                textShadow: "2px 2px 4px #ffffff",
                textTransform: "uppercase",
                textDecorationColor: "white",
                textDecorationStyle: "double",
                textDecorationThickness: "5px",
                textUnderlineOffset: "10px",
                textRendering: "optimizeLegibility",
                textOrientation: "upright",
                textOverflow: "clip",
                textIndent: "0px",
                textJustify: "auto",
                textKashida: "auto",
                textKashidaSpace: "0px",
                zIndex: "1",

            }}   >OA</h2>
            <h6 
            style={{
                color: "white",           
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "left",
                textShadow: "2px 2px 5px #ffffff",
                textTransform: "uppercase",
                textDecorationColor: "white",
                textDecorationStyle: "double",
                textDecorationThickness: "5px",
                textUnderlineOffset: "10px",
                textRendering: "optimizeLegibility",
                textOrientation: "upright",
                textOverflow: "clip",
                textIndent: "0px",
                textJustify: "auto",
                textKashida: "auto",
                textKashidaSpace: "0px",
                zIndex: "1",
            }}
            >Revestimientos</h6>
        </Link>

        <button type="button" className="navbar-toggler  navbar-toggler-1 " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <MenuIcon  
            style={{             
                fontSize: "30px",
            }}
             />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">         
          
            {/* <span className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"    onClick={() => confetti({
                particleCount: 900,
                spread:190,
                origin: { y: 0.6 },
                colors: [  '#26ccff', '#000000','#ffffff',]
              })}   

            style={{
                color: "white !important",
                fontFamily: "Roboto ,ubuntu",
                fontSize: "17px",
                fontWeight: "bold",
                textAlign: "left",
                textShadow: "2px 2px 4px #000000",
                textTransform: "uppercase",
                textDecorationColor: "white",
                textDecorationStyle: "double",
                textDecorationThickness: "4px",
                textUnderlineOffset: "10px",
                textRendering: "optimizeLegibility",
                textOrientation: "upright",
                textOverflow: "clip",
                textIndent: "0px",
                textJustify: "auto",
                textKashida: "auto",
                textKashidaSpace: "0px",
            }}>
            Campeones <SportsSoccerIcon className="rotate"
            style={{
                color: "black",
                fontSize: "30px",
                        }}
            />
            </span>                */}

            <NavLink to="/home" 
                 className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active':''}` } >  
            <button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><i className='fa-regular fa-house'></i> Home </button></NavLink>

                <NavLink to="/portfolio"
                 className={ ({ isActive }) => `nav-link dropdownn   ${isActive ? 'active ':''}` } >  
            <button   className="btn"  data-bs-toggle="collapse" data-bs-target="#navbarCollapse" > Portfolio</button></NavLink>  

                <div className="nav-item  dropdownn" 
                
                >
                <NavLink  className="nav-link" >   <button className="btn dropdown-toggle">Obras</button></NavLink >
  <div className="dropdownn-content bg-light m-0"
  style={{
    color: "white !important",
    fontFamily: "Roboto",
    fontSize: "17px",
    fontWeight: "bold",
    textAlign: "left",
    textShadow: "2px 2px 4px #000000",
    textTransform: "uppercase",
    textDecorationColor: "white",
    textDecorationStyle: "double",
    textDecorationThickness: "4px",
    textUnderlineOffset: "10px",
    textRendering: "optimizeLegibility",
    textOrientation: "upright",
    textOverflow: "clip",
    textIndent: "0px",
    textJustify: "auto",
    textKashida: "auto",
    textKashidaSpace: "0px",
    overflowY: "scroll",
    height: "35vh",
    width: "138%",
}} >
    
  <NavLink    to="/radiologoaformosa"          className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Formosa</button></NavLink >
  <NavLink    to="/laboratorio9dejulio"        className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">9 de Julio</button></NavLink >
  <NavLink    to="/baradero"                   className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Baradero</button></NavLink >
  <NavLink    to="/laboratoriochacarita"       className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Chacarita</button></NavLink >
  <NavLink    to="/hospitalaleman"             className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">H. Alemán</button></NavLink >
  <NavLink    to="/hospital-laguna-blanca"     className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">H.Lag.Blanca</button></NavLink >
  <NavLink    to="/jesusmariacdba"             className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">jesus Maria</button></NavLink >
  <NavLink    to="/inta-castelar"              className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Inta Castelar</button></NavLink >
  <NavLink    to="/montesdeoca"                className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">M. De Oca </button></NavLink >
  <NavLink    to="/hospitalvarela"             className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Hosp. Varela</button></NavLink >
  <NavLink    to="/bariloche"                  className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">S. Bariloche</button></NavLink >
  <NavLink    to="/ituzaingo"                  className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">H. Ituzaingó</button></NavLink >
  <NavLink    to="/laboratoriotortuguitas"     className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Lab.Tortuguitas</button></NavLink >
  <NavLink    to="/mendoza-invap"              className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Centro Invap</button></NavLink >
  <NavLink    to="/labvillamartelli"           className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Lab. V.Martelli</button></NavLink >
  <NavLink    to="/unilever"                   className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Unilever Tort.</button></NavLink >
  <NavLink    to="/mercedes"                   className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Hosp. Mercedes</button></NavLink >
  <NavLink    to="/celnova"                    className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Lab. Celnova</button></NavLink >
  <NavLink    to="/clinicainvap"               className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Clinica invap</button></NavLink >
  <NavLink    to="/laboratoriowiizur"          className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Lab Weizur</button></NavLink >
  <NavLink    to="/ollersolano"                className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Hosp. Oller </button></NavLink >
  <NavLink    to="/centro-radiologico-formosa" className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Rad. Formosa</button></NavLink >
  <NavLink    to="/hospital-navarro"           className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Hosp. Navarro</button></NavLink >
  <NavLink    to="/clinica-viedma"             className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Clinica Viedma</button></NavLink >

  </div>
</div>


<NavLink to="/videoscoa"  className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active ':''}` } >  
            <button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Coa en acción</button></NavLink>


<NavLink to="/contact"  className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active ':''}` } >  
            <button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><i className="fas fa-sharp fa-solid fa-address-book"></i> Contact</button></NavLink>
           {
                (status === 'not-authenticated' ) ? (
                    <>
                    </>
                   
                ) : (
                    // <NavLink to="/calendar"  className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active ':''}` } >
                    //  <button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" >
                    // <i className='fas fa-calendar-alt '></i> Calendar
                    // </button>
                    // </NavLink>

                    <div className="nav-item  dropdownn" >
                    <NavLink  className="nav-link" >   <button className="btn dropdown-toggle"><i className="fas fa-light fa-users"></i> Coa</button></NavLink >
      <div className="dropdownn-content bg-light m-0">
      <NavLink    to="/calendar"    className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"> <i className='fas fa-calendar-alt '></i> Agenda</button></NavLink >
      <NavLink    to="/blog"        className={ ({ isActive }) => `nav-link-drop  dropdownn  ${isActive ? 'active':''}` } ><button className="btn" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><i className="fas fa-regular fa-blog"></i>    Blog</button></NavLink >
 
      </div>
    </div>
            )
           }


            {
                (status === 'not-authenticated' ) ? (
                    <NavLink to="/login"  className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active ':''}` } > 
                    <button   data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <i className='fas fa-sign-in-alt'></i>&nbsp;Login</button> 
                    </NavLink>            
                    
                ) : (                      
                    
                    <NavLink to="/login"  className={ ({ isActive }) => `nav-link  dropdownn  ${isActive ? 'active ':''}` } > 
                   <button className='btn btn-outline-danger'  onClick={startLogout}>
                    <i className='fas fa-sign-out-alt'></i> Logout
                    </button>
                   </NavLink>
                )
            }          

     </div>
     </div>
    </nav>
  
 </header>
    </>
  )
}
