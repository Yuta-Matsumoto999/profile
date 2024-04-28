import { Container, Box, Heading } from '@chakra-ui/react'
import Section from '@/components/animations/section'
import ContactForm from '@/components/forms/contactForm'

const Contact = () => {
    return (
        <>
            <Heading as='h3' fontSize={20} mt={4} mb={4}>
                Contact
            </Heading>
            <Section delay={0.3}>
                <Box>
                    <ContactForm />
                </Box>
            </Section>
        </>
    )
}

export default Contact
