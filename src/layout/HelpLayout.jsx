import { 
NavLink,
Outlet
 } from "react-router-dom"


function HelpLayout() {
  return (
    <>
    <div>
        <h1>Help</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quaerat exercitationem vitae corporis ea delectus sit sed commodi inventore a minus, odio dignissimos soluta veniam facilis consequatur beatae, fugiat dolore?</p>
         
         <NavLink to="faq">Faq</NavLink>
         <NavLink to ="contact">Contact</NavLink>

        <Outlet/>
    </div>
    </>
  )
}

export default HelpLayout