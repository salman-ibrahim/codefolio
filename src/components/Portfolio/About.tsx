import Line from "../Block/Line"
import Section from "../Section"
import values from "@/values/strings.json"

function About() {
  return (
    <Section title="about" selectorType="id">
        <Section title="personal-info" selectorType="class">
            <Line property="name" value={values.name} propertyType="string" />
            <Line property="summary" value={values.summary} propertyType="string" />
        </Section>
        <Section title="contact-info" selectorType="class">
            <Line property="email" value={values.email} target={`mailto:${values.email}`} propertyType="url" />
            <Line property="phone" value={values.github} propertyType="url" />
            <Line property="location" value={values.linkedin} propertyType="url" />
        </Section>
    </Section>
  )
}

export default About