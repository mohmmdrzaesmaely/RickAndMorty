import { compose } from "../../commons";
import { useContainer } from "./container";
import { View } from "./view";

export const Home = () => compose(useContainer, View)();
