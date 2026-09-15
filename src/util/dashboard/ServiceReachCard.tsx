import { Divider, LinearProgress, Paper, Stack, Typography } from '@mui/material'

export type ReachBreakdown = {
  label: string
  value: number
}

type ServiceReachCardProps = {
  reached: number
  goal: number
  breakdown: ReachBreakdown[]
  title?: string
  description?: string
  unitLabel?: string
}

function ServiceReachCard({ reached, goal, breakdown, title = 'Service reach', description = "Progress toward this month's goal", unitLabel = 'customers' }: ServiceReachCardProps) {
  const progress = goal > 0 ? Math.min((reached / goal) * 100, 100) : 0
  const remaining = Math.max(goal - reached, 0)

  return (
    <Paper className="panel reach-panel" elevation={0}>
      <Typography variant="h2" className="panel-heading">{title}</Typography>
      <Typography variant="body2" color="text.secondary" className="reach-copy">{description}</Typography>
      <Stack direction="row" spacing={1} className="reach-total"><Typography variant="h2" className="reach-number">{reached.toLocaleString()}</Typography><Typography variant="body2" color="text.secondary">of {goal.toLocaleString()} {unitLabel}</Typography></Stack>
      <LinearProgress variant="determinate" value={progress} className="reach-progress" />
      <Stack direction="row" className="stack-between reach-caption"><Typography variant="caption" color="text.secondary">{progress.toFixed(1)}% reached</Typography><Typography variant="caption" color="text.secondary">{remaining.toLocaleString()} to go</Typography></Stack>
      <Divider />
      <Stack spacing={1.5} className="reach-list">
        {breakdown.map(({ label, value }) => (
          <Stack direction="row" className="stack-between" key={label}><Typography variant="body2">{label}</Typography><Typography variant="body2" className="strong-text">{value.toLocaleString()}</Typography></Stack>
        ))}
      </Stack>
    </Paper>
  )
}

export default ServiceReachCard