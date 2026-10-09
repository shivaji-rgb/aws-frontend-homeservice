import { useMutation } from '@tanstack/react-query'
import { registerUser, sendRegistrationOtp, verifyRegistrationOtp } from '../services/RegisterServices';

export type RegisterRequest = {
  username: string
  password: string
  contact: string
  otp: string
}

type OtpRequest = {
  username?: string
  contact: string
}

type VerifyOtpRequest = {
  contact: string
  otp: string
}

export const useRegister = () => useMutation({
  mutationFn: (request: RegisterRequest) => registerUser(request),
})

export const useSendOtp = () => useMutation({
  mutationFn: (request: OtpRequest) => sendRegistrationOtp(request),
})

export const useVerifyOtp = () => useMutation({
  mutationFn: (request: VerifyOtpRequest) => verifyRegistrationOtp(request),
})
