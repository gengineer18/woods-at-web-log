import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')

export const formatDate = (date: string) => {
  return dayjs(date).format('YYYY年MM月DD日')
}
