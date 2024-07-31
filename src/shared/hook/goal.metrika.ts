import { useMetrica } from 'next-yandex-metrica'

export const useGoalYandexMetrika = () => {
  const { reachGoal } = useMetrica()

  const sendGoal = (goal: string) => {
    reachGoal(goal)
  }
  return { sendGoal }
}
