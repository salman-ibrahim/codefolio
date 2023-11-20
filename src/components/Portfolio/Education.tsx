import values from '@/values/strings.json'
import Section from '../Section'
import Line from '../Block/Line'

function Education() {
  return (
    <Section title="education" selectorType="id">
        {
            values.education.map((education, index) => {
                return (
                    <Section key={index} title={education.institute} selectorType="class">
                        <Line property="degree" value={education.degree} propertyType="string" />
                        <Line property="from" value={education.from} propertyType='plain' />
                        <Line property="to" value={education.to} propertyType="plain" />
                        {/* <Line property="responsibilities" value={education.description} propertyType="list" /> */}
                    </Section>
                )
            })
        }
    </Section>
  )
}

export default Education