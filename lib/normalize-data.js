export const PROJECT_CONTENT_TYPE = 'project'
export const CATEGORY_CONTENT_TYPE = 'category'
export const TWO_COLUMN_PROJECT_CONTENT_TYPE = 'twoColumnProjectSection'
export const FULL_WIDTH_PROJECT_CONTENT_TYPE = 'fullWidthProjectSection'

function getNormalizedCategoryTitles(categories) {
  const normalizedTitles = categories.map((category) => category.fields.title)
  return normalizedTitles
}

function getAssetUrl(asset) {
  return `https:${asset.fields.file.url}`
}

export function getNormalizedProjectList(items) {
  const projectList = items
    .filter((item) => item.sys.contentType.sys.id === PROJECT_CONTENT_TYPE)
    .map((project) => {
      const {
        id,
        title,
        client,
        year,
        thumbnail,
        categories,
        styles,
      } = project.fields

      return {
        id,
        title,
        client,
        year,
        styles,
        thumbnail: getAssetUrl(thumbnail),
        categories: getNormalizedCategoryTitles(categories),
      }
    })

  return projectList
}

function getNormalizedProjectSections(sections = []) {
  const normalizedSections = sections.map((section) => {
    const contentType = section.sys.contentType.sys.id

    switch (contentType) {
      case TWO_COLUMN_PROJECT_CONTENT_TYPE:
        return {
          type: TWO_COLUMN_PROJECT_CONTENT_TYPE,
          right: section.fields.right || null,
          left: section.fields.left || null,
        }
      case FULL_WIDTH_PROJECT_CONTENT_TYPE:
        return {
          type: FULL_WIDTH_PROJECT_CONTENT_TYPE,
          image: getAssetUrl(section.fields.image) || {},
        }
      default:
        return null
    }
  })

  return normalizedSections
}

export function getNormalizedProject(item) {
  const { hero, title, styles, sections } = item.fields

  return {
    title,
    styles,
    hero: getAssetUrl(hero),
    sections: getNormalizedProjectSections(sections),
  }
}

export function getNormalizedCategories(items) {
  const categories = items
    .filter((item) => item.sys.contentType.sys.id === CATEGORY_CONTENT_TYPE)
    .map((category) => {
      const { id, title } = category.fields

      return {
        id,
        title,
      }
    })

  return categories
}
