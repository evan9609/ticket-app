export interface TypeTicket {
  title: string
  description: string
  category: string
  priority: number
  progress: number
  status: string
  active?: boolean
  [key: string]: unknown
}