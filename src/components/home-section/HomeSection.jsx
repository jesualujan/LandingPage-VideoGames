import Section, {SectionContent} from "../section/Section"

const HomeSection = props => {
  return (
        <Section className={props.className}>
            <SectionContent
            className={props.contentClassName}
            bgImage={props.bgImage}
            >
                {/* props.children , es una especie de herencia, conocida como
                composición, prop especial children para pasar elementos hijos
                 directamente en su resultado */}
                {props.children} 
            </SectionContent>

        </Section>
        
  )
}

export default HomeSection