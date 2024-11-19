export { useTheme, ThemeProvider } from "./lib/provider"

export { Test } from "./test"

import { component$ } from "@builder.io/qwik"

import { Test } from "./test"

export default component$(() => {
    
    return (
        <>
        
      <Test/>
        </>
    )})
    