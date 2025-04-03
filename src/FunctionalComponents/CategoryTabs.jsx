import { HStack, Tabs } from "@chakra-ui/react"

const tabs = ["Beauty", "Fragrances", "Furniture", "Groceries"]

const CategoryTabs = () => {
    return (
        <HStack w={"100%"} justifyContent="center" mt={4} >
            <Tabs.Root defaultValue="beauty">
                <Tabs.List style={{ display: "flex", gap: "10px", borderBottom: "none" }}>
                    {tabs.map((val) => (
                        <Tabs.Trigger
                            key={val}
                            value={val}
                            className="tab-trigger"
                            _selected={{
                                color: "#00B207",
                                fontWeight: "bold",
                                borderBottom: "3px solid #00B207",
                            }}
                        >
                            {val}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>
                <Tabs.Content value="members">Manage your team members</Tabs.Content>
                <Tabs.Content value="projects">Manage your projects</Tabs.Content>
                <Tabs.Content value="tasks">
                    Manage your tasks for freelancers
                </Tabs.Content>
            </Tabs.Root>
        </HStack>
    )
}

export default CategoryTabs
