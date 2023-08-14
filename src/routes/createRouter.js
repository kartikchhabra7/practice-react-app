import AccordionBody from "../mini-projects/1.Accordion/Accordion";
import CheckboxSelectAll from "../mini-projects/2.Checkbox/CheckboxSelectAll";

const createRouterPath=[
    {
        path:"/",
        exact :true,
        element:<AccordionBody/>
    },
    {
        path:"/checkbox",
        exact :true,
        element:<CheckboxSelectAll/>
    }
]

export default createRouterPath