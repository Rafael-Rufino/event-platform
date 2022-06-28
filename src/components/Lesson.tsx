import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}
export function Lesson(props: ILessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(props.availableAt);
  const isDateFormatted = format(
    props.availableAt,
    "EEEE' ° 'dd' de 'MMMM' º 'k'h'mm'",
    {
      locale: ptBR,
    }
  );
  const isActiveLesson = slug === props.slug;
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{isDateFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson ? "bg-green-500 " : ""
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`flex items-center gap-2 text-sm font-medium ${
                isActiveLesson ? "text-white" : "text-blue-500 "
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={`text-xs rounded border  px-2 py-2 text-white font-boldc ${
              isActiveLesson ? "border-white" : "border-green-300"
            }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÀTICA"}
          </span>
        </header>
        <strong
          className={` mt-4 block ${
            isActiveLesson ? "text-white" : "text-gray-200"
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
