import api from 'api'

export const getAllProducts = async () => {
  try {
    const { data } = await api.get('products')

    return data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getProductsByCategory = async (category: string) => {
  try {
    const { data } = await api.get('products', {
      params: {
        category: category
      }
    })

    return data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getProductsByName = async (name: string) => {
  try {
    const { data } = await api.get('products', {
      params: {
        name_like: name
      }
    })

    return data
  } catch (e) {
    console.log(e)
    return []
  }
}
