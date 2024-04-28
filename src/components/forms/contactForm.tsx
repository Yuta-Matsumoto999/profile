import { useForm } from 'react-hook-form'
import {
    Box,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Textarea,
} from '@chakra-ui/react'
import axios from 'axios'

type FormData = {
    name: string
    email: string
    password: string
    content: string
}

const ContactForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<FormData>()

    const onSubmit = handleSubmit(async (data) => {
        const sendEmail = await axios.post(String(process.env.NEXT_PUBLIC_HYPERFORM_URL), data)
    })

    return (
        <Box mb={5}>
            <form onSubmit={onSubmit}>
                {/* お名前 */}
                <FormControl mb={5} isInvalid={Boolean(errors.name)}>
                    <FormLabel htmlFor='name' fontWeight={600} fontSize={14}>
                        お名前
                    </FormLabel>
                    <Input
                        id='name'
                        placeholder='山田太郎'
                        {...register('name', {
                            required: 'お名前の入力は必須です',
                            maxLength: {
                                value: 100,
                                message: 'お名前は100文字以下で入力してください',
                            },
                        })}
                        h={12}
                        bg={useColorModeValue('whiteAlpha.800', '#2F3747')}
                    />
                    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>

                {/* メールアドレス */}
                <FormControl mb={5} isInvalid={Boolean(errors.email)}>
                    <FormLabel htmlFor='email' mt={2} fontWeight={600} fontSize={14}>
                        メールアドレス
                    </FormLabel>
                    <Input
                        id='email'
                        placeholder='test@test.com'
                        {...register('email', {
                            required: 'メールアドレスの入力は必須です',
                            maxLength: {
                                value: 100,
                                message: 'メールアドレスは100文字以下で入力してください',
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'メールアドレス形式で入力してください',
                            },
                        })}
                        h={12}
                        bg={useColorModeValue('whiteAlpha.800', '#2F3747')}
                    />
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>

                {/* 内容 */}
                <FormControl mb={5} isInvalid={Boolean(errors.content)}>
                    <FormLabel htmlFor='content' mt={2} fontWeight={600} fontSize={14}>
                        内容
                    </FormLabel>
                    <Textarea
                        id='content'
                        placeholder='こんにちは...'
                        {...register('content', {
                            required: '内容の入力は必須です',
                            maxLength: {
                                value: 1000,
                                message: '内容は1000文字以下で入力してください',
                            },
                        })}
                        rows={8}
                        resize='vertical'
                        bg={useColorModeValue('whiteAlpha.800', '#2F3747')}
                    />
                    <FormErrorMessage>{errors.content && errors.content.message}</FormErrorMessage>
                </FormControl>

                <Button
                    mt={6}
                    p={6}
                    colorScheme='teal'
                    color={useColorModeValue('whiteAlpha.900', 'gray.600')}
                    isLoading={isSubmitting}
                    type='submit'
                    w='full'
                >
                    送信
                </Button>
            </form>
        </Box>
    )
}

export default ContactForm
