import MainFrame from '../components/MainFrame';
import { Heading, HStack, Icon, Text, VStack, Input, Button } from '@chakra-ui/react';
import { Field } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { CiLocationOn, CiPhone } from 'react-icons/ci';
import { FaRegMessage } from 'react-icons/fa6';

const schema = yup.object().shape({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    description: yup.string().required('Description is required'),
});

const contacts = [
    { id: 1, icon: CiLocationOn, desc: '2715 Ash Dr. San Jose, South Dakota 83475' },
    { id: 2, icon: FaRegMessage, desc: 'Help.proxy@gmail.com' },
    { id: 3, icon: CiPhone, desc: '(219) 555-0114 (164) 333-0487' },
];

const inputDetails = [
    { id: 'fullName', label: 'Full Name' },
    { id: 'email', label: 'Email' },
    { id: 'description', label: 'Description' },
];

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        emailjs.send('service_qilzqhb', 'template_xtlcns9', data, '4KqGiXThONCkHyCQC')
            .then(() => {
                alert('Message sent successfully!');
                reset();
            })
            .catch((err) => console.error('EmailJS Error:', err));
    };

    return (
        <MainFrame>
            <HStack w="100%" h="calc(100vh - 9.8rem)" px={6}>
                <VStack w="30%" gap={8}>
                    {contacts.map((val) => (
                        <VStack key={val.id} w="50%">
                            <Icon as={val.icon} fontSize="64px" color="lightgreen" />
                            <Text textAlign="center" color="#333333" fontSize="sm" fontWeight={600}>{val.desc}</Text>
                        </VStack>
                    ))}
                </VStack>
                <VStack as="form" onSubmit={handleSubmit(onSubmit)} alignItems="flex-start" w="70%" px={12}>
                    <VStack alignItems="flex-start">
                        <Heading color="#1A1A1A" fontWeight="700" fontSize="2xl">Just say Hello!</Heading>
                        <Text color="#808080" fontWeight={500} fontSize="sm">Feel free to contact me.</Text>
                    </VStack>
                    {inputDetails.map((val) => (
                        <Field.Root key={val.id} required>
                            <Field.Label>{val.label}</Field.Label>
                            <Input placeholder={val.label} {...register(val.id)} />
                            <Text color="red.500" fontSize="sm">{errors[val.id]?.message}</Text>
                        </Field.Root>
                    ))}
                    <Button type="submit" colorScheme="green">Send Message</Button>
                </VStack>
            </HStack>
        </MainFrame>
    );
};

export default ContactUs;
