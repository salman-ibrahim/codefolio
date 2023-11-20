import Line from "../Block/Line"
import Section from "../Section"
import values from "@/values/strings.json"

function Resources() {
    return (
        <Section title="resources" selectorType="id">
            {
                values.downloads.map((resource, index) => {
                    return (
                        <Line key={index} property={resource.title} value={resource.resource} propertyType="url" />
                    )
                })
            }
        </Section>
    )
}

export default Resources