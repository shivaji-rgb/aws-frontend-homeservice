import { Box, Paper, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

export type StatCardData = {
  label: string
  value: string
  change: string
  icon: ReactNode
  color: string
}

type StatCardProps = {
  stat: StatCardData
}

function StatCard({ stat }: StatCardProps) {
  return (
    <Paper className="stat-card" elevation={0}>
      <Stack direction="row" className="stack-between stack-start">
        <Box className="stat-icon" sx={{ color: stat.color, backgroundColor: `${stat.color}14` }}>{stat.icon}</Box>
        <Typography variant="caption" className="positive-change">{stat.change}</Typography>
      </Stack>
      <Typography variant="h2" className="stat-value">{stat.value}</Typography>
      <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
    </Paper>
  )
}

export default StatCard