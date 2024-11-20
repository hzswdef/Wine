import { InputItemDataType } from "rsuite/InputPicker";

export enum SortOptionsEnum {
	"asc" = "title",
	"desc" = "-title",
	"recent" = "-changed",
	"oldest" = "created"
}

export const sortOptionsInputPicker: InputItemDataType<string | number>[] = [
	{
		label: "Title ASC",
		value: SortOptionsEnum.asc
	},
	{
		label: "Title Desc",
		value: SortOptionsEnum.desc
	},
	{
		label: "Recent",
		value: SortOptionsEnum.recent
	},
	{
		label: "Oldest",
		value: SortOptionsEnum.oldest
	}
];
