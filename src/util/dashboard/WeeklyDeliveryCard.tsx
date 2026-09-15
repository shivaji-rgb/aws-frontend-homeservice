import { AccessTime } from '@mui/icons-material'
import { Box, Chip, Paper, Stack, Typography } from '@mui/material'

export type DeliveryPoint = {
  day: string
  litres: number
}

type WeeklyDeliveryCardProps = {
  data: DeliveryPoint[]
  title?: string
  description?: string
  periodLabel?: string
}

function WeeklyDeliveryCard({ data, title = 'Weekly delivery', description = 'Litres delivered across all routes', periodLabel = 'This week' }: WeeklyDeliveryCardProps) {
  const highestDelivery = Math.max(...data.map(({ litres }) => litres), 1)

  return (
    <Paper className="panel delivery-panel" elevation={0}>
      <Stack direction="row" className="stack-between stack-start delivery-heading">
        <Box><Typography variant="h2" className="panel-heading">{title}</Typography><Typography variant="body2" color="text.secondary">{description}</Typography></Box>
        <Chip icon={<AccessTime />} label={periodLabel} variant="outlined" size="small" />
      </Stack>
      <Box className="chart" aria-label={`${title} bar chart`}>
        {data.map(({ day, litres }) => (
          <Stack key={day} className="bar-column">
            <Typography variant="caption" className="bar-value">{litres.toLocaleString()}</Typography>
            <Box className="bar-track"><Box className="bar" sx={{ height: `${(litres / highestDelivery) * 100}%` }} /></Box>
            <Typography variant="caption" color="text.secondary">{day}</Typography>
          </Stack>
        ))}
      </Box>
    </Paper>
  )
}

export default WeeklyDeliveryCard