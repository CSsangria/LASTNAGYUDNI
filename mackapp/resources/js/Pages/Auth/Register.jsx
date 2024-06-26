import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        
    });
    const routes = {
        dashboardEnrollment: '/admission',
    };
    

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: () => {
                window.location.href = routes.dashboardEnrollment;  // Redirect to enrollment page
            }
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

                  
            <Link href="/" className="absolute top-0 right-0 mt-7 mr-4">
                    <button type="button" className="text-4xl">&times;</button>
                </Link>

            <div className="flex justify-center mb-6">
                <img src="/MU%20logo.png" alt="Logo" className="h-20 w-20 transition-transform transform hover:scale-110" />
            </div>

            <h2 className="text-2 font-bold mb-6 text-center">Admission and Future Enrollments will be tied to your account. </h2>

            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <form onSubmit={submit}>
                    <div className="mb-4">
                        <InputLabel htmlFor="name" value=" First Name" className="text-gray-700" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2 text-red-600" />
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="email" value="Email" className="text-gray-700" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2 text-red-600" />
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="password" value="Password" className="text-gray-700" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2 text-red-600" />
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="text-gray-700" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2 text-red-600" />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="ml-4" disabled={processing}>
                            {processing ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-r-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                    Registering...
                                </span>
                            ) : (
                                'Register'
                            )}
                        </PrimaryButton>
                    </div>
                </form>
            </div>

            <style jsx>{`
                .bg-gradient {
                    background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(228,228,233,1) 50%, rgba(197,202,233,1) 100%);
                }
            `}</style>
        </GuestLayout>
    );
}