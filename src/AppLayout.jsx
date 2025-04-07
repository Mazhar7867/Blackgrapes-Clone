import {  NavLink, Outlet } from "react-router-dom"

const AppLayout=()=>{
    const Navlinks =[
        {
          label:"Home",
          path:"home"  
        },
        {
          label:"AboutUs",
          path:"about" 
        },
        
        {
          label:"Ecommerce",
          path:"ecommerce" 
        },
        {
          label:"ITStaffing",
          path:"iTstaffing" 
        },
        {
          label:"OurClients",
          path:"ourClients" 
        },
        {
          label:"OurProducts",
          path:"ourProducts" 
        },
        
        {
          label:"ContactUs",
          path:"contact"
        },
    ]
    console.log(NavLink);
    
    return(

      // bg-[#303030]
        <div className="h-screen w-screen overflow-auto flex flex-col  ">
        <div className="pl-16 pr-16 h-24 text-xl font-semibold text-white bg-[#303030] mb-1 justify-between flex items-center shadow-md">
          <div>
            <h1 className="text-[#F86200] text-xl font-bold">BlackGrapes</h1>
          </div>
        <div className='flex gap-5'> 
        {
        Navlinks.map((navitems)=>{
            
            return(
        
                <NavLink
                key={navitems.label}
                to={navitems.path}
                 className={({isActive}) => 
                 (isActive ?" text-[#F86200]": "")}>
                    {navitems.label}
                    
                </NavLink>
                
            )
        })
        } 
     </div>


           
        </div>
        <Outlet/>
       
        </div>
        
    )
}
export default AppLayout