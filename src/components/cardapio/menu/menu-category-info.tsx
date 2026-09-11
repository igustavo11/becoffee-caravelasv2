import { Sparkles } from "lucide-react";
import type { CategoryInfo } from "@/lib/menu";

interface MenuCategoryInfoProps {
  info: CategoryInfo;
}

export function MenuCategoryInfo({ info }: MenuCategoryInfoProps) {
  const [label, ...rest] = info.description.split(":");
  const body = rest.join(":").trim();

  return (
    <div className="col-12 mb-4">
      <div className="card-info-categoria">
        <h5>
          <Sparkles
            size={24}
            style={{
              display: "inline-block",
              verticalAlign: "-4px",
              marginRight: 10,
            }}
          />{" "}
          {info.title}
        </h5>
        <p>
          <strong>{label}:</strong> {body}
        </p>
        {info.note && (
          <p className="acrescimo">
            <em>{info.note}</em>
          </p>
        )}
      </div>
    </div>
  );
}
