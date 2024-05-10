import {
	Spinner,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Todo } from "./domain/todo";
import { GetAllTodos } from "./lib/todo";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [todos, setTodos] = useState<Todo[]>([]);
	useEffect(() => {
		const getAllTodos = async () => {
			const todoData = await GetAllTodos();
			setTodos(todoData);
			setIsLoading(false);
		};
		getAllTodos();
	}, []);

	if (isLoading) {
		return (
			<>
				<p>Loading...</p>
				<Spinner />
			</>
		);
	}

	return (
		<>
			<h1 data-testid="title">ToDoリスト</h1>
			<TableContainer>
				<Table data-testid="table" variant="simple">
					<Thead>
						<Tr>
							<Th>Title</Th>
							<Th>Done</Th>
							<Th>Created_at</Th>
						</Tr>
					</Thead>
					<Tbody>
						{todos.map((todo) => (
							<Tr key={todo.id}>
								<Td>{todo.title}</Td>
								<Td>{todo.done ? "TRUE" : "FALSE"}</Td>
								<Td>{todo.created_at}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
}

export default App;
