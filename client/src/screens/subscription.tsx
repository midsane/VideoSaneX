import { useRecoilValue } from "recoil"
import { isNavOpenAtom } from "../atom/atom"

export default function SubscriptionsPage() {
    const isNavOpen = useRecoilValue(isNavOpenAtom)
    return <div className={`${isNavOpen ? "w-[85vw]" : "w-[96vw]"} bg-stone-400 flex justify-center items-center h-screen `}>subscriptions</div>
}