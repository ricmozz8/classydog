import Layout from '@/Layouts/Layout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import IconButton from "@/Components/Buttons/IconButton"
export default function Edit({ mustVerifyEmail, status, auth }) {
    return (
        <Layout auth={auth} pageTitle="Profile">


            <img className={`rounded-full w-[200px] h-[200px]
                bg-gray-200 m-auto md:m-0 md:ml-12 border-4 border-white
                object-cover hover:brightness-90 transition-all cursor-pointer `}
                src={"https://picsum.photos/200/300"} />

            <div className="flex items-start gap-3 p-4">

                <div className="flex-col">
                    <h1 className="text-3xl font-semibold">{auth.user.name}</h1>
                    <p className="text-md text-gray-500">{auth.user.email}</p>
                </div>
                <IconButton lineIcon={'edit'} size={'medium'} />
            </div>



            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
