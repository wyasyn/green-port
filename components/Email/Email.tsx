import {  
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
 } from "@react-email/components";
 import { Tailwind } from "@react-email/tailwind";


type FormEmailProps = {
    message: string
    email: string
    name: string
    whatsapp: string
}

export default function Email( {message, email, name, whatsapp}: FormEmailProps ) {
  return (
    <Html>
        <Head />
        <Preview>New message from {name}</Preview>
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading>
                            You have received a new message from {name}.
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>{name}'s email is : {email}, WhatsApp: {whatsapp}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
