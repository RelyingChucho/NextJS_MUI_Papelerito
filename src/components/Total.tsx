interface TotalProps {
  total: number;
  label: string;
}

export default function Total({ total, label }: TotalProps) {
  return (
    <p className="font-libre-baskerville">
      {label} {total}
    </p>
  );
}
