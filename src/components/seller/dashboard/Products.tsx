
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toolbar } from "primereact/toolbar"
import { useEffect, useRef, useState } from "react";
import { Product } from "../../../class/inventory/Product";
import { debounce } from "lodash";
import { createProduct, getAllProducts } from "../../../services/inventory/ProductService";
import { Dialog } from 'primereact/dialog';
import { Tag } from "primereact/tag";
import { Rating } from "primereact/rating";
import { InputText } from "primereact/inputtext";
import { FieldValues, useForm } from "react-hook-form";
import { Category } from "../../../class/Category";
import { getAllCategories } from "../../../services/CategoryService";


export const Products = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [selectedProducts, setSelectedProducts] = useState()
    const [filter, setGlobalFilter] = useState('');
    const [visible, setVisible] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [categories,setCategories] = useState<Category[]>([])
    const [trigger,setTrigger] = useState<boolean>(false)
    const dt = useRef<DataTable<Product[]>>(null)
    const { handleSubmit, register,reset, formState: { errors } } = useForm();

    useEffect(() => {
        getAllCategories()
        .then((response:Response)=> setCategories(response['data']))
        .catch(error=>console.log(error))
        getAllProducts()
            .then((response: Response) => setProducts(response['data']))
            .catch(error => console.error(error))
    }, [trigger]);


    const debouncedSetGlobalFilter = debounce((value) => {
        if (value == "") {
            setGlobalFilter(" ")
            return
        }
        setGlobalFilter(value)
    }, 300);

    const getSeverity = (quantity: number) => {
        switch (true) {
            case quantity == 0:
                return "danger";
            case quantity < 11:
                return "warning";
            default:
                return "success";
        }
    };
    const getValue = (quantity: number) => {
        switch (true) {
            case quantity == 0:
                return "NOSTOCK";
            case quantity < 11:
                return "LOWSTOCK";

            default:
                return "INSTOCK";
        }
    };

    const startContent = (
        <>
            <button className="text-white text-sm font-bold font-mono bg-green-500  py-2 px-4 mx-2 rounded-lg shadow-md shadow-green-500" onClick={() => setVisible(true)}><i className="fa-solid fa-circle-plus p-1"></i>New</button>
            <button className="text-white text-sm font-bold font-mono bg-red-500  py-2 px-4 rounded-lg shadow-md shadow-red-500"><i className="fa-solid fa-trash  p-1"></i>Delete</button>
        </>
    );

    const endContent = (

        <button className="text-white text-sm font-bold font-mono bg-blue-400  py-2 px-4 rounded-lg shadow-md shadow-blue-400">
            <i className="fa-solid fa-file-arrow-down  p-1"></i>Export
        </button>

    );
    const header = (
        <div className="flex justify-between gap-2 p-2">
            <p className="p-3 text-white font-mono font-bold text-xl">Product Managements</p>
            <InputText type="search" className="p-3" onChange={(e) => debouncedSetGlobalFilter(e.target['value'])} placeholder="Search..." />
        </div>

    );
    const ratingBodyTemplate = (rowData: Product) => {

        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const imageTemplate = (rowData: Product) => {
        return <img src={`${rowData.imageSrc}`} alt="image" className="rounded-md drop-shadow-lg" style={{ width: '44px' }} />;
    }

    const statusBodyTemplate = (rowData: Product) => {
        return <Tag value={getValue(rowData.quantity)} severity={getSeverity(rowData.quantity)} className="text-sm shadow-md shadow-black/50"></Tag>;
    }

    const actionBodyTemplate = () => {
        return (
            <button
            onClick={()=>setEdit(true)}
                className=" text-lg font-bold font-mono border rounded-full text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500 py-2 px-4 mx-2">
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

        )
    }

    const onSubmit = (data: FieldValues) => {
        
        let product = new Product()

        product.name = data.productName
        product.description = data.descrition
        product.quantity = data.quantity
        product.price = data.price
        product.rating = 0
        
        let category = new Category()
        category._id = data.category

        product.category = category

        createProduct(product,data.image[0])
        .then((_response)=>reset())
        .catch(error=>console.log(error))
        .finally(()=> {
            setTrigger(!trigger)
            setVisible(false)

        })
    }
    const ProductForm = () => {
        return (
            <form className="p-2" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col gap-1 m-1">
                    <label htmlFor="productName" className="text-black font-bold font-serif text-sm">Name {errors.productName && <span className="text-red-600 px-1">{errors.productName.message.toString()}</span>}</label>
                    <input {...register('productName', {
                        required: 'Product Name is required',
                    })} type="text" id="productName" name="productName" className="w-full border border-green-500 rounded-lg p-2 " placeholder="Product Name" />

                </div>
                <div className="flex flex-col gap-1 m-1">
                    <label htmlFor="description" className="text-black font-bold font-serif text-sm">Description{errors.description && <span className=" text-red-600 px-2">{errors.description.message.toString()}</span>}</label>
                    <textarea name="description" id="description" cols={30} rows={3} className="border border-forest-green rounded-lg p-2" {...register('description', { required: 'Description is required' })} placeholder="Write detail of product"></textarea>
                </div>
                <div className="flex flex-col gap-1 m-1">
                    <label htmlFor="image" className="text-black font-bold font-serif text-sm" >Image{errors.image && <span className=" text-red-600 px-2">{errors.image.message.toString()}</span>}</label>
                    <input type="file" className="border border-forest-green rounded-lg p-2"{...register('image', { required: 'Image is required' })} accept="image/*" />
                </div>
                <div className="flex flex-col gap-1 m-1">
                    <label htmlFor="category" className="text-black font-bold font-serif text-sm" >Category{errors.category && <span className=" text-red-600 px-2">{errors.category.message.toString()}</span>}</label>
                    <select name="category" id="category" className="border border-forest-green rounded-lg p-2" {...register('category', { required: 'Category is required' })} placeholder="Select Category">
                        {
                            categories?.map(category=>(
                                <option value={category._id} key={category._id}>{category.name}</option>))
                        }
                    </select>
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-1 m-1">
                        <label htmlFor="price" className="text-black font-bold font-serif text-sm">Price{errors.price && <span className=" text-red-600 px-2">{errors.price.message.toString()}</span>}</label>
                        <input type="text" className="border border-forest-green rounded-lg p-2"  {...register('price', { required: 'Price is required', pattern: { value: /^[0-9]+$/, message: 'Quantity must be a valid number' } })} placeholder="200" />
                    </div>
                    <div className="flex flex-col gap-1 m-1">
                        <label htmlFor="quantity" className="text-black font-bold font-serif text-sm" >Quantity{errors.quantity && <span className=" text-red-600 px-2">{errors.quantity.message.toString()}</span>}</label>
                        <input type="text" className="border border-forest-green rounded-lg p-2" {...register('quantity', { required: 'Quantity is required', pattern: { value: /^[0-9]+$/, message: 'Quantity must be a valid number' } })} placeholder="10" />
                    </div>
                </div>
                <div className="mb-0 mt-3 flex justify-center">
                    <button type="submit" className="text-white font-bold font-serif bg-green-600 rounded-md shadow-sm shadow-black/50 p-2">Submit</button>
                </div>

            </form>
        )
    }

    return (
        <>
            <Toolbar start={startContent} end={endContent} className="m-2 p-3 bg-green-300" />
            <div className="m-4">
                <DataTable ref={dt} value={products} size="large" globalFilter={filter} globalFilterFields={['name', 'code', 'price', 'category.name']} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="_id" paginator rows={5} rowsPerPageOptions={[5, 10, 15]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" header={header} className="bg-[#22C55E] hover:bg-[#FFFFFF]" emptyMessage="No Product found">
                    <Column selectionMode="multiple" exportable={false} ></Column>
                    <Column field="code" header="Code" ></Column>
                    <Column field="name" header="Name" sortable ></Column>
                    <Column field="image" header="Image" body={imageTemplate}></Column>
                    <Column field="price" header="Price" sortable ></Column>
                    <Column field="category.name" header="Category" ></Column>
                    <Column field="rating" header="Rating" body={ratingBodyTemplate}></Column>
                    <Column field="quantity" header="Quantity" ></Column>
                    <Column field="quantity" header="Status" body={statusBodyTemplate}></Column>
                    <Column header="Action" exportable={false} body={actionBodyTemplate}></Column>
                </DataTable>
                <Dialog header="Add New Product" visible={visible} style={{ width: 'fit-content' }} onHide={() => setVisible(false)}>
                    <ProductForm />
                </Dialog>
                <Dialog header="Edit Product" visible={edit} style={{ width: 'fit-content' }} onHide={() => setEdit(false)}>
                    <ProductForm />
                </Dialog>
            </div>
        </>
    )
}