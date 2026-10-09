import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useRegister, useSendOtp, useVerifyOtp } from '../hooks/HomeRegisterHooks';

type RegisterLoaderProps = {
  onComplete?: () => void
}

function RegisterLoader({ onComplete }: RegisterLoaderProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [contact, setContact] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)

  const registerMutation = useRegister()
  const sendOtpMutation = useSendOtp()
  const verifyOtpMutation = useVerifyOtp()
  const passwordsMatch = password === confirmPassword
  const accountReady = Boolean(username && password && confirmPassword && contact && passwordsMatch)

  const handleSendOtp = () => {
    sendOtpMutation.mutate(
      { username, contact },
      { onSuccess: () => { setOtpSent(true); setOtpVerified(false) } },
    )
  }

  const handleRegister = () => {
    registerMutation.mutate(
      { username, password, contact, otp },
      { onSuccess: onComplete },
    )
  }

  const handleVerifyOtp = () => {
    verifyOtpMutation.mutate(
      { contact, otp },
      { onSuccess: () => setOtpVerified(true) },
    )
  }

  const requestError = registerMutation.error || sendOtpMutation.error || verifyOtpMutation.error

  return (
    <Box sx={{ width: { xs: 'min(100%, 320px)', sm: 400 }, p: { xs: 1, sm: 2 } }}>
      <Typography component="h2" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 1 }}>
        Create your account
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mb: 2 }}>
        Register with your contact number or email address.
      </Typography>

      {requestError && <Alert severity="error" sx={{ mb: 2 }}>Unable to complete this request. Please try again.</Alert>}

      <Stack spacing={1.5}>
        <TextField label="Username" value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" />
        <TextField label="Email or phone number" value={contact} onChange={(event) => setContact(event.target.value)} autoComplete="email" />
        <TextField label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="new-password" />
        <TextField
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          error={Boolean(confirmPassword) && !passwordsMatch}
          helperText={Boolean(confirmPassword) && !passwordsMatch ? 'Passwords do not match' : ''}
          autoComplete="new-password"
        />

        <Button
          variant="outlined"
          onClick={handleSendOtp}
          disabled={!accountReady || sendOtpMutation.isPending}
        >
          {sendOtpMutation.isPending ? <CircularProgress size={22} /> : otpSent ? 'Resend OTP' : 'Send OTP'}
        </Button>

        {otpSent && (
          <>
            <TextField
              label="One-time password"
              value={otp}
              onChange={(event) => {
                setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))
                setOtpVerified(false)
              }}
              slotProps={{ htmlInput: { inputMode: 'numeric', maxLength: 6 } }}
            />
            <Button
              variant="outlined"
              onClick={handleVerifyOtp}
              disabled={otp.length < 4 || verifyOtpMutation.isPending || otpVerified}
            >
              {verifyOtpMutation.isPending ? <CircularProgress size={22} /> : 'Verify OTP'}
            </Button>
            {otpVerified && <Alert severity="success">OTP verified. Your account is ready to create.</Alert>}
            <Button
              variant="contained"
              size="large"
              onClick={handleRegister}
              disabled={!otpVerified || registerMutation.isPending}
            >
              {registerMutation.isPending ? <CircularProgress size={24} color="inherit" /> : 'Create account'}
            </Button>
          </>
        )}
      </Stack>
    </Box>
  )
}

export default RegisterLoader
