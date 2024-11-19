import { ThemeProvider } from "./lib/provider"
import { Test } from "./test"

import "./index.css"

export default () => {
	return (
		<>
			<head>
				<meta charSet="utf-8" />
				<title>Qwik Blanks App</title>
			</head>
			<body>
				<ThemeProvider
					themes={[
						["simple", "brutalist", "hand"],
						["blue", "red", "green", "purple"],
						["dark", "light"],
					]}
					attribute="class"
				>
					<div>Nested Theme test</div>
					<Test />
				</ThemeProvider>
			</body>
		</>
	)
}
