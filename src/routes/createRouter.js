import AccordionBody from "../mini-projects/1.Accordion/Accordion";
import SingularCheckbox from "../mini-projects/2.Checkbox/SingularCheckbox";

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
    }
]

export default createRouterPath