/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

import { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { SellerRequest } from '../../class/seller/SellerRequest';
import { getAllRequests } from '../../services/seller/SellerService';

const RequestTable = () => {

    const [requests, setRequests] = useState<SellerRequest[]>(null)
    const [dialog, setDialog] = useState(false);
    const [selectedRequests, setSelectedRequests] = useState(null);
    const [_request,setRequest] = useState<SellerRequest>()
    const [_submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        getAllRequests()
            .then((response: Response) => setRequests(response['data']))
            .catch(error => console.error(error))
    }, []);

    const hideDialog = () => {
        setSubmitted(false);
        setDialog(false);
    };


    const saveProduct = () => {
        setSubmitted(true);

        // setRequests();
        // setProductDialog(false);
        // setProduct(emptyProduct);
        //}
    };

    const acceptRequest = (request:SellerRequest) => {
        setRequest(request);
        setDialog(true);
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <button type="button" className="text-xl text-white bg-green-500 rounded-lg shadow-md mx-2 p-2" onClick={() => acceptRequest(rowData)}><i className="fa-solid fa-check-to-slot"></i></button>
            </>
        );
    };



    const header = (
        <div className="flex flex-row gap-2">
            <h4 className="text-white font-bold font-serif text-xl p-2 md:p-4">Manage Requests</h4>
            <span className="p-2">
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target['value'])} placeholder="Search..." />
            </span>
            <button className="text-base text-white font-serif font-bold bg-green-700 rounded-md h-12 px-4 my-2" onClick={exportCSV}>
                <i className="fa-solid fa-file-arrow-down px-2"></i>
                Export
            </button>
        </div>
    );
    const productDialogFooter = (
        <>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </>
    );

    const documentTemplate = (data) => {
        return (
            <img src={data} alt="document" className="w-10 h-10" />
        )
    }

    const statusTemplate = (status: boolean) => {
        return (
                <Tag value={status == true ? 'Accepted' : 'Pending'} severity={status == true ? 'success' : 'warning'}></Tag>
        )
    }

    return (
        <>
            <Toast ref={toast} />
            <DataTable ref={dt} value={requests} selection={selectedRequests} onSelectionChange={(e) => setSelectedRequests(e.value)}
                dataKey="_id" paginator rows={5} rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} requests" globalFilter={globalFilter} header={header} className="bg-[#22C55E]">
                <Column selectionMode="multiple" exportable={false}></Column>
                <Column field="firstName" header="First Name" sortable style={{ minWidth: '9rem' }}></Column>
                <Column field="lastName" header="Last Name" sortable style={{ minWidth: '9rem' }}></Column>
                <Column field="email" header="Email" style={{ minWidth: '16rem' }}></Column>
                <Column field="phone" header="Phone No." style={{ minWidth: '8rem' }}></Column>
                <Column field="businessAddress" header="Address" sortable style={{ minWidth: '10rem' }}></Column>
                <Column field="businessType" header="Type" sortable style={{ minWidth: '8rem' }}></Column>
                <Column field="isAccept" header="Status" body={statusTemplate} sortable style={{ minWidth: '5rem' }}></Column>
                <Column field="document" header="Document" body={documentTemplate} style={{ minWidth: '12rem' }}></Column>
                <Column header="Action" body={actionBodyTemplate} exportable={false} style={{ minWidth: '3rem' }}></Column>
            </DataTable>


            <Dialog visible={dialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Request Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>

            </Dialog>

        </>
    );
}

const SellerRequests = () => {

    return (
        <section className="grid grid-cols-12">
            <div className="col-span-12">
                <h1 className="text-xl md:text-4xl font-serif font-bold">Seller Requests</h1>
            </div>
            <div className="col-span-12 m-3">
                <RequestTable />
            </div>
        </section>
    )
}

export default SellerRequests