export async function submitEmail(data: {
  email: string
  name: string
  phone: string
  company: string
  message: string
}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const formData = new FormData()
  formData.append('cus_name', data.name)
  formData.append('cus_email', data.email)
  formData.append('cus_phone', data.phone)
  formData.append('company_name', data.company)
  formData.append('message', data.message)
  formData.append('title', data.message)
    const res = await fetch(`${baseUrl}/sendEmail`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
  
    if (!res.status) {
      const errorData = await res.json().catch(() => ({}))
      throw new Error(errorData.message || 'Failed to submit contact form')
    }
  
    return res
  }
  

  export async function submitBriefEmail(data: {
    email: string
    name: string
    phone: string
    company: string
    message: string
    title: string
  }) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  
  
  const formData = new FormData()
  formData.append('cus_name', data.name)
  formData.append('cus_email', data.email)
  formData.append('cus_phone', data.phone)
  formData.append('company_name', data.company)
  formData.append('message', data.message)
  formData.append('title', data.title)
    const res = await fetch(`${baseUrl}/sendEmail`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
  
    if (!res.status) {
      const errorData = await res.json().catch(() => ({}))
      throw new Error(errorData.message || 'Failed to submit contact form')
    }
  
    return res
  }
  