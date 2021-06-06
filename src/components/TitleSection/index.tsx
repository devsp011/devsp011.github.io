import Link from 'next/link'
import { Flex, Heading, Icon, Spacer, Text, FlexProps } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

interface TitleSectionProps extends FlexProps {
  href?: string
  title: string
  subTitle: string
}

export function TitleSection({ href, title, subTitle, ...props }: TitleSectionProps) {
  return (
    <Link href={href || ''} passHref>
      <Flex as="a" align="center" justify="space-between" role="group" {...props}>
        <Heading
          color="custom.primary"
          transition="color 0.4s"
          _groupHover={{ color: 'custom.secondary' }}
        >
          {title}
        </Heading>

        {href && (
          <Icon
            as={FiArrowRight}
            color="custom.primary"
            w={6}
            h={6}
            opacity="0"
            transition="all 0.4s"
            _groupHover={{ color: 'custom.secondary', opacity: 1, ml: 4 }}
          />
        )}

        <Spacer />

        <Text
          fontSize="xl"
          color="gray.100"
          transition="color 0.4s"
          _groupHover={{ color: 'custom.secondary' }}
        >
          {subTitle}
        </Text>
      </Flex>
    </Link>
  )
}
