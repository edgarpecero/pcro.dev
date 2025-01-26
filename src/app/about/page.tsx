import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social, structure } from "@/app/resources/content";
import { ImageContent } from "../resources/types";

const styleConfig = {
  heading: {
    marginBottom: "s",
  }
}

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith("mailto:")) // Filter out empty links and email links
              .map((item) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />

      {/* Table of contents */}
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      {/* Main Avatar content */}
      <Flex fillWidth mobileDirection="column" horizontal="center">

        {/* Fixed content */}
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>

            {/* Avatar Languages */}
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}

            {/* Avatar Skills */}
            {/* <Column as="ul">
              {Object.entries(about.avatar.skills).map(([category, skillList]) => (
                <>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="s">
                    {category}
                  </Text>
                  {(skillList || []).map((skill: string, index: number) => (
                    <Text
                      as="li"
                      size={"xs"}
                      variant="body-default-s"
                      key={`${skill}-${index}`}
                    >
                      {skill}
                    </Text>
                  ))}
                </>
              ))}
            </Column> */}

          </Column>
        )}

        {/* Main content*/}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {/* Schedule a call */}
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}

            {/* Person */}
            <Heading className={styles.textAlign} variant="display-strong-xl" marginBottom="xs">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>

            {/* Social icons*/}
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap>
                {social.map(
                  (item) =>
                    item.link && (
                      <Button
                        key={item.name}
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        variant="secondary"
                      />
                    ),
                )}
              </Flex>
            )}
          </Column>

          {/* Introduction */}
          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="l">
              {about.intro.description}
            </Column>
          )}

          {/* Work Experience */}
          {about.work.display && (
            <>
              {/* Work title */}
              <Heading as="h2" id={about.work.title} variant="display-strong-s" >
                {about.work.title}
              </Heading>

              <Column fillWidth marginBottom="40">

                {/* Work experiences */}
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="m">

                      {/* Company Name*/}
                      {experience?.company && (
                        <Text id={experience.company} variant="heading-strong-l" marginTop="l">
                          {experience.company}
                        </Text>
                      )}

                      {/* Work Experience Timeframe */}
                      {experience?.timeframe && (
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      )}
                    </Flex>

                    {/* Work Experience Role */}
                    <Text variant="body-default-m" onBackground="brand-weak" marginBottom="s">
                      {experience.role}
                    </Text>

                    {/* Work Experience Achievements */}
                    <Column as="ul">
                      {(experience?.achievements || []).map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>

                    {/* Work Experience Images */}
                    {experience?.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image: ImageContent, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Studies */}
          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>

              {/* Institutions */}
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="8">

                      {/* Institution Name */}
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>

                      {/* Institution Timeframe */}
                      {about.studies?.timeframe && (
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {about.studies?.timeframe}
                        </Text>
                      )}
                    </Flex>

                    {/* Institution Description */}
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Technical skills */}
          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.technical.title}
              </Heading>

              {about.technical.description && (
                <Column textVariant="body-default-l" fillWidth gap="xs" marginBottom="l">
                  {about.technical.description}
                </Column>
              )}

              {/* Technical Skills */}
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>

                    {/* Images */}
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
