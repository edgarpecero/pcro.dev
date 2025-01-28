import { technicalSkills } from "@/app/resources/content";
import { Flex, InlineCode, Text, } from "@/once-ui/components";

export const CustomeTechnicalDescription = () => {
  return (
    <>
      {Object.entries(technicalSkills).map(([category, skillList]) => (
        <Flex fillWidth gap="s" mobileDirection="column" marginBottom="m">
          <Text variant="body-default-m" onBackground="brand-weak" style={{ width: '110px' }}>
            {category}:
          </Text>
          <Flex fillWidth gap="xs" wrap={true}>
            {skillList.map((skill) => <InlineCode>{skill}</InlineCode>)}
          </Flex>
        </Flex>
      ))}
    </>
  )
};
