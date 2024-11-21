import ErrorMessage from "@components/atoms/ErrorMessage/ErrorMessage";
import FormField from "@components/molecules/FormField/FormField";
import FormInputField from "@components/molecules/FormInputField/FormInputField";
import FormInputPickerField from "@components/molecules/FormInputPickerField/FormInputPickerField";
import FormSelectPickerField from "@components/molecules/FormSelectPickerField/FormSelectPickerField";
import { FormData, PageState } from "@components/pages/PagePosts/PagePosts";
import { sortOptionsInputPicker } from "@constants/sortOptions";
import { memo } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Form } from "rsuite";

interface PostsPageHeaderProps {
	control: Control<FormData>;
	errors: FieldErrors<FormData>;
	pageStateTags: PageState["tags"];
	pageStatePostsTotal: PageState["postsTotal"];
	pageError?: string;
}

const PagePostsHeader = memo(
	({
		control,
		errors,
		pageStateTags,
		pageStatePostsTotal,
		pageError
	}: PostsPageHeaderProps) => {
		return (
			<div className="posts-header">
				<Form className="mb-8 flex flex-wrap gap-4 md:flex-nowrap md:gap-2">
					<FormField
						name="title"
						wrapperClassName="!mb-0 basis-full md:basis-1/3"
						controller={
							<Controller
								name="title"
								control={control}
								render={({ field }) => (
									<FormInputField<FormData>
										field={field}
										error={errors.title}
										placeholder="Search"
									/>
								)}
							/>
						}
					/>

					<FormField
						name="tags"
						wrapperClassName="!mb-0 basis-full md:basis-1/3"
						controller={
							<Controller
								name="tags"
								control={control}
								render={({ field }) => (
									<FormInputPickerField<FormData>
										data={pageStateTags}
										field={field}
										placeholder="Tags"
									/>
								)}
							/>
						}
					/>

					<FormField
						name="sort"
						wrapperClassName="!mb-0 basis-full md:basis-1/3"
						controller={
							<Controller
								name="sort"
								control={control}
								render={({ field }) => (
									<FormSelectPickerField<FormData>
										data={sortOptionsInputPicker}
										field={field}
										searchable={false}
										placeholder="Sort by"
									/>
								)}
							/>
						}
					/>
				</Form>

				<div className="header-info mb-4">
					<div className="posts-count">
						<small>Results:</small> <strong>{pageStatePostsTotal}</strong>
					</div>
				</div>

				{pageError && (
					<div className="mb-8">
						<ErrorMessage>{pageError}</ErrorMessage>
					</div>
				)}
			</div>
		);
	}
);

export default PagePostsHeader;
