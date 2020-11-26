const _withMode = (dev, prod) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return dev()
  } else {
    return prod()
  }
}

export const API_BASE = process.env.REACT_APP_API_BASE || _withMode(() => process.env.REACT_APP_API_BASE_DEVELOPMENT, process.env.REACT_APP_API_BASE_PRODUCTION)
