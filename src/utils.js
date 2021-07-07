import React from "react";
import { useStore } from "./store";

function withStateSlice(Comp, sliceFn) {
  const MemoComp = React.memo(Comp);

  function Wrapper(props) {
    const state = useStore();
    const newProps = sliceFn(state);
    return <MemoComp state={newProps} {...props} />;
  }

  Wrapper.displayName = `withStateSlice(${Comp.displayName || Comp.name})`;
  return React.memo(Wrapper);
}

export default withStateSlice;

//Advanced version

// function withStateSlice(Comp, slice) {
//     const MemoComp = React.memo(Comp);
//     function Wrapper(props, ref) {
//       const state = useStore();
//       const newProps = slice(state, props);
//       return <MemoComp ref={ref} state={newProps} {...props} />;
//     }
//     Wrapper.displayName = `withStateSlice(${Comp.displayName || Comp.name})`;
//     return React.memo(React.forwardRef(Wrapper));
//   }
