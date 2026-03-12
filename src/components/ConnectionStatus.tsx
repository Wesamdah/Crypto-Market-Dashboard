interface Props {
  status: string;
}

export default function ConnectionStatus({ status }: Props) {
  const colors: Record<string, string> = {
    connecting: "text-yellow-500",
    connected: "text-green-500",
    disconnected: "text-red-500",
    reconnecting: "text-orange-500",
  };

  return (
    <div className="text-sm mt-4">
      Connection:
      <span className={`ml-2 font-semibold ${colors[status]}`}>{status}</span>
    </div>
  );
}
