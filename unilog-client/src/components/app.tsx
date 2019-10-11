import React, { useState } from "react";
import { State, Action, ActionType } from "../interfaces";
import { BucketComponent } from "./bucket";
import { BallCreatorComponent } from "./ball-creator";
import { mainReducer } from "../reducer";
import { BallMoverComponent } from "./ball-mover";

const INITIAL_STATE: State = {
  buckets: [
    {
      id: "philippes-bucket",
      name: "Philippe's bucket",
      balls: [],
    },
    {
      id: "other-bucket",
      name: "Other bucket",
      balls: [],
    },
  ],
};

const INITAL_LOG: Action[] = [
  {
    type: ActionType.CreateBall,
    id: "1",
    color: "red",
    bucketId: "philippes-bucket",
  },
  {
    type: ActionType.CreateBall,
    id: "2",
    color: "green",
    bucketId: "philippes-bucket",
  },
  {
    type: ActionType.CreateBall,
    id: "4",
    color: "green",
    bucketId: "other-bucket",
  },
  {
    type: ActionType.CreateBall,
    id: "6",
    color: "blue",
    bucketId: "other-bucket",
  },
];

export const AppComponent: React.FC = () => {
  const [log, setLog] = useState(INITAL_LOG);
  const pushAction = (a: Action) => setLog([...log, a]);

  const state = log.reduce((a, c) => mainReducer(a, c), INITIAL_STATE);

  return (
    <div>
      <BallCreatorComponent
        buckets={state.buckets}
        onCreateAction={pushAction}
      />
      <BallMoverComponent buckets={state.buckets} onCreateAction={pushAction} />
      {state.buckets.map(b => (
        <BucketComponent key={b.id} bucket={b} />
      ))}
    </div>
  );
};
