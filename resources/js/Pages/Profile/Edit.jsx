import Layout from '@/Layouts/Layout';
import UserProfileBannerEdit from './Partials/UserProfileBannerEdit';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import IconButton from "@/Components/Buttons/IconButton"
export default function Edit({ mustVerifyEmail, status, auth }) {
    return (
        <Layout auth={auth} pageTitle="Profile">

            <p className='fixed bottom-13 p-1 text-sm  rounded-md m-auto  font-semibold text-center bg-red-500 text-red-50 z-50'>fix profile picture & banner component</p>

            <UserProfileBannerEdit user={auth.user} />

            <div className="flex items-start gap-3 justify-between p-4">
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
