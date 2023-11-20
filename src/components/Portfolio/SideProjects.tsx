import values from '@/values/strings.json'
import Section from '../Section'
import Line from '../Block/Line'

function SideProjects() {
    return (
        <Section title="projects" selectorType="id">
            {
                values.projects.map((project, index) => {
                    return (
                        <Section key={index} title={project.title} selectorType="class">
                            <Line property="description" value={project.description} propertyType="string" />
                            { project.preview && <Line property="preview" value={project.preview} propertyType='url' /> }
                            { project.github && <Line property="github" value={project.github} propertyType="url" /> }
                            <Line property="highlights" value={project.highlights} propertyType="params" />
                        </Section>
                    )
                })
            }
        </Section>
    )
}

export default SideProjects