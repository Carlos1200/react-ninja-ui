import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card, Description } from "../components";

export default {
  title: "UI/Card",
  component: Card,
  subcomponents: { Description },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const SimpleCard = Template.bind({});
SimpleCard.args = {
  information: {
    title: "Card Title",
    description: "Card Description",
    image: "https://picsum.photos/200/300",
  },
  children: ({ title, description }) => (
    <div
      style={{
        textAlign: "center",
        color: "black",
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  ),
};

export const ComplexCard = Template.bind({});
ComplexCard.args = {
  information: {
    title: "Card Title",
    description: "Card Description",
    image: "https://picsum.photos/200/300",
  },
  children: () => <Description />,
};
