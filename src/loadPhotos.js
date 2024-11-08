const importAll = (r) => {
  let photos = []
  let folderNames = new Set()

  r.keys().forEach((item, index) => {
    try {
      const filePath = item.replace('./', '')
      const parts = filePath.split('/')

      const category = parts.length > 1 ? parts[0] : 'unknown'
      const name = parts.length > 1 ? parts.slice(1).join('/') : parts[0]

      if (category !== 'unknown') {
        folderNames.add(category)
      }

      photos.push({
        id: index + 1,
        name: name,
        category: category,
        path: r(item)
      })
    } catch (error) {
      console.error(`Failed to load ${item}: ${error.message}`)
    }
  })

  const categories = Array.from(folderNames)

  return { photos, categories }
}

const { photos, categories } = importAll(require.context('./Photos', true, /\.(jpg|jpeg|png|webp|gif)$/))

export const sliderData = photos.filter(item => item.category === 'slider')
export const imagesData = photos.filter(item => item.category !== 'slider')

export const categoriesData = categories.filter(item => item !== 'slider')
