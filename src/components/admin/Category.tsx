import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { InputText } from "primereact/inputtext"
import { Toolbar } from "primereact/toolbar"
import { useEffect, useRef, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { debounce } from 'lodash';
import { Dialog } from "primereact/dialog"
import { classNames } from "primereact/utils"
import { addCategory } from "../../services/CategoryService"

import { Toast } from 'primereact/toast';



const Categories = () => {

    const [categories, setCategories] = useState<Category[]>(null)
    const [selectedCategory, setSelectedCategory] = useState<Category>(null)
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [categoryDialog, setCategoryDialog] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [file, setFile] = useState<File>(null);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const dt = useRef(null)
    const toast = useRef(null);

    const debouncedSetGlobalFilter = debounce((value) => {
        setGlobalFilter(value);
    }, 300);

    useEffect(() => {
        const Categories: Category[] = [{
            id: 1,
            name: 'Home Service',
            image: '/category/HomeServices1.png'
        },
        {
            id: 2,
            name: 'AutoMobile',
            image: '/category/Automobile1.png'
        }, {
            id: 3,
            name: 'Resturants',
            image: '/category/Restaurant1.png'
        }]
        setCategories(Categories)
    }, [])


    const exportCSV = () => {
        const options = { filename: 'category.csv' };
        dt.current.exportCSV(options);
    };
    const openNew = () => {
        setCategoryDialog(true);
    };

    const hideDialog = () => {
        reset();
        setCategoryDialog(false)
    };


    const confirmDeleteProduct = (product) => {
        // setProduct(product);
        // setDeleteProductDialog(true);
    };
    const confirmDeleteSelected = () => {
        //  setDeleteProductsDialog(true);
    };


    const header = (
        <InputText type="search" onInput={(e) => debouncedSetGlobalFilter(e.target['value'])} placeholder="Search..." />
    );

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <button className="text-sm font-serif font-bold bg-white  rounded-md text-green-500 h-10 px-4" onClick={openNew}><i className="fa-solid fa-plus px-2"></i>New</button>
                <button className="text-sm font-serif font-bold text-white bg-red-600  rounded-md disabled:bg-red-400 h-10 px-4" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length}><i className="fa-solid fa-trash px-2" ></i>Delete</button>
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <button className="text-sm font-serif font-bold text-white bg-[#6366F1] rounded-md h-10 px-4" onClick={exportCSV}>
                <i className="fa-solid fa-file-arrow-down px-2"></i>
                Export
            </button>
        );
    };

    const imageTemplate = (rowData: Category) => {

        return <img src={`${rowData.image}`} alt={rowData.image} className="rounded-md drop-shadow-lg" style={{ width: '44px' }} />;
    }

    //* send data to backend 
    const newFormHandler = (data: FieldValues) => {

        setIsSubmitting(true);
        addCategory(data.name, file)
            .then(
                response => toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 })
            )
            .catch(error => toast.current.show({ severity: 'error', summary: 'error', detail: 'Message Content', life: 3000 }))
            .finally(() => setIsSubmitting(false))
    }

    //* file selected 
    const fileSelected = (e: any) => {
        setFile(e.target['files'][0])
    }


    return (
        <section className="grid grid-cols-12">
            <div className="col-span-12 mb-4">
                <h1 className="text-xl md:text-3xl font-serif font-bold">Category Management</h1>
            </div>
            <div className="col-span-12 mx-auto">
                <Toast ref={toast} />
                <Toolbar className="mb-4 bg-[#22C55E] rounded-lg" start={leftToolbarTemplate} end={rightToolbarTemplate}></Toolbar>
                <DataTable ref={dt} value={categories} selection={selectedCategory} onSelectionChange={(e) => setSelectedCategory(e.value)}
                    dataKey="id" paginator rows={5} rowsPerPageOptions={[5, 10, 15]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header} className="bg-[#22C55E]">
                    <Column selectionMode="multiple" exportable={false}></Column>
                    <Column field="id" header="Id" sortable className="font-bold text-black"></Column>
                    <Column field="name" header="Name" sortable className=" text-black"></Column>
                    <Column field="image" header="Image" body={imageTemplate}></Column>

                </DataTable>

                //* Add New Category
                <Dialog visible={categoryDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Category Detail" modal onHide={hideDialog}>
                    <form className="flex flex-col bg-slate-300 rounded-lg" onSubmit={handleSubmit(newFormHandler)}>
                        <div className="name_section mx-auto py-10">

                            <label htmlFor="categoryName" className={classNames({ 'p-error': errors.value })}></label>
                            <span className="p-float-label text-md font-bold font-serif">
                                <InputText  {...register('name', {
                                    required: 'CategoryName is required',
                                })} />
                                <label htmlFor="categoryName">Category Name</label>
                            </span>
                            {errors?.name && <p className="error-message">{errors.name?.message?.toString()}</p>}
                        </div>

                        <div className="image_section mx-auto py-5">
                            <label htmlFor="categoryImage" className="font-bold font-serif">Category Image</label>
                            <span className="p-float-label text-md font-bold font-serif">
                                <InputText className="bg-white" {...register('file', {
                                    required: 'File is required',
                                })} type="file" accept="image/*" onChange={fileSelected} />

                            </span>
                            {errors?.file && <p className="error-message">{errors.file?.message?.toString()}</p>}
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" className="text-green-600 text-xl bg-white drop-shadow-md font-bold  rounded-lg p-4 my-5" disabled={isSubmitting}>
                                {isSubmitting ? 'Adding...' : 'Add'}
                            </button>
                        </div>
                    </form>
                </Dialog >

            </div >
        </section >
    )
}

export default Categories