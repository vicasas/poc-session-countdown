import useCountdown from "../useCountdown"

function Countdown({ targetDate }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate)

  return (
    <div>
      {days + hours + minutes + seconds <= 0 && <div>Expired</div>}
      <div>
        <span>{days}</span>
        <span>días</span>
      </div>
      <div>
        <span>{hours}</span>
        <span>horas</span>
      </div>
      <div>
        <span>{minutes}</span>
        <span>minutos</span>
      </div>
      <div>
        <span>{seconds}</span>
        <span>segundos</span>
      </div>
    </div>
  )
}

export default Countdown