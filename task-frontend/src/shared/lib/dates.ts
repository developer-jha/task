import { format, isValid, parseISO } from 'date-fns'

/** Today's local calendar date as YYYY-MM-DD (what native date inputs use). */
export function todayIsoDate(): string {
  return format(new Date(), 'yyyy-MM-dd')
}

export function formatDate(isoDate: string): string {
  const date = parseISO(isoDate)
  return isValid(date) ? format(date, 'd MMM yyyy') : isoDate
}

export function formatDateTime(isoDateTime: string): string {
  const date = parseISO(isoDateTime)
  return isValid(date) ? format(date, 'd MMM yyyy, HH:mm') : isoDateTime
}
