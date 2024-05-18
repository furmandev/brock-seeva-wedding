import { RouteSectionProps } from "@solidjs/router";
import type { Component, JSX } from "solid-js";

const App: Component<RouteSectionProps<unknown>> = ({ children }) => {
    return <main class="bg-slate-200 min-h-screen">{children}</main>;
};

export default App;
