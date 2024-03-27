import { Counters } from "../../api/post-count-view-inc"


export const countViewIncrement = (id: number) => {
  const updateCount = () => {
    setTimeout(() => {
      Counters.countViewInc(id)
    }, 2000)
  }
  updateCount()
}
