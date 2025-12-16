import PropTypes from 'prop-types'

const Section = ({
  id,
  eyebrow,
  title,
  description,
  children,
  align = 'left',
  compact = false,
}) => (
  <section
    id={id}
    className={`section-block ${align === 'center' ? 'section-center' : ''} ${
      compact ? 'section-compact' : ''
    }`}
  >
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div>
        {title && <h2>{title}</h2>}
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
    <div className="section-body">{children}</div>
  </section>
)

Section.propTypes = {
  id: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.node,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['left', 'center']),
  compact: PropTypes.bool,
}

export default Section



