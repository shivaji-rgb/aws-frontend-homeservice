import { homeClient } from '../api/ApiClients'
import { getRegisterHome, getSendRegisterOtp, getVerifyRegisterOtp } from '../api/ApiUrls'
import type { RegisterRequest } from '../hooks/HomeRegisterHooks'

export const registerUser = async (request: RegisterRequest) => {
  const response = await homeClient.post(getRegisterHome, request)
  return response.data
}

export const sendRegistrationOtp = async (request: { username?: string; contact: string }) => {
  const response = await homeClient.post(getSendRegisterOtp, request)
  return response.data
}

export const verifyRegistrationOtp = async (request: { contact: string; otp: string }) => {
  const response = await homeClient.post(getVerifyRegisterOtp, request)
  return response.data
}
