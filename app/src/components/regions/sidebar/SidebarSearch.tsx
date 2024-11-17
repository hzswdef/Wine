import SearchIcon from "@rsuite/icons/Search";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Form, Input, InputGroup } from "rsuite";

interface FormData {
  query: string;
}

const SidebarSearch = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      query: ""
    }
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };

  return (
    <Form onSubmit={() => handleSubmit(onSubmit)}>
      <Form.Group controlId="query">
        <Controller
          name="query"
          control={control}
          rules={{
            required: "Query is required"
          }}
          render={({ field }) => (
            <InputGroup className="!w-auto" disabled>
              <Input
                id={field.name}
                value={field.value}
                onChange={value => field.onChange(value)}
                placeholder="Search"
              />

              <Form.ErrorMessage show={!!errors.query} placement="bottomStart">
                {errors.query?.message}
              </Form.ErrorMessage>

              <InputGroup.Button>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          )}
        />
      </Form.Group>
    </Form>
  );
};

export default SidebarSearch;
