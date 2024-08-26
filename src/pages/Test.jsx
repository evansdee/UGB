import {} from 'react'
import { toast } from 'react-toastify'

export default function Test() {
  return (
    <div>
      <button onClick={()=>toast.success("TEsting")}>
        test
      </button>
    </div>
  )
}
