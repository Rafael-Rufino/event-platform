import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";
interface ILesson {
  id: string;
  title: string;
}
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

export function App() {
  // useEffect(() => {
  //   client.query({ query: GET_LESSONS_QUERY }).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);
  const { data } = useQuery<{ lessons: ILesson[] }>(GET_LESSONS_QUERY);
  console.log(data);
  return (
    <ul>
      {data?.lessons.map((lesson) => {
        return (
          <>
            <li key={lesson.id}>{lesson.title}</li>
          </>
        );
      })}
    </ul>
  );
}
