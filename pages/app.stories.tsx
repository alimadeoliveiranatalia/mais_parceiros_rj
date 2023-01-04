import { StoryObj } from "@storybook/react";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import MyApp from "./_app";

export default {
    component: MyApp,
    subcomponents: [ Header, Footer ],
    title: "Pages/MyApp"
}

export const Default: StoryObj = {}