import { VoidObject } from "./types";

export const compose =
	<TModel = VoidObject, TProps = VoidObject>(useContainer: ((parent_props: TProps) => TModel) | (() => TModel), View: (props: TModel) => JSX.Element) =>
	(values?: TProps) => {
		let binding_model = {} as TModel;

		binding_model = values ? useContainer(values) : useContainer({} as TProps);

		return View(binding_model);
	};
