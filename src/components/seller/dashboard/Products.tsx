
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toolbar } from "primereact/toolbar"
import { useEffect, useRef, useState } from "react";
import { Product } from "../../../class/inventory/Product";
import { InputText } from "primereact/inputtext";
import { debounce } from "lodash";
import { getAllProducts } from "../../../services/ProductService";

import { Tag } from "primereact/tag";
import { Rating } from "primereact/rating";


export const Products = () => {

    const [products, setProducts] = useState<Product[]>()
    const [selectedProducts, setSelectedProducts] = useState()
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef()

    useEffect(() => {
        getAllProducts()
            .then(
                (response: Response) => setProducts(response['data'])
            )
            .catch(error => console.error(error))
    }, []);

    const debouncedSetGlobalFilter = debounce((value) => {
        setGlobalFilter(value);
    }, 300);
    const startContent = (
        <>
            <button className="text-white text-sm font-bold font-mono bg-green-500  py-2 px-4 mx-2 rounded-lg shadow-md shadow-green-500"><i className="fa-solid fa-circle-plus p-1"></i>New</button>
            <button className="text-white text-sm font-bold font-mono bg-red-500  py-2 px-4 rounded-lg shadow-md shadow-red-500"><i className="fa-solid fa-trash  p-1"></i>Delete</button>
        </>
    );

    const endContent = (
        <>
            <button className="text-white text-sm font-bold font-mono bg-blue-400  py-2 px-4 rounded-lg shadow-md shadow-blue-400">
                <i className="fa-solid fa-file-arrow-down  p-1"></i>Export
            </button>
        </>
    );
    const header = (
        <div className="flex justify-between gap-2 p-2">
            <p className="p-3 text-white font-mono font-bold text-xl">Product Managements</p>
            <InputText type="search" onInput={(e) => debouncedSetGlobalFilter(e.target['value'])} placeholder="Search..." />
        </div>

    );
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
    const ratingBodyTemplate = (rowData: Product) => {

        return <Rating ptOptions={{}} value={rowData.rating} readOnly cancel={false} />;
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
                className=" text-lg font-bold font-mono border rounded-full text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500 py-2 px-4 mx-2">
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

        )
    }

    return (
        <>
            <Toolbar start={startContent} end={endContent} className="m-2 p-3 bg-green-300" />
            <div className="m-4">
                <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="_id" paginator rows={5} rowsPerPageOptions={[5, 10, 15]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header} className="bg-[#22C55E] hover:bg-[#FFFFFF]">
                    <Column selectionMode="multiple" exportable={false} ></Column>
                    <Column field="code" header="Code" className="text-black text-sm" headerStyle={{fontSize:"0.875rem"}}></Column>
                    <Column field="name" header="Name" sortable className=" text-black text-sm" headerStyle={{fontSize:"0.875rem"}}></Column>
                    <Column field="image" header="Image" body={imageTemplate} headerStyle={{fontSize:"0.875rem"}}></Column>
                    <Column field="price" header="Price" sortable className=" text-black text-sm" headerStyle={{fontSize:"0.875rem"}}></Column>
                    <Column field="category.name" header="Category" className=" text-black text-sm" headerStyle={{fontSize:"0.875rem"}}></Column>
                    <Column field="rating" header="Rating" body={ratingBodyTemplate} headerStyle={{fontSize:"0.875rem"}}></Column>
                    <Column field="quantity" header="Quantity" className=" text-black text-sm" headerStyle={{fontSize:"0.875rem"}}></Column>
                    <Column field="quantity" header="Status" body={statusBodyTemplate} headerStyle={{fontSize:"0.875rem"}}></Column>
                    <Column header="Action" body={actionBodyTemplate} headerStyle={{fontSize:"0.875rem"}}></Column>
                </DataTable>
            </div>
        </>
    )
}