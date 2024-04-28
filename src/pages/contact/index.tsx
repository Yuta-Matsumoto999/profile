import { Box, Container, Heading } from '@chakra-ui/react'
import Section from '@/components/animations/section'
import ContactForm from '@/components/forms/contactForm'
import PageAnimation from '@/components/animations/article'

const Contact = () => {
    return (
        <PageAnimation>
            <Container>
                <Heading as='h3' fontSize={20} mt={4} mb={4}>
                    Contact
                </Heading>
                <Section delay={0.3}>
                    <Box>
                        <ContactForm />
                    </Box>
                </Section>
            </Container>
        </PageAnimation>
    )
}

export default Contact
