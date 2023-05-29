import css from './Section.module.css';
const Section = ({children, title}) => {
    return (
        <section className={css.section}>
            <div className={css.container}>
                {title && (<h1>{title}</h1>)}
                {children}
            </div>
        </section>
    )
}

export default Section;