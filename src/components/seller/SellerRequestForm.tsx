import { TabPanel, TabView } from "primereact/tabview";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { SellerRequest } from "../../class/seller/SellerRequest";
import { becomeSeller, getRequestByUserId } from "../../services/seller/SellerService";



const SellerRequestForm = () => {

    const [index, setIndex] = useState<number>(0)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isRequested, setIsRequested] = useState<boolean>()
    const { handleSubmit, register, formState: { errors } } = useForm();

    useEffect(() => {

        getRequestByUserId(localStorage.getItem('user')['_id'])
            .then(_response => setIsRequested(true))
            .catch(error => console.error(error))
    }, [])

    const onSubmit = (data: FieldValues) => {
        setIsSubmitting(true)
        let request = new SellerRequest()
        request.userId = JSON.parse(localStorage.getItem('user'))['_id']
        request.firstName = data.firstName
        request.lastName = data.lastName
        request.email = data.email
        request.businessType = data.businessType
        request.businessAddress = data.businessAddress
        request.phone = data.phone

        becomeSeller(request, data.doc[0])
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .finally(() => setIsSubmitting(false))
    }


    return (
        <section className="grid grid-cols-2 bg-[#10D087] h-[calc(100vh-74px)]">
            <div className="hidden md:flex md:col-span-1">
                <img className="max-h-[calc(100vh-74px)] w-full" style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }} src="/business/seller_form_2.jpeg" alt="seller form" />
            </div>
            <div className="col-span-2 md:col-span-1">
                {
                    isRequested ? <>
                        <h1 className="text-center text-white font-serif font-bold text-3xl p-4">Seller Registration Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TabView className="p-5" activeIndex={index}>
                                <TabPanel header="Personal Information">
                                    <div className="mb-4">
                                        <label htmlFor="firstName" className="flex text-gray-700 font-bold mb-2">First Name {errors.firstName && <p className="text-red-600 px-1">{errors.firstName.message.toString()}</p>}</label>
                                        <input {...register('firstName', {
                                            required: 'First Name is required',
                                        })} type="text" id="firstName" name="firstName" className="w-full border border-green-500 rounded-lg p-2 " placeholder="First Name" />

                                    </div>
                                    <div className="mb-4 ">
                                        <label htmlFor="lastName" className="flex text-gray-700 font-bold mb-2">Last Name{errors.lastName && <p className="text-red-600 px-1">{errors.lastName?.message?.toString()}</p>}</label>
                                        <input {...register('lastName', {
                                            required: 'Last Name is required',
                                        })} type="text" id="lastName" name="lastName" className="w-full border p-2 rounded" placeholder="Last Name" />

                                    </div>
                                    <div className="mb-4 ">
                                        <label htmlFor="email" className="flex text-gray-700 font-bold mb-2">Email <span className="text-sm text-gray-400">(must be same)</span>   {errors.email && <p className="text-red-600 px-1">{errors.email?.message?.toString()}</p>}</label>
                                        <input {...register('email', {
                                            required: 'Email is Required',
                                        })} type="email" id="email" name="email" className="w-full border p-2 rounded" placeholder="Email" />

                                    </div>
                                    <button type="button" className="bg-green-500 text-white text-xl font-serif rounded-lg drop-shadow-xl m-1 px-4 py-3" onClick={() => setIndex(index + 1)}>Next</button>
                                </TabPanel>
                                <TabPanel header="Business Information">
                                    <div className="mb-4">
                                        <label htmlFor="businessType" className="flex text-gray-700 font-bold mb-2">Business Type  {errors.businessType && <p className="text-red-600 px-1">{errors.businessType.message.toString()}</p>}</label>
                                        <input {...register('businessType', {
                                            required: 'Type is required',
                                        })} type="text" id="businessType" name="businessType" className="w-full border p-2 rounded" placeholder="Business Type" />

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phone" className="flex text-gray-700 font-bold mb-2">Phone Number{errors.phone && <p className="text-red-600 px-1">{errors.phone.message.toString()}</p>}</label>
                                        <input type="tel" {...register('phone', {
                                            required: 'Phone is required',
                                        })} id="phone" placeholder="(+92) xxx-xxxxxxxx"></input>

                                    </div>
                                    <div className="mb-4 ">
                                        <label htmlFor="businessAddress" className="flex text-gray-700 font-bold mb-2 px-1">Business Address  {errors.businessAddress && <p className="text-red-600">{errors.businessAddress.message.toString()}</p>}</label>
                                        <input {...register('businessAddress', {
                                            required: 'Address is required',
                                        })} type="text" id="businessAddress" name="businessAddress" className="w-full border p-2 rounded" placeholder="Business Address" />

                                    </div>
                                    <button type="button" className="bg-[#5BD899] text-white text-xl font-serif rounded-lg drop-shadow-xl m-1 px-4 py-3">Previous</button>
                                    <button type="button" className="bg-[#5BD899] text-white text-xl font-serif rounded-lg drop-shadow-xl m-1 px-4 py-3">Next</button>
                                </TabPanel>
                                <TabPanel header="Documents">
                                    <div className="mb-4 col-span-1">
                                        <label htmlFor="doc" className="flex text-gray-700 font-bold mb-2">Verification Doc</label>
                                        <input {...register('doc', {
                                            required: 'Document is Required',
                                        })} type="file" id="doc" name="doc" className="w-full border p-2 rounded" />
                                        {errors.doc && <p className="text-red-600">{errors.doc.message.toString()}</p>}
                                    </div>
                                    <button type="submit" className="bg-[#5BD899] text-white text-xl font-serif rounded-lg drop-shadow-xl m-1 px-4 py-3" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submiting...' : 'Submit'}</button>
                                </TabPanel>
                            </TabView>
                        </form>
                    </> : <>
                        <h1 className="text-center text-white font-serif font-bold text-3xl p-4">Seller Request Forwarded</h1>
                        <article className="bg-white m-2 p-3">
                            <p>Your request has been forwarded to admin.Please be patience. We will soon inform you about the status of request</p>
                        </article>
                    </>

                }

            </div>
        </section>
    )
}

export default SellerRequestForm
