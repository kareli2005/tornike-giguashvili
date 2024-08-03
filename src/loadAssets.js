const importAll = (r) => {
  let assets = []
  
  r.keys().forEach((item, index) => {
    const filePath = item.replace('./', '')
    const parts = filePath.split('/')

    const category = parts.length > 1 ? parts[0] : 'unknown'
    const name = parts.length > 1 ? parts.slice(1).join('/') : parts[0]

    assets.push({
      id: index + 1,
      name: name,
      category: category,
      path: r(item)
    })
  })
  
  return assets
}

const assets = importAll(require.context('./assets', true))
export const sliderData = assets.filter(item => item.category === 'slider')
export const imagesData = assets.filter(item => item.category !== 'slider')