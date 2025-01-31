import UploadForm from "@/components/upload_form/upload_form"


const Upload_projectPage = () => {
    return (
        <main className=" h-screen overflow-y-scroll"
            style={{
                background: "url(https://i.ibb.co.com/RQ0VKbL/authentication.png)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >
            <div className=" container-css py-10 ">
                <h1 className=" text-center text-3xl font-semibold">Upload Project</h1>


                <div className=" mt-5">
                    <UploadForm />
                </div>
            </div>
        </main>
    )
}

export default Upload_projectPage
