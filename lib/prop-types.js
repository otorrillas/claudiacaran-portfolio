import PropTypes from 'prop-types'

export const ProjectListItemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  client: PropTypes.string,
  year: PropTypes.number,
  thumbnail: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.shape({
    hover: PropTypes.string,
  }),
})

export const CategoryShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
})
