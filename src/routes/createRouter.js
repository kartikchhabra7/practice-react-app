import AccordionBody from "../mini-projects/1.Accordion/Accordion";
import SingularCheckbox from "../mini-projects/2.Checkbox/SingularCheckbox";
import CalculateApp from "../mini-projects/3.Calculation/CalculationApp";


const createRouterPath=[
    {
        path:"/",
        exact :true,
        element:<AccordionBody/>
    },
    {
        path:"/checkbox",
        exact :true,
        element:<SingularCheckbox/>
    },
    {
        path:"/calculation",
        exact :true,
        element:<CalculateApp/>
    },
]

export default createRouterPath