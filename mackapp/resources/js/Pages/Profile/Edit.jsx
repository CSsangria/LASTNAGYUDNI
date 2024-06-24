import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status, enrollment }) {
    const { data, setData, put, processing, errors } = useForm({
        name: auth.user.name,
        email: auth.user.email,
        term: enrollment ? enrollment.term : '',
        applicationType: enrollment ? enrollment.applicationType : '',
        course: enrollment ? enrollment.course : '',
        department: enrollment ? enrollment.department : '',
        year: enrollment ? enrollment.year : '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('profile.update'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Profile Information */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md"
                                />
                                {errors.name && <div className="text-red-500">{errors.name}</div>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md"
                                />
                                {errors.email && <div className="text-red-500">{errors.email}</div>}
                            </div>

                            {/* Enrollment Information */}
                            <div>
                                <label htmlFor="term" className="block text-sm font-medium text-gray-700">
                                    Academic Year & Term
                                </label>
                                <input
                                    type="text"
                                    name="term"
                                    value={data.term}
                                    onChange={(e) => setData('term', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md"
                                />
                                {errors.term && <div className="text-red-500">{errors.term}</div>}
                            </div>

                            <div>
                                <label htmlFor="applicationType" className="block text-sm font-medium text-gray-700">
                                    Application Type
                                </label>
                                <input
                                    type="text"
                                    name="applicationType"
                                    value={data.applicationType}
                                    onChange={(e) => setData('applicationType', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md"
                                />
                                {errors.applicationType && <div className="text-red-500">{errors.applicationType}</div>}
                            </div>

                            <div>
                                <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                                    First Choice Academic Program
                                </label>
                                <input
                                    type="text"
                                    name="course"
                                    value={data.course}
                                    onChange={(e) => setData('course', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md"
                                />
                                {errors.course && <div className="text-red-500">{errors.course}</div>}
                            </div>

                            <div>
                                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                                    Department
                                </label>
                                <input
                                    type="text"
                                    name="department"
                                    value={data.department}
                                    onChange={(e) => setData('department', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md"
                                />
                                {errors.department && <div className="text-red-500">{errors.department}</div>}
                            </div>

                            <div>
                                <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                                    Year
                                </label>
                                <input
                                    type="text"
                                    name="year"
                                    value={data.year}
                                    onChange={(e) => setData('year', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md"
                                />
                                {errors.year && <div className="text-red-500">{errors.year}</div>}
                            </div>

                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                disabled={processing}
                            >
                                Update
                            </button>
                        </form>
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
