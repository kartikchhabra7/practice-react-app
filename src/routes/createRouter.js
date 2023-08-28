import AccordionBody from "../mini-projects/1.Accordion/Accordion";
import SingularCheckbox from "../mini-projects/2.Checkbox/SingularCheckbox";
import CalculateApp from "../mini-projects/3.Calculation/CalculationApp";
import SinglePagePagination from "../mini-projects/4.Pagination/PaginationContainer";


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
    {
        path:"/single-pagination",
        exact:true,
        element:<SinglePagePagination/>
    }
]

export default createRouterPath