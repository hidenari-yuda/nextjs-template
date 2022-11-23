interface Props {
  control: React.ReactNode
  label: React.ReactNode
}

export const ControlLabel: React.FC<Props> = ({ control, label }) => {
  return (
    <label>
      {control}
      {label}
    </label>
  )
}
