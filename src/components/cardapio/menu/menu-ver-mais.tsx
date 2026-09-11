"use client";

interface MenuVerMaisProps {
  onClick: () => void;
  hidden?: boolean;
}

export function MenuVerMais({ onClick, hidden }: MenuVerMaisProps) {
  if (hidden) return null;

  return (
    <div className="col-12 col-one text-center">
      <button type="button" className="btn-white btn-sm" onClick={onClick}>
        Ver mais
      </button>
    </div>
  );
}
