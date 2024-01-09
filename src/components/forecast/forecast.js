import { Accordion, AccordionItem } from "react-accessible-accordion";
import { AccordionItemHeading } from "react-accessible-accordion";
const Forecast = ({data}) => {
    return (
    <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
            {data.list.slice(0, 7).map((item, idx) => (
                <AccordionItem>
                    <AccordionItemHeading></AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
            ))}

        </Accordion>
    </>
    )
}


export default Forecast;