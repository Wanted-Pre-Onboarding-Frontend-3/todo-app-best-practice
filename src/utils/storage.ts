export const getStorageItem = (key: string, defaultValue: string) => {
  try {
    const value = localStorage.getItem(key)
    if (!value) {
      return defaultValue
    }
    return value
  } catch {
    return defaultValue
  }
}

export const setStorageItem = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    clearStorage()
    console.warn(e)
  }
}

export const getToken = () => {
  return getStorageItem('user', '')
}

export const setToken = (args: { email: string; token: string }) => {
  const { email, token } = args;
  //* 전역상태 추가시 email로 token 체크
  setStorageItem('user', token);
}

export const clearStorage = () => {
  try {
    localStorage.clear()
  } catch (error) {
    console.warn(error)
  }
}
