const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

const dateTimeFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
})

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

/** Today's local calendar date as YYYY-MM-DD (what native date inputs use). */
export function todayIsoDate(now: Date = new Date()): string {
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

/** Formats a calendar date (YYYY-MM-DD) without shifting it through UTC. */
export function formatDate(isoDate: string): string {
  const match = ISO_DATE.exec(isoDate)
  if (!match) return isoDate
  const [, year, month, day] = match
  return dateFormatter.format(new Date(Number(year), Number(month) - 1, Number(day)))
}

export function formatDateTime(isoDateTime: string): string {
  const date = new Date(isoDateTime)
  return Number.isNaN(date.getTime()) ? isoDateTime : dateTimeFormatter.format(date)
}
