import Section from '../Section'
import Line from '../Block/Line'
import values from '@/values/strings.json'

function Experience() {
  return (
    <Section title="experience" selectorType="id">
        {
            values.experience.map((experience, index) => {
                return (
                    <Section key={index} title={experience.company} selectorType="class">
                        <Line property="designation" value={experience.designation} propertyType="string" />
                        <Line property="from" value={experience.from} propertyType='plain' />
                        <Line property="to" value={experience.to} propertyType="plain" />
                        <Line property="responsibilities" value={experience.description} propertyType="list" />
                    </Section>
                )
            })
        }
    </Section>
  )
}

export default Experience