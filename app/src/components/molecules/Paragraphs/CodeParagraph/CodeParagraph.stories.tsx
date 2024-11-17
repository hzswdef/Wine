import CodeParagraph from "@components/molecules/Paragraphs/CodeParagraph/CodeParagraph";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Molecules/Paragraphs/CodeParagraph",
	component: CodeParagraph,
	argTypes: {
		paragraph: {
			control: "select",
			options: [
				"JavaScript",
				"JSX",
				"TypeScript",
				"TSX",
				"PHP",
				"Python",
				"JSON"
			],
			mapping: {
				JavaScript: {
					type: "Paragraph - Code",
					id: "9292c949-7201-40be-8e72-fa248ad1817d",
					drupal_internal__id: 17,
					status: true,
					created: "2024-11-08T06:16:08+00:00",
					parent_id: 2,
					body: 'import dayjs from "dayjs";\r\n\r\nconst dateFormat = (\r\n  date,\r\n  format: "MM/DD/YYYY" | "MMMM D, YYYY" = "MM/DD/YYYY"\r\n) => {\r\n  return dayjs(date).format(format);\r\n};\r\n\r\nexport default dateFormat;',
					language: "tsx",
					title: "src/helpers/dayFormat.js"
				},
				JSX: {
					type: "Paragraph - Code",
					id: "9292c949-7201-40be-8e72-fa248ad1817d",
					drupal_internal__id: 17,
					status: true,
					created: "2024-11-08T06:16:08+00:00",
					parent_id: 2,
					body: 'import GrandChildComponent from \'./GrandChildComponent\';\r\n\r\nconst ChildComponent = ({ count, setCount }) => {\r\n return (\r\n   <>\r\n     <div className="text-center mt-3">\r\n       <h2 className="text-3xl">Child Component</h2>\r\n       <small>Not Using the count state too</small>\r\n     </div>\r\n\r\n     <GrandChildComponent count={count} setCount={setCount} />\r\n   </>\r\n );\r\n};\r\n\r\nexport default ChildComponent;',
					language: "tsx",
					title: "src/components/ChildComponent.jsx"
				},
				TypeScript: {
					type: "Paragraph - Code",
					id: "9292c949-7201-40be-8e72-fa248ad1817d",
					drupal_internal__id: 17,
					status: true,
					created: "2024-11-08T06:16:08+00:00",
					parent_id: 2,
					body: 'import dayjs from "dayjs";\r\n\r\nconst dateFormat = (\r\n  date: dayjs.ConfigType,\r\n  format: "MM/DD/YYYY" | "MMMM D, YYYY" = "MM/DD/YYYY"\r\n): string => {\r\n  return dayjs(date).format(format);\r\n};\r\n\r\nexport default dateFormat;',
					language: "tsx",
					title: "src/helpers/dayFormat.js"
				},
				TSX: {
					type: "Paragraph - Code",
					id: "9292c949-7201-40be-8e72-fa248ad1817d",
					drupal_internal__id: 17,
					status: true,
					created: "2024-11-08T06:16:08+00:00",
					parent_id: 2,
					body: 'import GrandChildComponent from \'./GrandChildComponent\';\r\n\r\nconst ChildComponent = ({ count, setCount }) => {\r\n return (\r\n   <>\r\n     <div className="text-center mt-3">\r\n       <h2 className="text-3xl">Child Component</h2>\r\n       <small>Not Using the count state too</small>\r\n     </div>\r\n\r\n     <GrandChildComponent count={count} setCount={setCount} />\r\n   </>\r\n );\r\n};\r\n\r\nexport default ChildComponent;',
					language: "tsx",
					title: "src/components/ChildComponent.tsx"
				},
				PHP: {
					type: "Paragraph - Code",
					id: "9292c949-7201-40be-8e72-fa248ad1817d",
					drupal_internal__id: 17,
					status: true,
					created: "2024-11-08T06:16:08+00:00",
					parent_id: 2,
					body: '<?php\r\n\r\necho("Hello World!");',
					language: "php",
					title: "src/components/ChildComponent.tsx"
				},
				Python: {
					type: "Paragraph - Code",
					id: "9292c949-7201-40be-8e72-fa248ad1817d",
					drupal_internal__id: 17,
					status: true,
					created: "2024-11-08T06:16:08+00:00",
					parent_id: 2,
					body: "import json\r\nimport os.path\r\n\r\nfrom os import getcwd\r\n\r\n\r\nif __name__ == '__main__':\r\n    with open(getcwd() + '/settings.json', 'r') as settings_file:\r\n        _settings = json.load(settings_file)\r\n\r\n    # Load existing users if users.json file is present.\r\n    if os.path.isfile(getcwd() + '/users.json'):\r\n        with open(getcwd() + '/users.json', 'r') as users_file:\r\n            _users = json.load(users_file)\r\n    # Otherwise, register em.\r\n    else:\r\n        _users = register_users(_settings)\r\n\r\n        with open(getcwd() + '/users.json', 'w') as users_file:\r\n            users_file.write(json.dumps(_users, ensure_ascii=False, indent=4))",
					language: "python",
					title: "main.py"
				},
				JSON: {
					type: "Paragraph - Code",
					id: "9292c949-7201-40be-8e72-fa248ad1817d",
					drupal_internal__id: 17,
					status: true,
					created: "2024-11-08T06:16:08+00:00",
					parent_id: 2,
					body: '{\r\n  "test-account": {\r\n    "name": "hzswdef",\r\n    "password": "password1337"\r\n  },\r\n  "users": 32\r\n}',
					language: "json",
					title: "users.json"
				}
			}
		}
	}
} as Meta<typeof CodeParagraph>;

type Story = StoryObj<typeof CodeParagraph>;

export const Example: Story = {
	args: {
		paragraph: {
			type: "Paragraph - Code",
			id: "9292c949-7201-40be-8e72-fa248ad1817d",
			drupal_internal__id: 17,
			status: true,
			created: "2024-11-08T06:16:08+00:00",
			parent_id: 2,
			body: 'import GrandChildComponent from \'./GrandChildComponent\';\r\n\r\nconst ChildComponent = ({ count, setCount }) => {\r\n return (\r\n   <>\r\n     <div className="text-center mt-3">\r\n       <h2 className="text-3xl">Child Component</h2>\r\n       <small>Not Using the count state too</small>\r\n     </div>\r\n\r\n     <GrandChildComponent count={count} setCount={setCount} />\r\n   </>\r\n );\r\n};\r\n\r\nexport default ChildComponent;',
			language: "tsx",
			title: "src/components/ChildComponent.tsx"
		}
	}
};
