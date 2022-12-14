import { StoryObj } from "@storybook/react";
import  Home from "./index";
import { Carousel } from "../src/components/Carousel";
import { Form } from "../src/components/Form";
import { Header } from "../src/components/Header";
import { MenuSocialMedia } from "../src/components/MenuSocialMedia";
import { Navigation } from "../src/components/Navigation";
import { SliderShowVideo } from "../src/components/SliderShowVideo";

export default {
    component: Home,
    subcomponents: [ Header, MenuSocialMedia, Navigation, SliderShowVideo, Carousel, Form],
    title: "Pages/Home"
} 

export const Default: StoryObj = {}