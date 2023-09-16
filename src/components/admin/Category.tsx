import { Column } from "primereact/column"
import { DataTable } from "primereact/datatable"
import { InputText } from "primereact/inputtext"
import { Toolbar } from "primereact/toolbar"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { debounce } from 'lodash';

const Categories = () => {

    const [categories, setCategories] = useState<Category[]>(null)
    const [selectedCategory, setSelectedCategory] = useState<Category>(null)
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState(null);

    const dt = useRef(null)

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
        // setProduct(emptyProduct);
        // setSubmitted(false);
        // setProductDialog(true);
    };

    const hideDialog = () => {
        // setSubmitted(false);
        // setProductDialog(false);
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
    return (
        <section className="grid grid-cols-12">
            <div className="col-span-12 mb-4">
                <h1 className="text-xl md:text-3xl font-serif font-bold">Category Management</h1>
            </div>
            <div className="col-span-12 mx-auto">
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
            </div>
        </section>
    )
}

export default Categories