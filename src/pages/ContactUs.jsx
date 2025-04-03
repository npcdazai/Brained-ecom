import MainFrame from '../components/MainFrame';
import { Heading, Stack, Icon, Text, VStack, Input, Button, useBreakpointValue } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { CiLocationOn, CiPhone } from 'react-icons/ci';
import { FaRegMessage } from 'react-icons/fa6';

const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    phoneNo: yup.string().matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits").required('Phone number is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    description: yup.string().required('Description is required'),
});

const contacts = [
    { id: 1, icon: CiLocationOn, desc: '2715 Ash Dr. San Jose, South Dakota 83475' },
    { id: 2, icon: FaRegMessage, desc: 'Help.proxy@gmail.com' },
    { id: 3, icon: CiPhone, desc: '(219) 555-0114 (164) 333-0487' },
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

    const flexDirection = useBreakpointValue({ base: 'column', md: 'row-reverse' });
    const width = useBreakpointValue({ base: '100%', md: '70%' });

    return (
        <MainFrame>
            <Stack w="100%" h="auto" px={6} flexDirection={flexDirection} spacing={8} alignItems="center" py={8}>
                <VStack as="form" onSubmit={handleSubmit(onSubmit)} alignItems="flex-start" w={width} px={{ base: 4, md: 12 }}>
                    <VStack alignItems="flex-start" spacing={2} w="100%">
                        <Heading color="#1A1A1A" fontWeight="700" fontSize={{ base: "xl", md: "2xl" }}>Just say Hello!</Heading>
                        <Text color="#808080" fontWeight={500} fontSize={{ base: "sm", md: "md" }}>Feel free to contact me.</Text>
                    </VStack>
                    <VStack spacing={4} w="100%">
                        <Input placeholder="First Name" {...register("firstName")} />
                        <Text color="red.500" fontSize="sm">{errors.firstName?.message}</Text>
                        <Input placeholder="Last Name" {...register("lastName")} />
                        <Text color="red.500" fontSize="sm">{errors.lastName?.message}</Text>
                        <Input placeholder="Phone Number" {...register("phoneNo")} />
                        <Text color="red.500" fontSize="sm">{errors.phoneNo?.message}</Text>
                        <Input placeholder="Email" {...register("email")} />
                        <Text color="red.500" fontSize="sm">{errors.email?.message}</Text>
                        <Input placeholder="Description" {...register("description")} />
                        <Text color="red.500" fontSize="sm">{errors.description?.message}</Text>
                    </VStack>
                    <Button type="submit" size={{ base: "sm", md: "md" }} bgColor="#00B207" color="#fff" w="full">Send Message</Button>
                </VStack>
                <VStack w={{ base: "100%", md: "30%" }} spacing={6}>
                    {contacts.map((val) => (
                        <VStack key={val.id} w={{ base: "80%", md: "50%" }}>
                            <Icon as={val.icon} fontSize="64px" color="lightgreen" />
                            <Text textAlign="center" color="#333333" fontSize="sm" fontWeight={600}>{val.desc}</Text>
                        </VStack>
                    ))}
                </VStack>
            </Stack>
        </MainFrame>
    );
};

export default ContactUs;
