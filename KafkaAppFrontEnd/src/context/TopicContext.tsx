import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createContext } from "react";
import { rows } from "../components/catalog/CatalogComponent";

interface Topic {
  name: string | null;
  connection?: string | null;
  partition?: number | null;
  topic_size?: number | null;
  views?: number | null;
  owner?: string | null;
  labels?: string | null;
  id: number;
}

interface Props {
  children?: ReactNode;
}

interface InterfaceTopic {
  topic: Topic[] | undefined;
  addNewTopic: (newTopic: Topic) => void;
}

const InitialValue = {
  topic: undefined,
  addNewTopic: () => null,
};

const TopicContext = createContext<InterfaceTopic>(InitialValue);

const TopicProvider = ({ children }: Props) => {
  const [topic, setTopic] = useState<Topic[]>([...rows]);

  const addNewTopic = (newTopic: Topic) => {
    setTopic([
      ...topic!,
      {
        name: newTopic.name,
        connection: "",
        partition: newTopic.partition,
        topic_size: 0,
        views: 0,
        owner: "",
        labels: "",
        id: 0,
      },
    ]);
  };

  return (
    <TopicContext.Provider value={{ topic, addNewTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

function useTopic() {
  const context = useContext(TopicContext);
  if (context === undefined)
    throw new Error("TopicContext was used outside of the TopicProvider");
  return context;
}

export { TopicProvider, useTopic };
