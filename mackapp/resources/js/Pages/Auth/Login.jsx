import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    const exit = () => {
        window.location.href = route('welcome');
    };

    

    return (
        <GuestLayout>
            <Head title="Log in" />

            
            <Link href="/" className="absolute top-0 right-0 mt-7 mr-4">
                    <button type="button" className="text-4xl">&times;</button>
                </Link>


            <div className="flex justify-center mb-6">
                <img src="/MU%20logo.png" alt="Logo" className="h-20 w-20 transition-transform transform hover:scale-110" />
            </div>

            <div className="relative bg-white shadow-lg rounded-lg p-8 max-w-xl w-full" style={{ minHeight: '400px' }}>
               

                <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>

                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <form onSubmit={submit}>
                    <div className="mb-4">
                        <InputLabel htmlFor="email" value="Email" className="text-gray-700" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
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
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2 text-red-600" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="text-indigo-600"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                            Remember me
                        </label>
                    </div>

                    <div className="flex justify-between items-center">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-gray-600 hover:text-gray-900"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton className="ml-4" disabled={processing}>
                            {processing ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-r-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                    Logging in...
                                </span>
                            ) : (
                                'Log in'
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