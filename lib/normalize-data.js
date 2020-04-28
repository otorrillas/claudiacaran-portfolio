const PROJECT_CONTENT_TYPE = 'project'
const CATEGORY_CONTENT_TYPE = 'category'

function getNormalizedCategoryTitles(categories) {
  console.log({ categories })
  return []
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
        thumbnail: getAssetUrl(thumbnail),
        categories: getNormalizedCategoryTitles(categories),
        styles,
      }
    })

  return projectList
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
